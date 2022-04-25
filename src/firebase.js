import firebase from 'firebase/compat/app';
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "slack-app-fake",
  storageBucket: "slack-app-fake.appspot.com",
  messagingSenderId: "832917131621",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-0LVL01Z9WH",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth, provider };