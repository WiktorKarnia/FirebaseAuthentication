import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADW6q4mjoZth-ettADh9FhAELIRap4q5w",
  authDomain: "carspottingapp.firebaseapp.com",
  projectId: "carspottingapp",
  storageBucket: "carspottingapp.appspot.com",
  messagingSenderId: "679138561462",
  appId: "1:679138561462:web:e4e6e0ae6fda58cc6e8517"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }