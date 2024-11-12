import './favorites.styles.scss';
import noFavoriteImg from '../../assets/void.svg';
import 'animate.css';
import { iFrameData } from '../../data';
import { useContext,useEffect,useState } from 'react';
import { FavContext } from '../../contexts/fav-context.context';
import SearchBar from '../../components/search-bar/search-bar.component';
import { useNavigate } from 'react-router-dom';
import { FaHourglassEnd,FaRegStar,FaStar } from 'react-icons/fa6';
import { AuthContext } from '../../contexts/auth-context.context';
import { UserVideosContext } from '../../contexts/user-videos.context';

const Favorites=()=>{

    const {userFavData}=useContext(FavContext);
    const {user} = useContext(AuthContext);
    const {newIframeData}=useContext(UserVideosContext);
    const navigateRouter = useNavigate();
    const [filteredData,setFilteredData]=useState(iFrameData.concat(newIframeData));

    const handleFilterData=(value)=>{
        setFilteredData(iFrameData.concat(newIframeData).filter(obj=>obj.videoName.toLowerCase().includes(value.toLowerCase())))
    }

    useEffect(()=>{
        setFilteredData(iFrameData.concat(newIframeData))
    },[newIframeData])

    return(
        <div className="favorites-div animate__animated animate__fadeInDown">
            <h1>Favorite Courses</h1>
            {Object.keys(userFavData).length === 0 || !user ? <div className='no-fav'>
                <img src={noFavoriteImg} style={{width:'40%'}} />
            </div> : <div className='has-fav'>
                <SearchBar handleFilterData={handleFilterData} />
                <div className='fav-container'>
                {filteredData.filter(obj=>Object.values(userFavData).includes(obj.videoCode)).map((ytObject)=>{
                    return <div key={ytObject.id} className='course-tile' onClick={()=>navigateRouter(`/course/${ytObject.videoSrc.slice(30)}`)}>
                        <img src={`https://img.youtube.com/vi/${ytObject.videoCode}/hqdefault.jpg`}  />
                        <span>{ytObject.videoName}</span>
                        <span>Duration : {ytObject.videoLength} <FaHourglassEnd/> </span>
                        <div className='star-div'>{Object.values(userFavData).includes(ytObject.videoCode) ? <FaStar/> : <FaRegStar/> }</div>
                    </div>
                })}
            </div>
            </div>}
        </div>
    )
}
export default Favorites;