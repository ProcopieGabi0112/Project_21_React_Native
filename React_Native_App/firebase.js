// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { initializeApp } from 'firebase/app';
//import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx0YHMt6f2dNhW9g2-zqlnFVKnJ44clpU",
    authDomain: "fir-auth-e2bd1.firebaseapp.com",
    projectId: "fir-auth-e2bd1",
    storageBucket: "fir-auth-e2bd1.appspot.com",
    messagingSenderId: "588340687048",
    appId: "1:588340687048:web:db6ad6bc3868e74c33b5fd"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0 ){
   app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};