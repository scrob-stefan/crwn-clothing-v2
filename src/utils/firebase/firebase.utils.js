import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpGeZSq-eM7ju3CxfbuAD_o_Apqgj6dxs",
    authDomain: "crwn-clothing-db-daf0b.firebaseapp.com",
    projectId: "crwn-clothing-db-daf0b",
    storageBucket: "crwn-clothing-db-daf0b.appspot.com",
    messagingSenderId: "750027886547",
    appId: "1:750027886547:web:c797a462b8b63021796926"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionlInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionlInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async () => signOut(auth)

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}
