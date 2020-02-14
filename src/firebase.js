import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjdqUNZ3o8m4YAILvHsgUwRtcJXKbYB8w",
    authDomain: "feynman-app.firebaseapp.com",
    databaseURL: "https://feynman-app.firebaseio.com",
    projectId: "feynman-app",
    storageBucket: "feynman-app.appspot.com",
    messagingSenderId: "746732469532",
    appId: "1:746732469532:web:74705ad5be34d2199a0ed9",
    measurementId: "G-NPYV0086MS"
};

const Firebase = firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();

export default db; 