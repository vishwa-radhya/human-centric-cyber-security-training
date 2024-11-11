import './course.styles.scss';
import { useParams } from 'react-router-dom';
import { iFrameData } from '../../data';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import 'animate.css';
import NoUserPopover from '../../components/no-user-popover/no-user-popover.component';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context.context';
import { push,ref,remove } from 'firebase/database';
import { firebaseRealtimeDb } from '../../utils/firebase';
import { FavContext } from '../../contexts/fav-context.context';

const Course =()=>{
    
    const {courseId}=useParams();
    const {userFavData}=useContext(FavContext);
    const courseNameObject = iFrameData.find(obj=>obj.videoSrc.includes(courseId));
    const navigateRouter = useNavigate();
    const [starCLicked,setStarClicked]=useState(false);
    const {user}=useContext(AuthContext);
    const [isNoUserPopoverShown,setIsNoUserPopoverShown]=useState(false);
    const starDivRef = useRef(null);
    
    useEffect(()=>{
        if(Object.values(userFavData).includes(courseId.slice(0,11))){
            setStarClicked(true);
        }else{
            setStarClicked(false);
        }
    },[userFavData,courseId])

    const handleSetIsNoUserPopOverShown =(bool)=>{
        setIsNoUserPopoverShown(bool);
    }

    const handleStarClick=async()=>{
        if(!user){
            setIsNoUserPopoverShown(true);
            return;
        }
        const databaseReference = `userFavorites/${user.uid}`
        const dataPushRef = ref(firebaseRealtimeDb,databaseReference);
        
        if(!starCLicked){
            try{
                push(dataPushRef,courseId.slice(0,11))
            }catch(e){
                console.error('error pushing data to user favorites',e);
            }
        }else{
            const dataIdInDb =  Object.entries(userFavData).find(([,value])=>value === courseId.slice(0,11))?.[0];
            try{
                const dataRemoveRef = ref(firebaseRealtimeDb,`${databaseReference}/${dataIdInDb}`)
                remove(dataRemoveRef)
            }catch(e){
                console.error('error deleting data from user favorites',e)
            }
        }
    }

    return(
        <div className='course-div animate__animated animate__fadeInDown'>
            <div className='back-arrow' onClick={()=>navigateRouter(-1)}><FaArrowLeft  /> go back</div>
            <div className='yt-video'>
            <div className='iframe-container'>
            <iframe src={`https://www.youtube.com/embed/${courseId}`} style={{width:'100%',height:'95%'}} frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>
            </div>
            <div className='info'>
            <p>{courseNameObject.videoName}</p>
            <div className='star' ref={starDivRef} onClick={handleStarClick}>
                {!starCLicked ? <FaRegStar/> : <FaStar/>}
            </div>
            </div>
            </div>  
            {isNoUserPopoverShown && <NoUserPopover starDivRef={starDivRef} handleSetIsNoUserPopOverShown={handleSetIsNoUserPopOverShown} isNoUserPopoverShown={isNoUserPopoverShown} />}
        </div>
    )
}
export default Course;