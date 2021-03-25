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

const jpToEn = {
    "ユエル": "Yuel",
    "グラン": "Gran",
    "カタリナ": "Katalina",
    "シャルロッテ": "Charlotta",
    "ランスロット": "Lancelot",
    "フェリ": "Ferry",
    "ローアイン": "Lowain",
    "ファスティバ": "Ladiva",
    "パーシヴァル": "Percival",
    "メーテラ": "Metera",
    "ゼタ": "Zeta",
    "バザラガ": "Vaseraga",
    "ベルゼバブ": "Beelzebub",
    "ナルメア": "Narmaya",
    "ソリッズ": "Soriz",
    "ジータ": "Djeeta",
    "ゾーイ": "Zooey",
    "ベリアル": "Belial",
    "カリオストロ": "Cagliostro",
    "ウーノ": "Anre"
  }

const batch = firestore.batch();

for(const [jp, en] of Object.entries(jpToEn)) {
    const ref = firestore.collection('characters').doc();
    const character = {
        name: en.toLowerCase(),
        display: {
            en,
            jp
        }
    }
    batch.set(ref, character);
}

batch.commit();