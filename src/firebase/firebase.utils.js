import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuGxQOo_-AAq8GVwAiYpEt48A76bBxz8I",
    authDomain: "crown-db-a4e46.firebaseapp.com",
    databaseURL: "https://crown-db-a4e46.firebaseio.com",
    projectId: "crown-db-a4e46",
    storageBucket: "",
    messagingSenderId: "186856194832",
    appId: "1:186856194832:web:af308fcd42acdb9b8edb95"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;