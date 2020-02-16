import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import settings from 'settings';

const firebaseConfig = settings.firebaseConfig;

const firebaseSignIn = () => {
  firebase.auth().signInAnonymously();
};

export const refreshFirebaseSession = () => {
  !!firebase.auth().currentUser
    ? firebase.auth().currentUser!.getIdToken(true)
    : firebaseSignIn();
};

export const firebaseSignOut = () => {
  firebase.auth().signOut();
};

firebase.initializeApp(firebaseConfig);

// refreshFirebaseSession();
