// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB5vYmXM_fJlPpcS6E6jqjFxS9W_G_wi58",
    authDomain: "crypto-7733c.firebaseapp.com",
    projectId: "crypto-7733c",
    storageBucket: "crypto-7733c.appspot.com",
    messagingSenderId: "904475585004",
    appId: "1:904475585004:web:df64d9fb59e0ff59d6b8c9",
    measurementId: "G-YC96N7MV2Q"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
export {auth};
export default db;