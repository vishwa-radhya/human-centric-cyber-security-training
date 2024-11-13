import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const HelperContext = createContext();

export const HelperProvider =({children})=>{

    const [currentCourseName,setCurrentCourseName]=useState('');
    const [currentCourseDuration,setCurrentCourseDuration]=useState('');
    const [userVideoCacheObject,setUserVideoCacheObject]=useState({});

    const handleSetCurrentCourseDuration = (val)=>{
        setCurrentCourseDuration(val);
    }

    const handleSetCurrentCourseName = (val)=>{
        setCurrentCourseName(val);
    }

    const handleSetUserVideoCacheObject=(key,val)=>{
        setUserVideoCacheObject(prevCache=>({
            ...prevCache,
            [key]:val,
        }))
    }

    return(
        <HelperContext.Provider value={{currentCourseName,currentCourseDuration,handleSetCurrentCourseDuration,handleSetCurrentCourseName,userVideoCacheObject,handleSetUserVideoCacheObject}}>
            {children}
        </HelperContext.Provider>
    )
}
HelperProvider.propTypes={
    children:PropTypes.node,
}