import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAlRW7uPGFqGv-Fz_VriLdXDio7hEEdvZI",
    authDomain: "findyourfit-84a6c.firebaseapp.com",
    projectId: "findyourfit-84a6c",
    storageBucket: "findyourfit-84a6c.appspot.com",
    messagingSenderId: "572309861585",
    appId: "1:572309861585:web:3a5070e44be69708c101f0"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);