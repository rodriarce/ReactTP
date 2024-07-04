
import { initializeApp } from "firebase/app";
import {getAuth, setPersistence, browserLocalPersistence}   from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCeg89s3jxACabdK9NYVljXwGrmsCq2wvw",
  authDomain: "react-martes-auth-408bf.firebaseapp.com",
  projectId: "react-martes-auth-408bf",
  storageBucket: "react-martes-auth-408bf.appspot.com",
  messagingSenderId: "553915316865",
  appId: "1:553915316865:web:7e77234447ff8876e7eb80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).then(() => {console.log("Succes Auth User")})
.catch((error) => {console.log("Error setting Persistence")});
