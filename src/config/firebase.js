import * as firebase from "firebase";

// import { FirebaseConfig } from "../config/keys";

// todo:
// in the future, hide this firebase config object in env variable
const FirebaseConfig = {
    apiKey: "AIzaSyAR9T3lMQ5RRZ9bVWPxd6LKlFKAMa1gjVo",
    authDomain: "xpense-26a04.firebaseapp.com",
    databaseURL: "https://xpense-26a04.firebaseio.com",
    projectId: "xpense-26a04",
    storageBucket: "xpense-26a04.appspot.com",
    messagingSenderId: "278938532006"
};

firebase.initializeApp(FirebaseConfig);

// const databaseRef = firebase.database().ref();

// use userRef to run crud for user
// export const userRef = databaseRef.child("user");

// export const fireDatabase = firebase.database();
export const fireAuth = firebase.auth();