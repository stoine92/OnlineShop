import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAWDIpwBFa9N9_wXyrO9ZB6nNS6dUhl27I",
  authDomain: "onlinestore-88191.firebaseapp.com",
  projectId: "onlinestore-88191",
  storageBucket: "onlinestore-88191.firebasestorage.app",
  messagingSenderId: "910796076922",
  appId: "1:910796076922:web:6adc205d92002c2670c8c3",
  measurementId: "G-2648FHFS55"
});

const app = initializeApp(firebaseConfig);