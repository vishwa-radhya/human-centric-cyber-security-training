import './course.styles.scss';
import { useParams } from 'react-router-dom';
import { iFrameData } from '../../data';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import 'animate.css';

const Course =()=>{
    const {courseId}=useParams();
    const courseNameObject = iFrameData.find(obj=>obj.videoSrc.includes(courseId));
    const navigateRouter = useNavigate();
    const [starCLicked,setStarClicked]=useState(false);

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
            <div className='star' onClick={()=>setStarClicked(prev=>!prev)}>
                {!starCLicked ? <FaRegStar/> : <FaStar/>}
            </div>
            </div>
            </div>  
        </div>
    )
}
export default Course;