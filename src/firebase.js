// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPLgua18BfLoAj1pwHPAYuYNpsSpruTFc",
    authDomain: "foodfusion-f4753.firebaseapp.com",
    projectId: "foodfusion-f4753",
    storageBucket: "foodfusion-f4753.appspot.com",
    messagingSenderId: "773623185295",
    appId: "1:773623185295:web:26235373af0a9e50b095fa",
    measurementId: "G-ZV894TL1CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
export const auth = app.auth();
export const googleProvider = new app.auth.GoogleAuthProvider();
export default app;