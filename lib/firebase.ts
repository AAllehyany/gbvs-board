import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyADGtLxxOwZqhXvKZq8mnjZIFRJKWxXS9M",
    authDomain: "gbvs-board.firebaseapp.com",
    projectId: "gbvs-board",
    storageBucket: "gbvs-board.appspot.com",
    messagingSenderId: "478843678410",
    appId: "1:478843678410:web:48788256a647db348d8e33"
};

if(!firebase.apps.length) 
    firebase.initializeApp(config);

export const firestore = firebase.firestore();