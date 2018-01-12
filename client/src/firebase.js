import firebase from 'firebase';
import keys from '../../config.js'

const config = {
  apiKey: keys.FIREBASE_apiKey,
  authDomain: keys.FIREBASE_authDomain,
  databaseURL: keys.FIREBASE_dbURL,
  projectId: keys.FIREBASE_projectID,
  storageBucket: keys.FIREBASE_storeBucket,
  messagingSenderId: keys.FIREBASE_messageID
};

firebase.initializeApp(config);

let auth = firebase.auth();

const base = {
  googleLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  facebookLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  githubLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  logout: () => {
    auth.signOut();
  },
  // checkLogin: () => {
  //   auth.OnOAuthStateChange()
  //     .then(() => {
        
  //     })
  // }
}

export default base;