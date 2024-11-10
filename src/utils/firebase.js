import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDO3ny1pu8Jk_LLM1T8cHcS7Rv4qovWpmQ",
  authDomain: "human-centric-cs-project.firebaseapp.com",
  databaseURL: "https://human-centric-cs-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "human-centric-cs-project",
  storageBucket: "human-centric-cs-project.firebasestorage.app",
  messagingSenderId: "952371489884",
  appId: "1:952371489884:web:c22d55f2d5a9910d468a99"
}

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firebaseRealtimeDb = getDatabase();

export const provider = new GoogleAuthProvider();

export const signInUser =async()=>{
    try{
        await signInWithPopup(auth,provider);
    }catch(e){
        console.error('error authenticating with google popup',e);
    }
}

export const signOutUser=async()=>{
    try{
        await signOut(auth);
    }catch(e){
        console.error('error signing out user',e);
    }
}
