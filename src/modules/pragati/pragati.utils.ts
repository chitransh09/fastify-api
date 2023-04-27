console.log("executing pragati.utils.ts ");

import { db } from "../../utils/firebase";

// ======================================

export type DbDataType = {
  title: string;
  url: string;
  favIconUrl: string;
  ownerEmail: string;
};
export type DbFetchedDataType = DbDataType & { id: string };
export type QueryType = {
  owneremail: string;
};

export function isDbDataTypeArray(arg: any): arg is DbDataType[] {
  return arg && arg[0].title !== undefined;
}

// ======================================

export async function getFromFirestore(owneremail: string) {
  const customLinkRef = db.collection("customLink");

  try {
    const response = await customLinkRef.where("ownerEmail", "==", owneremail).get();
    if (response.empty) {
      return { message: "No matching documents" };
    }

    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id } as DbFetchedDataType));

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

export async function deleteInFirestore(id: string) {
  const customLinkRef = db.collection("customLink");

  try {
    await customLinkRef.doc(id).delete();
    console.log("deleted!");
  } catch (err) {
    console.log(err);
  }
}
