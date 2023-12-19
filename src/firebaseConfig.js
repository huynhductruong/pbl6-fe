// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAFRc3jDdJ4rMruzt_-Q5eTRVESGeoeb5I",
  authDomain: "pbl6-dded4.firebaseapp.com",
  projectId: "pbl6-dded4",
  storageBucket: "pbl6-dded4.appspot.com",
  messagingSenderId: "591856315631",
  appId: "1:591856315631:web:31a342cebbb9373cbf7f1a",
  measurementId: "G-5WBQNKV8P1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage()