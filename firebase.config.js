
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAsIEIM4TDDCbqk_4mQo_nhnLeHk_iuAEU",
    authDomain: "action-house-3b7d9.firebaseapp.com",
    projectId: "action-house-3b7d9",
    storageBucket: "action-house-3b7d9.appspot.com",
    messagingSenderId: "274805393984",
    appId: "1:274805393984:web:168b19271905f512a0ada5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;