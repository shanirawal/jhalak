// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTbSY2U0CLI9dzapOAw0_H9BGy2BDBFk",
  authDomain: "jhalak-6b2f7.firebaseapp.com",
  projectId: "jhalak-6b2f7",
  storageBucket: "jhalak-6b2f7.appspot.com",
  messagingSenderId: "669984065493",
  appId: "1:669984065493:web:e34fb55607f7c6602c9f5c",
  measurementId: "G-0MGZ42WJB9"
};

const app = initializeApp(firebaseConfig);

// ✅ Create auth and provider instances
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Optionally, enable analytics
const analytics = getAnalytics(app);

// ✅ Export auth and provider
export { auth, provider, app };