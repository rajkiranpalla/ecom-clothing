// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU4-mzM35YaBkPjrWscnvDt6e7lNmHyMs",
  authDomain: "ecom-clothingdb.firebaseapp.com",
  projectId: "ecom-clothingdb",
  storageBucket: "ecom-clothingdb.appspot.com",
  messagingSenderId: "332327083067",
  appId: "1:332327083067:web:45de816a7c080ec0ed101e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth,provider);