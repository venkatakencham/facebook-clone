// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnHvOqG0tY3ZnETcxxDBEN2nmxeGty2mM",
  authDomain: "facebook-clone-74937.firebaseapp.com",
  databaseURL: "https://facebook-clone-74937.firebaseio.com",
  projectId: "facebook-clone-74937",
  storageBucket: "facebook-clone-74937.appspot.com",
  messagingSenderId: "149228392099",
  appId: "1:149228392099:web:4e1ab05ece1c056cceb916",
  measurementId: "G-0JK788TMGE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
