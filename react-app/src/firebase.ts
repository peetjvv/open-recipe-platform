import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebase from 'firebase/app';
import settings from 'settings';
import { isLocalEnvironment } from './util/environment';

const firebaseConfig = settings.firebaseConfig;

// initialise connection to remote firebase environment
// need this to connect to firebase storage
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// set up connection to firebase emulator
if (isLocalEnvironment) {
  db.useEmulator('localhost', 9093);
  storage.useEmulator('localhost', 9096);
}

export { auth, db };
export default app;
