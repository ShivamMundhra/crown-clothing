import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBxR9ox1-TYRvlSaSDgTBRQAuOPhVvzeT0",
  authDomain: "crown-clothing-5f5a6.firebaseapp.com",
  databaseURL: "https://crown-clothing-5f5a6.firebaseio.com",
  projectId: "crown-clothing-5f5a6",
  storageBucket: "crown-clothing-5f5a6.appspot.com",
  messagingSenderId: "358317209213",
  appId: "1:358317209213:web:7e4b8ede04474b18982314",
  measurementId: "G-5HBQQPYE25",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
