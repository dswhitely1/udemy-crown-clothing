import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDH1ju0GyJWOkBjo5Kb31CeFQzgwwvczvA',
  authDomain: 'crwn-clothing-udemy.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-udemy.firebaseio.com',
  projectId: 'crwn-clothing-udemy',
  storageBucket: 'crwn-clothing-udemy.appspot.com',
  messagingSenderId: '267832517318',
  appId: '1:267832517318:web:db2134c11e6d916e676dc7',
  measurementId: 'G-L1N6C1XWLX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;