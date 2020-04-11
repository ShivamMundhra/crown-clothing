import firebase from "firebase/app";
import { firebaseConfig } from "../firebase.config";

import "firebase/auth";
import "firebase/firestore";

const config = firebaseConfig;

export const createUserProfile = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("Error Creating user" + error.message);
      }
    }
    return userRef;
  } else return;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
