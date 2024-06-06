import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; 

//TODO setup analytics
//TODO remove the fireBase.js config to its own file 

const firebaseConfig = {
  apiKey: "AIzaSyCcBBErSWyxpkoqxA77xIoBf2n_aPhjRV0",
  authDomain: "disneyplus-clone-3d8c3.firebaseapp.com",
  projectId: "disneyplus-clone-3d8c3",
  storageBucket: "disneyplus-clone-3d8c3.appspot.com",
  messagingSenderId: "944066809385",
  appId: "1:944066809385:web:da38172db0a0ef76905638",
  measurementId: "G-3H9L2L4QYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); //default storage

// Initialize Google auth provider
const provider = new GoogleAuthProvider();

// Export the services for use in other parts of your application
export { auth, provider, storage };
export default db;
