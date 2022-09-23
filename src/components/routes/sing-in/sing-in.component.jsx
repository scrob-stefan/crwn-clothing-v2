import { useEffect } from 'react';
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import SignUpForm from '../../sing-up-form/sing-up-form.component';

const SingIn = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()

        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default SingIn