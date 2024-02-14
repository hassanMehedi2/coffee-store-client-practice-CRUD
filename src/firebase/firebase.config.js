// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU7yJ6xb-j5YoV_fdAhUMBnXWpUB3J12M",
  authDomain: "coffee-shop-with-crud.firebaseapp.com",
  projectId: "coffee-shop-with-crud",
  storageBucket: "coffee-shop-with-crud.appspot.com",
  messagingSenderId: "47042901933",
  appId: "1:47042901933:web:472fbdce8774a33a779324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;