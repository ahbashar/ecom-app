import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqw6qLxn--JN_VcPJhh3i3bgJ8RaZ_dWE",
    authDomain: "ecom-app-6d0ae.firebaseapp.com",
    databaseURL: "https://ecom-app-6d0ae.firebaseio.com",
    projectId: "ecom-app-6d0ae",
    storageBucket: "ecom-app-6d0ae.appspot.com",
    messagingSenderId: "1069228803319",
    appId: "1:1069228803319:web:56ae040384556dc2f93ff2",
    measurementId: "G-LGP2WB00QV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;