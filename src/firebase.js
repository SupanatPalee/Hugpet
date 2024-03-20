import firebase from "firebase";

    const firebaseConfig = {
        apiKey: "AIzaSyCvVv9RLpOxSk1N5yl1U8kYpHK4-vmzxVk",
        authDomain: "pethug-1501d.firebaseapp.com",
        projectId: "pethug-1501d",
        storageBucket: "pethug-1501d.appspot.com",
        messagingSenderId: "716365807631",
        appId: "1:716365807631:web:6b8a315b2a7b7a9a83637a"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();



export default database;