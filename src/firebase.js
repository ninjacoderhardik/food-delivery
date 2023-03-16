import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBn9xByF7l11HrCHbxWHbOOteuwy4jGrkc",
  authDomain: "fir-auth-1132-fef12.firebaseapp.com",
  projectId: "fir-auth-1132-fef12",
  storageBucket: "fir-auth-1132-fef12.appspot.com",
  messagingSenderId: "654306388243",
  appId: "1:654306388243:web:538e810c1fc59c8aa812e6",
  measurementId: "G-2PTX9QKV6M"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}
