import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzgBJcu5O-CoT8_2nP9uZTKQA-mfknHv0",
  authDomain: "chatgpt-messenger-b0730.firebaseapp.com",
  projectId: "chatgpt-messenger-b0730",
  storageBucket: "chatgpt-messenger-b0730.appspot.com",
  messagingSenderId: "262806456507",
  appId: "1:262806456507:web:c75faccd18c2308665019e",
  measurementId: "G-60YKWYXFC1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db  = getFirestore(app);

export {db};
