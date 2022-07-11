import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBJtlgNEgTNZdILqGHH7UASAlk-Y65rcBM",
  authDomain: "e-commers-rammstein.firebaseapp.com",
  projectId: "e-commers-rammstein",
  storageBucket: "e-commers-rammstein.appspot.com",
  messagingSenderId: "990234152477",
  appId: "1:990234152477:web:59d209d84b4bf657bfc0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)