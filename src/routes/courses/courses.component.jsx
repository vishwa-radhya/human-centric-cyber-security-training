import './courses.styles.scss';
import { useParams } from 'react-router-dom';
import { iFrameData } from '../../data';
import { FaHourglassEnd } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import 'animate.css';

const Courses=()=>{

    const {catalogName} =useParams();
    const navigateRouter = useNavigate();

    return(
        <div className="courses-div animate__animated animate__fadeInDown">
            <h1>{`${catalogName} Courses`}</h1>
            <div className='container'>
                {iFrameData.filter(obj=>obj.videoCategory===`${catalogName.toLocaleLowerCase()}`).map((ytObject)=>{
                    return <div key={ytObject.id} className='course-tile' onClick={()=>navigateRouter(`/course/${ytObject.videoSrc.slice(30)}`)}>
                        <img src={`https://img.youtube.com/vi/${ytObject.videoCode}/hqdefault.jpg`}  />
                        <span>{ytObject.videoName}</span>
                        <span>Duration : {ytObject.videoLength} <FaHourglassEnd/> </span>
                        <div className='star-div'><FaRegStar/></div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Courses;