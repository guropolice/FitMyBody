import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCbLIIXGs2pZMq7PAQ6OQbOIwBWHOXy_uA",
    authDomain: "findyourfit-f796c.firebaseapp.com",
    projectId: "findyourfit-f796c",
    storageBucket: "findyourfit-f796c.appspot.com",
    messagingSenderId: "896675566116",
    appId: "1:896675566116:web:1834adc1d309fd56ee7eb1"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

const login = document.querySelector(".login-form");

let authProvider = new firebase.auth.GoogleAuthProvider();

authService.onAuthStateChanged(function(user){
    if(user){
        //인증성공
        console.log(user);
    } else{
        //인증실패
        authService.signInWithPopup(authProvider);
    }
});