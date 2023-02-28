import { doc, getDoc, setDoc, updateDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../firebase-config";

const firestore = getFirestore(firebaseApp);

export async function setFirebaseData(
{ collection, docId, data }: { collection: string; docId: string; data: any; }) {
  const value = await setDoc(doc(firestore, collection, docId), data);
  return value;
}

export async function getFirebaseData(collection: string, docId: string) {
  const value = await getDoc(doc(firestore, collection, docId));
  return value;
}

export async function updateFirebaseData(
  collection: string,
  docId: string,
  data: any
) {
  const value = await updateDoc(doc(firestore, collection, docId), data);
  return value;
}
