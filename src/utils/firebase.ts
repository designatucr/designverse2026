import admin from "firebase-admin";
// import serviceAccount from "./designverse2026-475822-efc1bbfaeda9.json";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: process.env.PROJECT_ID,
//     clientEmail: process.env.CLIENT_EMAIL,
//     privateKey: process.env.PRIVATE_KEY,
//   }),
//   databaseURL: process.env.FIREBASE_DB_URL,
// });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
