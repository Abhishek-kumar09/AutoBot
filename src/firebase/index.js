import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAXDZyrjoecK8m-Jo8-ETcPLJD_NjHWCPE",
  authDomain: "autobot-mlh.firebaseapp.com",
  databaseURL: "https://autobot-mlh-default-rtdb.firebaseio.com",
  projectId: "autobot-mlh",
  storageBucket: "autobot-mlh.appspot.com",
  messagingSenderId: "111688800210",
  appId: "1:111688800210:web:9f318cf638370109851a0b",
  measurementId: "G-LH29FJNP7B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const logout = () => auth.signOut();


export default firebase;