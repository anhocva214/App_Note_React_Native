
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDI8tYxfTGr7Ji5k9ZKzjfyWUbUCHqKlWM",
    authDomain: "notemanager-3f896.firebaseapp.com",
    databaseURL: "https://notemanager-3f896.firebaseio.com",
    projectId: "notemanager-3f896",
    storageBucket: "notemanager-3f896.appspot.com",
    messagingSenderId: "1005314180319",
    appId: "1:1005314180319:web:cd41e34c02a79b089c556a",
    measurementId: "G-84WNDL89XC"
  }

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

module.exports = firebase;