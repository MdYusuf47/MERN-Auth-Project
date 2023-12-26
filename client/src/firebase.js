// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3a402.firebaseapp.com",
  projectId: "mern-auth-3a402",
  storageBucket: "mern-auth-3a402.appspot.com",
  messagingSenderId: "99934940936",
  appId: "1:99934940936:web:e6ca439d4ec9bff58886bd"
};


export const app = initializeApp(firebaseConfig);