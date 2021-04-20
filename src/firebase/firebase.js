import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIcXCoN-EV_wDoAI2uTaUddB68hWgQoBQ",
    authDomain: "framework-prog.firebaseapp.com",
    databaseURL: "https://framework-prog-default-rtdb.firebaseio.com",
    projectId: "framework-prog",
    storageBucket: "framework-prog.appspot.com",
    messagingSenderId: "889973261646",
    appId: "1:889973261646:web:8b3cc040e43792a5f68a1f",
    measurementId: "G-LT2NSNV11E"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb