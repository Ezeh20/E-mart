//import intializeApp function from firebase to create an app instance
//this app instance receives an object config file which connects
//this instance to your online project

import { initializeApp } from "firebase/app";
/**
 * The auth process is imported from firebase/auth
 * @getAuth : carries out the authentication with firebase throught the app
 * @GoogleAuthProvider : is a class constructor that provide means of signing In with google
 * it provide a prompt that may ask users to select an account
 * @signInWithRedirect and @signInWithPopup are functions that takes in the @getAuth and the provider
 * provided by the @GoogleAuthProvider
 */

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsceErr2hLydyVnzNf8cPDeGC_iBpyAII",
  authDomain: "e-mart-49296.firebaseapp.com",
  projectId: "e-mart-49296",
  storageBucket: "e-mart-49296.appspot.com",
  messagingSenderId: "134425892629",
  appId: "1:134425892629:web:299e71c5173151c7ff3b1c",
};

//the initializeApp function the takes in the config file as an agument
//Now the app is connected

const firebaseApp = initializeApp(firebaseConfig);
//creates a new instance of a provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithRedirect(auth, provider);

//Create an instance of firestore

const database = getFirestore();

//create users in the firestore database
export const storeAuthUsers = async (user, additonalInfo = {}) => {
  if (!user) return;
  // doc takes 3 arg firestore instance, collection, id
  const users = doc(database, "users", user.uid);
  //get user snapshot
  const userSnapshot = await getDoc(users);

  // check if a user exits, if the user dose not, set / create the user
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const created = new Date();

    try {
      //create a new user 
      await setDoc(users, {
        displayName,
        email,
        created,
        ...additonalInfo
      });
    } catch (err) {
      console.log(err);
    }
  } else {
      return users
  }
};

export const createUserWithEmailAndPass = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPass = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};