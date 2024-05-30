import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCcBBErSWyxpkoqxA77xIoBf2n_aPhjRV0",
    authDomain: "disneyplus-clone-3d8c3.firebaseapp.com",
    projectId: "disneyplus-clone-3d8c3",
    storageBucket: "disneyplus-clone-3d8c3.appspot.com",
    messagingSenderId: "944066809385",
    appId: "1:944066809385:web:da38172db0a0ef76905638",
    measurementId: "G-3H9L2L4QYC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;