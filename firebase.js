import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCEEKhTO6xSu3CS6C4Lm9Kp4ZwxTwTFdnw",
  authDomain: "r1b-14fa6.firebaseapp.com",
  databaseURL: "https://r1b-14fa6.firebaseio.com",
  projectId: "r1b-14fa6",
  storageBucket: "r1b-14fa6.appspot.com",
  messagingSenderId: "444049172889"
};

var fire = firebase.initializeApp(config);

export default fire;