// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLNGKUn8rjftZqo9_73nZnMT33sevQbLI",
    authDomain: "chat-45e84.firebaseapp.com",
    projectId: "chat-45e84",
    storageBucket: "chat-45e84.appspot.com",
    messagingSenderId: "387038410645",
    appId: "1:387038410645:web:b1e792d354881404f1289c"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

