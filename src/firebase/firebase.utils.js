import firebase from 'firebase/app'; //loads utils
import 'firebase/firestore'; //imports database
import 'firebase/auth'; //imports auth

const config = {
    apiKey: "AIzaSyB2Vmpv5YelshoudDsgBEUe_u67TPXqVZM",
    authDomain: "clothingstore-db-6df7e.firebaseapp.com",
    projectId: "clothingstore-db-6df7e",
    storageBucket: "clothingstore-db-6df7e.appspot.com",
    messagingSenderId: "909056466019",
    appId: "1:909056466019:web:a2fe662292d26e43272c56",
    measurementId: "G-C76K04YX4C"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); //gives access to google auth class
  provider.setCustomParameters({ prompt: 'select_account' }); //always trigger google popup whenever using google auth

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;