import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

import { db } from "../../utils/firebase";

export type DbDataType = {
  title: string;
  url: string;
  favIconUrl: string;
  ownerEmail: string;
};
export type QueryType = {
  owneremail: string;
};

export async function getFromFirestore(owneremail: string) {
  const customCollectionRef = collection(db, "customLink");
  try {
    const constraint = query(customCollectionRef, where("ownerEmail", "==", owneremail));
    const response = await getDocs(constraint);
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function sendToFirestore({ title, url, favIconUrl, ownerEmail }: DbDataType) {
  const customCollectionRef = collection(db, "customLink");
  try {
    await addDoc(customCollectionRef, { title, url, favIconUrl, ownerEmail });
    console.log("sent!");
  } catch (err) {
    console.log(err);
  }
}
