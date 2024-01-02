import { db } from "@/config/firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { User } from "firebase/auth";

const userCollectionRef = collection(db, "users");
const addressCollectionRef = collection(db, "address");
class UserRepo {
  public async createUser(userAuth: User, userDto: any) {
    const userDocRef = doc(userCollectionRef, userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const addressDocRef = doc(addressCollectionRef, userAuth.uid);
    const exists = userSnapshot.exists();
    if (exists) return userDocRef;
    const { email } = userAuth;
    const { name, contact, photoUrl, bio, contactIdentity, address } = userDto;
    const { neighborhood, publicPlace, number, zipCode, complement } = address;
    const createdAt = new Date();
    const updatedAt = new Date();
    try {
      await setDoc(addressDocRef, {
        neighborhood,
        publicPlace,
        number,
        zipCode,
        complement,
      });
      await setDoc(userDocRef, {
        name,
        email,
        contact,
        photoUrl,
        contactIdentity,
        bio,
        createdAt,
        updatedAt,
        addressId: addressDocRef.id,
      });
      return {
        name,
        email,
        contact,
        photoUrl,
        contactIdentity,
        bio,
        createdAt,
        updatedAt,
        address,
        id: userDocRef.id,
      };
    } catch (error) {
      console.error("Error when we tried to create user", error);
    }
  }

  public async getUserById(userId: string) {
    const userDocRef = doc(userCollectionRef, userId);
    const addressDocRef = doc(addressCollectionRef, userId);
    try {
      const userSnapshot = await getDoc(userDocRef);
      const addressSnapshot = await getDoc(addressDocRef);

      const userData = userSnapshot.data();
      const addressData = addressSnapshot.data();
      return {
        ...userData,
        address: addressData,
        id: userDocRef.id,
      };
    } catch (error) {
      console.error("Error when we tried to retrieve the user data", error);
    }
  }

  public async updateUser(userId: string, userDTO: any) {
    const userDocRef = doc(userCollectionRef, userId);
    const userSnapshot = await getDoc(userDocRef);
    const exists = userSnapshot.exists();
    if (!exists) return console.error(`Could not find user ${userId}`);
    try {
      const { name, photoUrl, bio, contact, address } = userDTO;
      await updateDoc(userDocRef, {
        name,
        photoUrl,
        bio,
        contact,
        address,
      });
    } catch (error) {
      console.error("Error when we tried to update user", error);
    }
  }
}

const userRepo = new UserRepo();

export default userRepo;
