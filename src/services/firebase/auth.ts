import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut } from "firebase/auth";
import { firebaseApp } from "../../../firebase-config";

const auth = getAuth(firebaseApp);

export async function signIn(email: string, password: string) {
  const value = await signInWithEmailAndPassword(auth, email, password);
  return value;
}

export async function signOut() {
  const value = await fbSignOut(auth);
  return value;
}
