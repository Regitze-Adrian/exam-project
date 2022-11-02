// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // importing auth from firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEKu9rCX_Q7yFTZMUwXa_ByBkREVt-jUE",
  authDomain: "exam-project-184da.firebaseapp.com",
  projectId: "exam-project-184da",
  storageBucket: "exam-project-184da.appspot.com",
  messagingSenderId: "334894006601",
  appId: "1:334894006601:web:b188f554a20809af251a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }
export const db = getFirestore(app);