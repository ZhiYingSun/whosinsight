import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCLFYkCKfogqH5I_H2CNeFSpbcYZulxsFE",
    authDomain: "brandon-website-918f0.firebaseapp.com",
    projectId: "brandon-website-918f0",
    storageBucket: "brandon-website-918f0.appspot.com",
    messagingSenderId: "332583793265",
    appId: "1:332583793265:web:cfa48659bda48fee73a1d0",
    measurementId: "G-22CSCSCKNT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore }

