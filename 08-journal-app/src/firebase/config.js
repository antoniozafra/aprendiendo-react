// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsxXcuLo6jGeFzH4RoEyAnSY7vWXP86Sk",
  authDomain: "react-cursos-b10d9.firebaseapp.com",
  projectId: "react-cursos-b10d9",
  storageBucket: "react-cursos-b10d9.appspot.com",
  messagingSenderId: "244656869819",
  appId: "1:244656869819:web:57cdd29c7da52591ecb49e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore( FirebaseApp);
