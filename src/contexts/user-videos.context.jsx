import { createContext, useState,useEffect } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { ref,onValue } from "firebase/database";
import { firebaseRealtimeDb,auth } from "../utils/firebase";

export const UserVideosContext = createContext();

export const UserVideosProvider =({children})=>{

    const [userVideos,setUserVideos]=useState({});
    const [newIframeData,setNewIframeData]=useState([]);

    useEffect(()=>{
        let unsubscribeFromDb = null;
        const fetchUserVideosFromDb = async(user)=>{
            const userVideosInDbRef = ref(firebaseRealtimeDb,`userVideos/${user.uid}`);
            unsubscribeFromDb = onValue(userVideosInDbRef,(snapshot)=>{
                // console.log('fetching user videos')
                if(snapshot.exists()){
                    setUserVideos(snapshot.val())
                    setNewIframeData(Object.entries(snapshot.val()).map(([key,{courseName,courseDuration,courseCatagory,embedLink}])=>({
                        id:key,
                        videoSrc:`https://www.youtube.com/embed/${embedLink}`,
                        videoLength:courseDuration,
                        videoCategory:courseCatagory,
                        videoName:courseName,
                        videoCode:embedLink.slice(0,11)
                    })))
                }else{
                    setUserVideos({});
                }
            })
        }
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                fetchUserVideosFromDb(user);
            }
        })
        return ()=>{
            unsubscribe();
            if(unsubscribeFromDb) unsubscribeFromDb();
        }
    },[])


    return(
        <UserVideosContext.Provider value={{userVideos,newIframeData,setNewIframeData}}>
            {children}
        </UserVideosContext.Provider>
    )
}
UserVideosProvider.propTypes={
    children:PropTypes.node,
}