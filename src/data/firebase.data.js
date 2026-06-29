import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'dotenv/config';
console.log("Firebase Config");

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Check if projectId is provided to avoid firebase initialization errors
if (!firebaseConfig.projectId || firebaseConfig.projectId.includes("your_project_id")) {
  console.warn("WARNING: Firebase Project ID is not configured. Database calls will fail until valid credentials are provided in .env.");
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
