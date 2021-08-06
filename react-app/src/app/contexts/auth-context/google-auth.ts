import firebase from 'firebase/app';
import { auth } from '../../../firebase';
import 'firebase/auth';

const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  // provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  // provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

  // provider.setCustomParameters({
  //   login_hint: 'user@example.com',
  // });

  return provider;
};
