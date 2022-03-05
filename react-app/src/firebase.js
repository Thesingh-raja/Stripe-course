import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyB3lPgDllFtGny-MqXPDsi_w37Q8Ll-txg",
  authDomain: "stripe-js-thesingh.firebaseapp.com",
  databaseURL: "https://stripe-js-thesingh-default-rtdb.firebaseio.com",
  projectId: "stripe-js-thesingh",
  storageBucket: "stripe-js-thesingh.appspot.com",
  messagingSenderId: "928611632978",
  appId: "1:928611632978:web:c3973c8033546f05ad9c8b"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();
