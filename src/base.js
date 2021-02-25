import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCg5q2cBGz-7HdwvFLTN8gldO3GT0kFM6g",
  authDomain: "bookmarks-fdd01.firebaseapp.com",
  projectId: "bookmarks-fdd01",
  storageBucket: "bookmarks-fdd01.appspot.com",
  messagingSenderId: "975984786257",
  appId: "1:975984786257:web:38d80af765fd5679ceb170",
  measurementId: "G-1KJ268HF46",
});

export const auth = app.auth();
export const db = app.firestore();
