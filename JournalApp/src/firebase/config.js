// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
//Dev/prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBsxXcuLo6jGeFzH4RoEyAnSY7vWXP86Sk",
//   authDomain: "react-cursos-b10d9.firebaseapp.com",
//   projectId: "react-cursos-b10d9",
//   storageBucket: "react-cursos-b10d9.appspot.com",
//   messagingSenderId: "244656869819",
//   appId: "1:244656869819:web:57cdd29c7da52591ecb49e"
// };
//Testing
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZzDVRPz1kKDS7TfECCR74M0IOdhi-0K8",
  authDomain: "testing-5933c.firebaseapp.com",
  projectId: "testing-5933c",
  storageBucket: "testing-5933c.appspot.com",
  messagingSenderId: "371278455075",
  appId: "1:371278455075:web:fa92fcb8d3fc91c7af2c96"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );