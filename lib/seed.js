const firebase = require('firebase/app');
require('firebase/firestore');

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

const firestore = firebase.firestore();

const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, "data.json"), 'utf-8');
const parsed = JSON.parse(data);


const batch = firestore.batch();

for(const match of parsed) {
    const ref = firestore.collection('matches').doc();
    batch.set(ref, match);
}

batch.commit();