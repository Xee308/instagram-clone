import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPx3w16wqT40IlA045T12b9o2bOvt4EnY",
    authDomain: "instagram-xclone-react.firebaseapp.com",
    databaseURL: "https://instagram-xclone-react.firebaseio.com",
    projectId: "instagram-xclone-react",
    storageBucket: "instagram-xclone-react.appspot.com",
    messagingSenderId: "826627779324",
    appId: "1:826627779324:web:dde4f145652bfae8148579",
    measurementId: "G-LWV3J0XQNZ"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage };