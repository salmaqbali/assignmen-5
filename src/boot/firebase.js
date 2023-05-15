import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4diYGYyKR-x84z0VtV-JaV2NypN15G6A",
  authDomain: "quitter2-9df1f.firebaseapp.com",
  projectId: "quitter2-9df1f",
  storageBucket: "quitter2-9df1f.appspot.com",
  messagingSenderId: "859100133428",
  appId: "1:859100133428:web:3fbbeeaba46937e929b261",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
