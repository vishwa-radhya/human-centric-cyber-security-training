import './course.styles.scss';
import { useParams } from 'react-router-dom';
import { iFrameData } from '../../data';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Course =()=>{
    const {courseId}=useParams();
    const courseNameObject = iFrameData.find(obj=>obj.videoSrc.includes(courseId));
    const navigateRouter = useNavigate();

    return(
        <div className='course-div'>
            <div className='back-arrow' onClick={()=>navigateRouter(-1)}><FaArrowLeft  /> go back</div>
            <div className='yt-video'>
            <iframe src={`https://www.youtube.com/embed/${courseId}`} style={{width:'100%',height:'95%'}} frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>
            <p>{courseNameObject.videoName}</p>
            </div>  
        </div>
    )
}
export default Course;