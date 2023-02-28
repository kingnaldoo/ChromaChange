import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDMRrWEqssYVYNSw7DIyEM-O_rrBbl9Q-8",
  authDomain: "chromachange.firebaseapp.com",
  projectId: "chromachange",
  storageBucket: "chromachange.appspot.com",
  messagingSenderId: "372259583780",
  appId: "1:372259583780:web:7c7aaf386439f28e1a65b1"
};

export const firebaseApp = initializeApp(firebaseConfig);
