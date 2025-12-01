// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export default defineNuxtPlugin(() => {
const firebaseConfig = {
  apiKey: "AIzaSyDgjpPhx7vJ0OvxaCA4fs17zwGzvC35bC4",
  authDomain: "cryptotax-aa922.firebaseapp.com",
  projectId: "cryptotax-aa922",
  storageBucket: "cryptotax-aa922.firebasestorage.app",
  messagingSenderId: "312438372082",
  appId: "1:312438372082:web:1f40afa6643fbb19f6026b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();


  return {
    provide: {
      auth,
      provider
    }
  };
});

