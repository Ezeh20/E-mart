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
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

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

//This function will create/upload a new collection in our firestore and write a document in it
//It will take two args (the collection key/name and the document to be uploaded(our shop_data obj))
export const uploadCollectionAndDocument = async (collectionName, dataToUpload) => {
  //state the collection Document reference which take the firestore instance and the collection Name
  const collectionRef = collection(database, collectionName)
  //Now we have a collectionRef what we need to do now is to figure how to write each of our Document(dataToUpload) to the collection
  //To do a write, we need to think about the concept of transactions.A transcation represents a successfull unit of work to a database
  //a unit of work defers, it may be multiple sets of setting values into a collection
  //in this case we can say the unit of work is successfull if all our document writes to the collection, since we have more than 1 document,
  //this transcation will only be successfull if each multiple sets goes through
  //In our case we are to carry out just one write because the very transcation is not dependent on another write(we are just uploading)
  //but in the case of a transcation that depends on two or more writes, just like a bank. For this transcation to be successfull, each write
  //must be successfull{ebuka transfers 1000 to tunde, the database should perform a write that removes 1000 from ebuka's balance.This is one write}
  //{tunde's balance should have +1000.This is another write}
  //if for any reason either ebuka's write or tunde's fails, this transcation is said to be unsuccessfull. although there are two writes happening here
  //It still counts as 1 unit of work
  const batch = writeBatch(database)
  dataToUpload.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}

//create users in the firestore database
export const storeAuthUsers = async (user, additonalInfo = {}) => {
  if (!user) return;
  // doc takes 3 arg firestore instance, collection, id. This holds the document refrence of our user collection
  const userDocRef = doc(database, "users", user.uid);
  //get user snapshot
  const userSnapshot = await getDoc(userDocRef);

  // check if a user exits, if the user dose not, set / create the user
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const created = new Date();

    try {
      //create a new user
      await setDoc(userDocRef, {
        displayName,
        email,
        created,
        ...additonalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    return userDocRef;
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

export const SignOut = async () => await signOut(auth);

/**
 * This will be our auth observer, it monitors user's auth flow if the user signs in or out,
 * It updates our current user's state
 * it takes the auth and a callback, the callback runs when the observer changes the user's state
 * doing this will help isolate most of our setCurrentUser function in one location as oppose to
 * calling the setter function everytime
 */

export const onAuthChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
