import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const HelperContext = createContext();

export const HelperProvider =({children})=>{

    const [currentCourseName,setCurrentCourseName]=useState('');
    const [currentCourseDuration,setCurrentCourseDuration]=useState('');

    const handleSetCurrentCourseDuration = (val)=>{
        setCurrentCourseDuration(val);
    }

    const handleSetCurrentCourseName = (val)=>{
        setCurrentCourseName(val);
    }

    return(
        <HelperContext.Provider value={{currentCourseName,currentCourseDuration,handleSetCurrentCourseDuration,handleSetCurrentCourseName}}>
            {children}
        </HelperContext.Provider>
    )
}
HelperProvider.propTypes={
    children:PropTypes.node,
}