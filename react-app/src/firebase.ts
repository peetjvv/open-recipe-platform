import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebase from 'firebase/app';
import settings from 'settings';
import { isLocalEnvironment } from './util/environment';

const firebaseConfig = settings.firebaseConfig;
const refreshAuthInterval = 55 * 60 * 1000; // refresh token every 55min

// initialise connection to remote firebase environment
// need this to connect to firebase storage
firebase.initializeApp(firebaseConfig);

/// auth stuff
const firebaseSignIn = () => {
  firebase.auth().signInAnonymously();
};

export const refreshFirebaseSession = () => {
  !!firebase.auth().currentUser
    ? firebase.auth().currentUser!.getIdToken(true)
    : firebaseSignIn();
};

setTimeout(() => refreshFirebaseSession(), refreshAuthInterval);

export const firebaseSignOut = () => {
  firebase.auth().signOut();
};

const db = firebase.firestore();

// set up connection to firebase emulator
if (isLocalEnvironment) {
  db.useEmulator('localhost', 9093);
}

export { db };
export default firebase;
