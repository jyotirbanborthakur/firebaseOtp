import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAxCmHGFJf6XMygfsvGj_LRFizKSErSlw4",

  authDomain: "fir-b6d1d.firebaseapp.com",

  projectId: "fir-b6d1d",

  storageBucket: "fir-b6d1d.appspot.com",

  messagingSenderId: "767841012874",

  appId: "1:767841012874:web:e7a9a44b63feb096f6b173",

  measurementId: "G-BDBXFDB6T1"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
