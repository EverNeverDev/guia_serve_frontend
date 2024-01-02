import { userRepo } from "@/app/common";
import authService from "@/app/common/services/auth.service";
import { IUser } from "@/app/common/types";
import { AuthError } from "firebase/auth";
import { toast } from "react-toastify";
import { create } from "zustand";

interface authState {
  user: IUser;
  isLoading: boolean;
  loadUser: () => void;
  loginWithGoogle: () => void;
  login: (email: string, password: string) => void;
  register: () => void;
  isSigned: boolean;
}

const defaultUser: IUser = {
  name: "",
  photo: "",
  role: "",
  cpf: "",
  contact: "",
  address: {
    city: "",
    state: "",
    publicPlace: "",
    zipCode: "",
    neighborhood: "",
    number: "",
  },
};

const useAuthState = create<authState>()((set) => ({
  user: defaultUser,
  isLoading: false,
  isSigned: false,
  loginWithGoogle: async () => {
    set({ isLoading: true });
    try {
      const result = await authService.googleSignInWithPopup();
      const userData = await userRepo.getUserById(result.uid);
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData as IUser, isSigned: true });
      toast.success("Login realizado com sucesso!");
    } catch (error: any) {
      const message = authService.handleFirebaseAuthError(
        error.code as AuthError["code"]
      );
      toast.error(message);
      console.error("Error when we tried to login", error);
    } finally {
      set({ isLoading: false });
    }
  },
  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const result = await authService.loginWithEmailAndPassword(
        email,
        password
      );
      const userData = await userRepo.getUserById(result.uid);
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData as IUser, isSigned: true });
      toast.success("Login realizado com sucesso!");
    } catch (error: any) {
      const message = authService.handleFirebaseAuthError(
        error.code as AuthError["code"]
      );
      toast.error(message);
      console.error("Error when we tried to login", error);
    } finally {
      set({ isLoading: false });
    }
  },
  register: () => {},
  loadUser: () => {
    set({ isLoading: true });
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) return;
      const user = JSON.parse(storedUser) as IUser;
      if (!user) return;
      set({ user, isSigned: true });
    } catch (error) {
      console.error("Error when we tried to loadUser", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthState;
