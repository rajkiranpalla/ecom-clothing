// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc ,getFirestore, setDoc} from "firebase/firestore";

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

//getAuth
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth,provider);

//getFirestore
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = doc(db,`users/${userAuth.uid}`);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    const {displayName,email} = userAuth;
    const createdTimeStamp = new Date();
    try{
      await setDoc(userRef,{
        displayName,
        email,
        createdTimeStamp,
        ...additionalData
      });
    }catch(error){
      console.log('failed to create user in database',error);
    }
  }
  return userRef;
}

export const createUserWithEmailandPassword = async (email,password) => {
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInWithEmailandPassword = async (email,password) => {
  try{
    return await signInWithEmailAndPassword(auth,email,password);
  }catch(error){
    console.log(error);
  }
  }
  