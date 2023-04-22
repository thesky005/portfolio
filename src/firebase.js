import firebase from 'firebase/app';
import 'firebase/firestore';
//import 'firebase/auth';
import 'firebase/storage';

//For Firebase JS SDK v7.20.0 and later, measurementId is optional.......

const firebaseConfig = {
    apiKey: "AIzaSyDYJcJE7QUTCydyrRJ2f56krtFHi5fofNc",
    authDomain: "portfolio-7bf56.firebaseapp.com",
    projectId: "portfolio-7bf56",
    storageBucket: "portfolio-7bf56.appspot.com",
    messagingSenderId: "469621252551",
    appId: "1:469621252551:web:5b229300cd2e814e9a39e2",
    measurementId: "G-THW88PN5JR"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

//export{auth, provider, storage};
export{storage};
export default db;