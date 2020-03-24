import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAOK-UBl-vihtTZfOQ0Caxq1b9aBADDsno",
  authDomain: "crwn-db-83fcd.firebaseapp.com",
  databaseURL: "https://crwn-db-83fcd.firebaseio.com",
  projectId: "crwn-db-83fcd",
  storageBucket: "crwn-db-83fcd.appspot.com",
  messagingSenderId: "74329586931",
  appId: "1:74329586931:web:08dac93148c45b9ef80b86"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
