import { createContext, useState,useEffect } from "react";
import PropTypes from "prop-types";
import { firebaseRealtimeDb,auth } from "../utils/firebase";
import { ref,onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export const FavContext = createContext();

export const FavProvider=({children})=>{
    const [userFavData,setUserFavData]=useState({});

    useEffect(()=>{
        let unsubscribeFromDb=null;
        const fetchUserFavDataFromDb=async(user)=>{
                const dbRef = ref(firebaseRealtimeDb,`userFavorites/${user.uid}`);
                unsubscribeFromDb = onValue(dbRef,(snapshot)=>{
                    if(snapshot.exists()){
                        setUserFavData(snapshot.val())
                    }else{
                        setUserFavData({});
                    }
                })
        }
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                fetchUserFavDataFromDb(user);
            }
        })

        return ()=>{
            unsubscribe();
            if(unsubscribeFromDb) unsubscribeFromDb();
        }

    },[])

    return(
        <FavContext.Provider value={{userFavData}} >
            {children}
        </FavContext.Provider>
    )
}
FavProvider.propTypes={
    children:PropTypes.node,
}