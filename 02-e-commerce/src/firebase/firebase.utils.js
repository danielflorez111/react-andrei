import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAz6MQQy65bfJVsBI1W2RjhPvSo6v6_riE",
    authDomain: "e-commerce-8817e.firebaseapp.com",
    databaseURL: "https://e-commerce-8817e.firebaseio.com",
    projectId: "e-commerce-8817e",
    storageBucket: "e-commerce-8817e.appspot.com",
    messagingSenderId: "790229011732",
    appId: "1:790229011732:web:00dd2e2dec632a413c0601",
    measurementId: "G-45HCXSM14V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
