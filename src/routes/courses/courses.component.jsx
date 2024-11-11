import './courses.styles.scss';
import { useParams } from 'react-router-dom';
import { iFrameData } from '../../data';
import { FaHourglassEnd } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import 'animate.css';
import SearchBar from '../../components/search-bar/search-bar.component';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useContext } from 'react';
import { FavContext } from '../../contexts/fav-context.context';

const Courses=()=>{

    const {catalogName} =useParams();
    const navigateRouter = useNavigate();
    const {userFavData}=useContext(FavContext);
    const [filteredData,setFilteredData]=useState(iFrameData);

    const handleFilterData=(value)=>{
        setFilteredData(iFrameData.filter(obj=>obj.videoName.toLowerCase().includes(value.toLowerCase())))
    }

    return(
        <div className="courses-div animate__animated animate__fadeInDown">
            <h1>{`${catalogName} Courses`}</h1>
            <SearchBar handleFilterData={handleFilterData} />
            <div className='container'>
                {filteredData.filter(obj=>obj.videoCategory===`${catalogName.toLocaleLowerCase()}`).map((ytObject)=>{
                    return <div key={ytObject.id} className='course-tile' onClick={()=>navigateRouter(`/course/${ytObject.videoSrc.slice(30)}`)}>
                        <img src={`https://img.youtube.com/vi/${ytObject.videoCode}/hqdefault.jpg`}  />
                        <span>{ytObject.videoName}</span>
                        <span>Duration : {ytObject.videoLength} <FaHourglassEnd/> </span>
                        <div className='star-div'>{Object.values(userFavData).includes(ytObject.videoCode) ? <FaStar/> : <FaRegStar/> }</div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Courses;