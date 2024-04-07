// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn0F-CQZNiApcTXkq4WLa1pMpCeRskqsQ",
  authDomain: "carpool-application-b31e2.firebaseapp.com",
  projectId: "carpool-application-b31e2",
  storageBucket: "carpool-application-b31e2.appspot.com",
  messagingSenderId: "847776965205",
  appId: "1:847776965205:web:27e209a3617f3efbd7aadc",
  measurementId: "G-LLRF141T14"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);// Get the storage function

export { app, analytics };