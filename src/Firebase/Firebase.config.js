// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
    apiKey: "AIzaSyBUoqwij7-c-Zdr13RyZDqxCy87ZFMnxLY",
    authDomain: "task-bucket-89dae.firebaseapp.com",
    projectId: "task-bucket-89dae",
    storageBucket: "task-bucket-89dae.appspot.com",
    messagingSenderId: "569659347690",
    appId: "1:569659347690:web:72e4bb8fd6d21233953d93"
};
console.log(process.env.REACT_APP_API_KEY)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;