import { useEffect } from 'react';
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const Signin = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
    }

    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={logGoogleRedirectUser}>
                Sign in with Google Redirect
            </button>
        </div>
    )
}

export default Signin;