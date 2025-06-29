import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getUserRole(uid: string): Promise<string | null> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data();
    return data.role || null;
  }
  return null;
}
