import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDD52QAR5FDdTjtoAb3M_phP8ZWCTn8vKw",
    authDomain: "tinder-clone-673e1.firebaseapp.com",
    databaseURL: "https://tinder-clone-673e1.firebaseio.com",
    projectId: "tinder-clone-673e1",
    storageBucket: "tinder-clone-673e1.appspot.com",
    messagingSenderId: "194646959793",
    appId: "1:194646959793:web:fd0b69c5587bb871892490",
    measurementId: "G-GX88D31K49"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;