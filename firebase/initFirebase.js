// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXE58SQHjt-_JBcPM-ROKCg8gnhPuJUkU",
    authDomain: "next-firebase-8ddc4.firebaseapp.com",
    projectId: "next-firebase-8ddc4",
    storageBucket: "next-firebase-8ddc4.appspot.com",
    messagingSenderId: "1091030721255",
    appId: "1:1091030721255:web:f83c050cab6ccfb0623842",
    measurementId: "G-8SMER5PBL8"
};



const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export { firestore }


///////////////////

//getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
//const firestore2 = firebase.firestore()
//const firestore2 = initializeApp(firebaseConfig);


//const firestore2 = initializeApp(firebaseConfig);
//const firestore2 = getFirestore();

// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

// import { collection, addDoc, setDoc } from "firebase/firestore";



// ////////////

// db.collection('todos').getDocs()
// const todosCol = collection(db, collection)
// const snapshot = await getDocs(todosCol)

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }