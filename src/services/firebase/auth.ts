import { Auth, signInWithEmailAndPassword, signOut as fbSignOut } from "firebase/auth";

export async function signIn(auth: Auth, email: string, password: string) {
  const value = await signInWithEmailAndPassword(auth, email, password);
  return value;
}

export async function signOut(auth: Auth) {
  const value = await fbSignOut(auth);
  return value;
}
