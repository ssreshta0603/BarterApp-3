import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyBcYNmpgN6rE05JpR14y_J7gHnYVUl93KI",
  authDomain: "bartenapp.firebaseapp.com",
  projectId: "bartenapp",
  storageBucket: "bartenapp.appspot.com",
  messagingSenderId: "417724828718",
  appId: "1:417724828718:web:2c3f06bb0c2873f74ba3bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();