// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLuleCmXaSdCodBSKLk9rYZkN4KbMo5E",
  authDomain: "disneyplus-clone-30cf6.firebaseapp.com",
  projectId: "disneyplus-clone-30cf6",
  storageBucket: "disneyplus-clone-30cf6.appspot.com",
  messagingSenderId: "135672292769",
  appId: "1:135672292769:web:db3141d426ba7134a997e0",
  measurementId: "G-8EGZ7ZZ6VD"
};

// Initialize Firebase
const fireabaseApp = firebase.initializeApp(firebaseConfig);
const db = fireabaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();



export { auth, provider, storage };
export default db;
