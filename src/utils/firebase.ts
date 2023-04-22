console.log("executing firebase.ts");
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// const serviceAccount = require("../../assets/serviceAccount.json");
console.log("starting to read env");
const data = process.env.FIREBASE_SERVICE_KEY!;
// console.log("🚀 ⚡ file: firebase.ts:6 ⚡ data:", data);
const serviceAccount = Buffer.from(data, "base64").toString("utf8");

try {
  initializeApp({
    // credential: cert(serviceAccount),
    credential: cert(JSON.parse(serviceAccount)),
  });
} catch (err) {
  console.log(err);
}

export const db = getFirestore();
