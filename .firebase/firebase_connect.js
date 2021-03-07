import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCbLIIXGs2pZMq7PAQ6OQbOIwBWHOXy_uA",
  authDomain: "findyourfit-f796c.firebaseapp.com",
  databaseURL: "https://findyourfit-f796c-default-rtdb.firebaseio.com",
  projectId: "findyourfit-f796c",
  storageBucket: "findyourfit-f796c.appspot.com",
  messagingSenderId: "896675566116",
  appId: "1:896675566116:web:1834adc1d309fd56ee7eb1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();