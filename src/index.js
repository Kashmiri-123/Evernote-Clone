import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDQe7wCVygyrI7lSjWStctTVlydOXEFlQ",
    authDomain: "evernote-14a42.firebaseapp.com",
    databaseURL: "https://evernote-14a42.firebaseio.com",
    projectId: "evernote-14a42",
    storageBucket: "evernote-14a42.appspot.com",
    messagingSenderId: "247657276401",
    appId: "1:247657276401:web:b2aa280286e85ced575a50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
