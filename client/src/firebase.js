import firebase from 'firebase';
//import keys from '../../config.js'
// changed keys to process.env

const config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_dbURL,
  projectId: process.env.FIREBASE_projectID,
  storageBucket: process.env.FIREBASE_storeBucket,
  messagingSenderId: process.env.FIREBASE_messageID
};
console.log("****", process.env.FIREBASE_apiKey);
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
  auth: auth,
  // session: (cb)=> {
  //   console.log('session!!!!!!!!!')
  //   auth.onAuthStateChanged(function(user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log(user,cb)
  //       cb(user)
  //     } else {
  //       // No user is signed in.
  //       cb(null)
  //     }
  //   })
  // }
}


export default base;
