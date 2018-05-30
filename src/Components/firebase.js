// src/firebase.js
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAGL443--2ZYL966Xq68zvPyT09ppzI5-8",
    authDomain: "dinner-party-92952.firebaseapp.com",
    databaseURL: "https://dinner-party-92952.firebaseio.com",
    projectId: "dinner-party-92952",
    storageBucket: "dinner-party-92952.appspot.com",
    messagingSenderId: "1014948988442"
  };
  firebase.initializeApp(config);
  export default firebase;