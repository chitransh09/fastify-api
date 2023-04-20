import { initializeApp, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = require("../../assets/serviceAccount.json");

try {
  initializeApp({
    credential: cert(serviceAccount),
  });
} catch (err) {
  console.log(err);
}

export const db = getFirestore();
