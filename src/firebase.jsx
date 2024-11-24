import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkMLRE04pX_M0KDqi-l-16l5VmQ-kODyI",
    authDomain: "pocketplanet.firebaseapp.com",
    projectId: "pocketplanet",
    storageBucket: "pocketplanet.appspot.com",
    messagingSenderId: "899530899183",
    appId: "1:899530899183:web:175d58eca3ad52e483e51a",
    measurementId: "G-7C4V10QK3H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };