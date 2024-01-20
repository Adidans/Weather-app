// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC457usuoedeotuB-RuvaNhtvPpF6jVU6Q",
    authDomain: "weather-app-adrians.firebaseapp.com",
    projectId: "weather-app-adrians",
    storageBucket: "weather-app-adrians.appspot.com",
    messagingSenderId: "132346244711",
    appId: "1:132346244711:web:5b82bec3ea90b355d92ec2",
    measurementId: "G-6J3SLQJZDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
