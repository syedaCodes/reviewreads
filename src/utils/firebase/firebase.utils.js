import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

//initializeApp function creates an app instance based on some type of config

//This config is an object that allows us to attach this Firebase app instance to the instance we have online

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUXlw_nZMu6crIZPNsFL5VGjTps9O6Agc",
    authDomain: "crown-clothing-db-67811.firebaseapp.com",
    projectId: "crown-clothing-db-67811",
    storageBucket: "crown-clothing-db-67811.appspot.com",
    messagingSenderId: "817104094772",
    appId: "1:817104094772:web:2809da9c0558ca0ac0ec61"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account" //we wanna force users to select an account to proceed
});

export const auth = getAuth();

//pass auth and provider to signInWithGooglePopup
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//for siginRedirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


//Create a DB
//INSTANTIATE FIRESTORE
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    //see if it has an existing instance - a doc() takes three arguments - 1. is the database - 2. is the collection - 3. identifier such as NikeAirMax 
    const userDocRef = doc(db, `users`, userAuth.uid);//gets auth

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())//check if it exists in the db returns boolean

    //a record doesn't exists then create one
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}