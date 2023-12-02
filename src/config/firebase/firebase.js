// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPmpNEIQYhK6-x7bV6mPUejoVAIr0GoB0",
  authDomain: "rumah-sakit-c3aa7.firebaseapp.com",
  projectId: "rumah-sakit-c3aa7",
  storageBucket: "rumah-sakit-c3aa7.appspot.com",
  messagingSenderId: "464554907628",
  appId: "1:464554907628:web:4abe43954e469a7a5292c9",
  measurementId: "G-LFFXBX4GN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, analytics, auth };
