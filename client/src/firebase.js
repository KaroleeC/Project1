import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAOURzDm-6wZMBjITw8anb38zNddT9UZ0E",
  authDomain: "foodthoughts-28044.firebaseapp.com",
  databaseURL: "https://foodthoughts-28044.firebaseio.com",
  projectId: "foodthoughts-28044",
  storageBucket: "foodthoughts-28044.appspot.com",
  messagingSenderId: "1022593351688"
};

firebase.initializeApp(config);

let auth = firebase.auth();

const base = {
  googleLogin: () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  facebookLogin: () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  githubLogin: () => {
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
  }
}

export default base;