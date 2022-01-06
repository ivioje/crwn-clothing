import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyDqYHiYhipDvyDBa0bpb52yjHXxtOAnQ2M",
    authDomain: "e-commerce-25479.firebaseapp.com",
    projectId: "e-commerce-25479",
    storageBucket: "e-commerce-25479.appspot.com",
    messagingSenderId: "183077015806",
    appId: "1:183077015806:web:a7ad0fecbea09293ff55af"
};

const app = initializeApp(config);
// export const db = getFirestore(app);
// export const auth = getAuth();
export const userAuth = getAuth(app);
export const firestore = getFirestore(app);
export const createAccount = createUserWithEmailAndPassword;

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists) {
        if (!snapShot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(userRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData,
                });
            } catch (err) {
                console.log("error creating user", err.message);
            }
        }

        return {
            userRef
            // onSnapshot,
        };
    };

}
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(userAuth, provider);