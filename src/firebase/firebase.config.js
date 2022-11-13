// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    // apiKey: "AIzaSyBgMJiRNkLUWfGmiCNs8NutprX_5qbE4n8",
    // authDomain: "dr-shihan-mostafizur.firebaseapp.com",
    // projectId: "dr-shihan-mostafizur",
    // storageBucket: "dr-shihan-mostafizur.appspot.com",
    // messagingSenderId: "304118241862",
    // appId: "1:304118241862:web:f7cb20be96aff7eba5c847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;