const firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyCo83KpDgv_AwKocOP3woXU4XxfcTmmafo",
    authDomain: "project-2-36511.firebaseapp.com",
    databaseURL: "https://project-2-36511.firebaseio.com",
    storageBucket: "project-2-36511.appspot.com",
    messagingSenderId: "214472931666"
  };
  firebase.initializeApp(config);
  module.exports = firebase;
