import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCy7FRllKiIsyDWTtq3VW_9InsAuQiu4ZE",
    authDomain: "project5-19534.firebaseapp.com",
    databaseURL: "https://project5-19534.firebaseio.com",
    projectId: "project5-19534",
    storageBucket: "project5-19534.appspot.com",
    messagingSenderId: "574477794353",
    appId: "1:574477794353:web:61154bfb041df22e796910"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;