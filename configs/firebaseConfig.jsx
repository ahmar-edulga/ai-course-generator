// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "edulga-161ff.firebaseapp.com",
  projectId: "edulga-161ff",
  storageBucket: "edulga-161ff.appspot.com",
  messagingSenderId: "328023123621",
  appId: "1:328023123621:web:c83bdc2c16ca42cc178f4c",
  measurementId: "G-1TNP9KRKR3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)