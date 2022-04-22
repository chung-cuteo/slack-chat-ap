import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3pQE85mmocoEtFmByJQor4CIkWIlmpJs",
  authDomain: "slack-app-fake.firebaseapp.com",
  projectId: "slack-app-fake",
  storageBucket: "slack-app-fake.appspot.com",
  messagingSenderId: "832917131621",
  appId: "1:832917131621:web:8dbfe54747113304bc518c",
  measurementId: "G-0LVL01Z9WH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
