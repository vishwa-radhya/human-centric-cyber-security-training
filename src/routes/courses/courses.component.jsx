import './courses.styles.scss';
import { useParams } from 'react-router-dom';
import { iFrameData } from '../../data';
import { FaHourglassEnd } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Courses=()=>{

    const {catalogName} =useParams();
    const navigateRouter = useNavigate();

    return(
        <div className="courses-div">
            <h1>{`${catalogName} Courses`}</h1>
            <div className='container'>
                {iFrameData.filter(obj=>obj.videoCategory===`${catalogName.toLocaleLowerCase()}`).map((ytObject)=>{
                    return <div key={ytObject.id} className='course-tile' onClick={()=>navigateRouter(`/course/${ytObject.videoSrc.slice(30)}`)}>
                        <img src={`https://img.youtube.com/vi/${ytObject.videoCode}/hqdefault.jpg`} width={350} />
                        <span>{ytObject.videoName}</span>
                        <span>Duration : {ytObject.videoLength} <FaHourglassEnd/> </span>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Courses;