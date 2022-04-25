import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099")
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export { db, auth, provider };
