import { auth, googleAuthProvider } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User,
  AuthError,
  signInWithPopup,
} from "firebase/auth";

class AuthService {
  public handleFirebaseAuthError(error: AuthError["code"]) {
    const errorMessages: Record<string, string> = {
      "auth/invalid-credential": "Email ou senha incorretos",
      "auth/user-not-found": "Usuário não encontrado",
      "auth/invalid-email": "Email inválido",
      "auth/wrong-password": "Senha incorreta, tente novamente",
      "auth/email-already-in-use": "O email já está cadastrado",
      "auth/weak-password": "Senha fraca, é necessário no mínimo 6 caracteres",
      default: "Ocorreu um erro, tente novamente mais tarde!",
    };
    const errorMessage = errorMessages[error] || errorMessages.default;
    return errorMessage;
  }

  public async registerWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result.user;
    } catch (error) {
      console.error("Could not create user", error);
      throw error;
    }
  }

  public async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error("Error signing in with email and password", error);
      throw error;
    }
  }

  public async recoveryPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error sending password reset email", error);
      throw error;
    }
  }

  public async googleSignInWithPopup() {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      if (!result) throw new Error("Cannot found user");
      const user = result.user;
      return user;
    } catch (error) {
      console.error("Could not signInWithGoogle");
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
