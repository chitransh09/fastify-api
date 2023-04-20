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
  const customLinkRef = db.collection("customLink");

  try {
    const response = await customLinkRef.where("ownerEmail", "==", owneremail).get();
    if (response.empty) {
      return { message: "No matching documents" };
    }

    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function sendToFirestore({ title, url, favIconUrl, ownerEmail }: DbDataType) {
  const customLinkRef = db.collection("customLink");
  const data = { title, url, favIconUrl, ownerEmail };

  try {
    await customLinkRef.add(data);
    console.log("sent!");
  } catch (err) {
    console.log(err);
  }
}
