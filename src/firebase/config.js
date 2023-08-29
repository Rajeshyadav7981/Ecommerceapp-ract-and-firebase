
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDf-p3ps62VconQZQjWQysTJjLelqevge0",
  authDomain: "rajesh-963a5.firebaseapp.com",
  projectId: "rajesh-963a5",
  storageBucket: "rajesh-963a5.appspot.com",
  messagingSenderId: "785533723952",
  appId: "1:785533723952:web:00a632c0d81b4f694754f5"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export  default app;