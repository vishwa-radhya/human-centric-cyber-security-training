import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
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
