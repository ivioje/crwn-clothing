import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

const config = {
    apiKey: "AIzaSyDwvu05_UYi3_BcZoiR1b9GD9V-Qy0I46A",
    authDomain: "crwn-db-7a6a5.firebaseapp.com",
    projectId: "crwn-db-7a6a5",
    storageBucket: "crwn-db-7a6a5.appspot.com",
    messagingSenderId: "904921305002",
    appId: "1:904921305002:web:f82e673ecc421d0e0ca5d3"
};

const app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

