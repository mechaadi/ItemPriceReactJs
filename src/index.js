import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyBrixfs7jFtvklpmhidK_uhr1O5xdaRgFM",
    authDomain: "a7atestdatabase.firebaseapp.com",
    databaseURL: "https://a7atestdatabase.firebaseio.com",
    projectId: "a7atestdatabase",
    storageBucket: "a7atestdatabase.appspot.com",
    messagingSenderId: "857852480256",
    appId: "1:857852480256:web:26bc8a07932acf541b81e5",
    measurementId: "G-YN4CSD7PHD"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
