// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyD4yYBQ18lafe0Ra0LfpjqmelgNKyW2tWA",
    authDomain: "facebook-e62da.firebaseapp.com",
    projectId: "facebook-e62da",
    storageBucket: "facebook-e62da.appspot.com",
    messagingSenderId: "38942710696",
    appId: "1:38942710696:web:1895595f4087f8a50c5b9d",
    measurementId: "G-P44150S0ZE"
  });

  const db = firebase.firestore();
  export default db;