import './course.styles.scss';
import { useParams } from 'react-router-dom';
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
import { HelperContext } from '../../contexts/helper-context.context';

const Course =()=>{
    
    const {cId}=useParams();
    const {userFavData}=useContext(FavContext);
    const navigateRouter = useNavigate();
    const {currentCourseName,currentCourseDuration}=useContext(HelperContext);
    const [starCLicked,setStarClicked]=useState(false);
    const {user}=useContext(AuthContext);
    const [isNoUserPopoverShown,setIsNoUserPopoverShown]=useState(false);
    const starDivRef = useRef(null);
    
    useEffect(()=>{
        if(Object.values(userFavData).find(obj=>obj.courseId === cId)){
            setStarClicked(true);
        }else{
            setStarClicked(false);
        }
    },[userFavData,cId])

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
                push(dataPushRef,{
                    courseName:currentCourseName,
                    courseDuration:currentCourseDuration,
                    courseId:cId,
                })
            }catch(e){
                console.error('error pushing data to user favorites',e);
            }
        }else{
            const dataIdInDb =  Object.entries(userFavData).find(([,{courseId}])=>courseId === cId)?.[0];
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
            <iframe src={`https://www.youtube.com/embed/${cId}`} style={{width:'100%',height:'95%'}}  frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>
            </div>
            <div className='info'>
            <p>{currentCourseName}</p>
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