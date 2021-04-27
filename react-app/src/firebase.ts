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
const app = firebase.initializeApp(firebaseConfig);

/// auth stuff
const auth = firebase.auth();
// const firebaseSignIn = () => {
//   auth.signInAnonymously();
// };

// export const refreshFirebaseSession = () => {
//   !!auth.currentUser ? auth.currentUser!.getIdToken(true) : firebaseSignIn();
// };

// setTimeout(() => refreshFirebaseSession(), refreshAuthInterval);

// export const firebaseSignOut = () => {
//   auth.signOut();
// };

/// db stuff
const db = firebase.firestore();

// set up connection to firebase emulator
if (isLocalEnvironment) {
  db.useEmulator('localhost', 9093);
}

export { auth, db };
export default app;
