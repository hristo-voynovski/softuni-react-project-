import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAi2WCUS-WNqxyEktwEtWhbchHFEn7tnVg",
    authDomain: "dashboard-c21c2.firebaseapp.com",
    databaseURL: "https://dashboard-c21c2.firebaseio.com",
    projectId: "dashboard-c21c2",
    storageBucket: "dashboard-c21c2.appspot.com",
    messagingSenderId: "855078983176",
    appId: "1:855078983176:web:c1648ffb3674f31cf823bd"
  };




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;

