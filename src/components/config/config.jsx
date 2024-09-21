import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAacfv7r3YWPHucqubBNNDAD-loLCSNmLs",
    authDomain: "digital-aura-f399b.firebaseapp.com",
    projectId: "digital-aura-f399b",
    storageBucket: "digital-aura-f399b.appspot.com",
    messagingSenderId: "921083620090",
    appId: "1:921083620090:web:d4fbcd31c23d1d38ca7743",
    measurementId: "G-QC8BNYKBNM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { analytics, firestore, auth,storage }