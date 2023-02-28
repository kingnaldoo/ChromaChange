import { doc, Firestore, getDoc, setDoc, updateDoc } from "firebase/firestore";

export async function setFirebaseData(
{ firestore, collection, docId, data }: { firestore: Firestore; collection: string; docId: string; data: any; }) {
  const value = await setDoc(doc(firestore, collection, docId), data);
  return value;
}

export async function getFirebaseData(firestore: Firestore, collection: string, docId: string) {
  const value = await getDoc(doc(firestore, collection, docId));
  return value;
}

export async function updateFirebaseData(
  firestore: Firestore,
  collection: string,
  docId: string,
  data: any
) {
  const value = await updateDoc(doc(firestore, collection, docId), data);
  return value;
}
