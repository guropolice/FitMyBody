// let Config = {
//     apiKey: "AIzaSyCbLIIXGs2pZMq7PAQ6OQbOIwBWHOXy_uA",
//     authDomain: "findyourfit-f796c.firebaseapp.com",
//     databaseURL: "https://findyourfit-f796c-default-rtdb.firebaseio.com/",
//     storageBucket: "findyourfit-f796c.appspot.com"
// };

// firebase.initializeApp(Config);

import "../.firebase/firebase_connect";

// Sign out
export const logOut = () => {
    if (!confirm("Do you really want to log out?")) {
        return;
    }

    authService.signOut().then(() => {
        location.replace('index.html');
    }, function (e) {
        lastWork = "authorized";
        $("#error #errmsg").html(e.message)
        $("#error").show();
        $("#authorized").hide();
    });
}