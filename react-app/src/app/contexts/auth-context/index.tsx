import * as React from 'react';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase';
import firebase from 'firebase';

/**
 * Interval in ms to refresh auth token.
 * Default to 55min.
 */
const REFRESH_AUTH_INTERVAL = 55 * 60 * 1000;

// export const refreshFirebaseSession = () => {
//   !!auth.currentUser ? auth.currentUser!.getIdToken(true) : firebaseSignIn();
// };

// setTimeout(() => refreshFirebaseSession(), refreshAuthInterval);

// export const firebaseSignOut = () => {
//   auth.signOut();
// };

type AuthContextProps = { user: firebase.User | null };

export const AuthContext = createContext<AuthContextProps>({ user: null });

const AuthProvider: React.FC<{ children: React.ReactNode }> = props => {
  const { children } = props;

  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => auth.onAuthStateChanged(u => setUser(u)), []);

  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  // provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

  // i18n
  auth.useDeviceLanguage();
  // alternatively, specify a language: auth.languageCode = 'it';

  return (
    <AuthContext.Provider value={{ user: user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
