import firebase from "firebase/app";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY0EJninD9wRmys6y7q9vHNgtP3xRi0g8",
    authDomain: "cooking-ninja-site-8ca96.firebaseapp.com",
    projectId: "cooking-ninja-site-8ca96",
    storageBucket: "cooking-ninja-site-8ca96.appspot.com",
    messagingSenderId: "930513167502",
    appId: "1:930513167502:web:f5c89d3e190698e77fd5df",
    measurementId: "G-7P94L8XR3P"
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore()

export { projectFirestore }