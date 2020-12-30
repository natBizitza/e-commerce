import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADD63IzreNyHDeeIOi9pfxL0RC8ktILmQ",
    authDomain: "e-beast.firebaseapp.com",
    databaseURL: "https://e-beast.firebaseio.com",
    projectId: "e-beast",
    storageBucket: "e-beast.appspot.com",
    messagingSenderId: "902671790788",
    appId: "1:902671790788:web:4bbc40ccc6f1ed78974f91",
    measurementId: "G-6P6PTQXJ4N"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error){
            console.log('Error creatign user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up Google Authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
//here we pass provider cause we need only Google sign up option
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case we want the whole library
export default firebase;