import { initializeApp } from "firebase/app";
import {getFarestore, getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAdyL3YkdHRsDeFESdug6LT3F_GSY0vzSs",
  authDomain: "impact-e057d.firebaseapp.com",
  projectId: "impact-e057d",
  storageBucket: "impact-e057d.appspot.com",
  messagingSenderId: "847658059173",
  appId: "1:847658059173:web:0a896708482c4cf4c5144c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()