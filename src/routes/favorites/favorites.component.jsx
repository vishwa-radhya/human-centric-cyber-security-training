import './favorites.styles.scss';
import noFavoriteImg from '../../assets/void.svg';
import 'animate.css';
import { useContext } from 'react';
import { FavContext } from '../../contexts/fav-context.context';
import { useNavigate } from 'react-router-dom';
import { FaHourglassEnd,FaRegStar,FaStar } from 'react-icons/fa6';
import { AuthContext } from '../../contexts/auth-context.context';
import { HelperContext } from '../../contexts/helper-context.context';

const Favorites=()=>{

    const {userFavData}=useContext(FavContext);
    const {user} = useContext(AuthContext);
    const {handleSetCurrentCourseDuration,handleSetCurrentCourseName}=useContext(HelperContext);
    const navigateRouter = useNavigate();


    return(
        <div className="favorites-div animate__animated animate__fadeInDown">
            <h1>Favorite Courses</h1>
            {Object.keys(userFavData).length === 0 || !user ? <div className='no-fav'>
                <img src={noFavoriteImg} style={{width:'40%'}} />
            </div> : <div className='has-fav'>
                <div className='fav-container'>
                {Object.entries(userFavData).map(([key,{courseName,courseDuration,courseId}])=>({key,courseName,courseDuration,courseId})).map((ytObject)=>{
                    return <div key={ytObject.key} className='course-tile' onClick={
                        ()=>{
                            handleSetCurrentCourseDuration(ytObject.courseDuration)
                            handleSetCurrentCourseName(ytObject.courseName)
                            navigateRouter(`/course/${ytObject.courseId}`)}
                        }>
                        <img src={`https://img.youtube.com/vi/${ytObject.courseId.slice(0,11)}/hqdefault.jpg`}  />
                        <span>{ytObject.courseName}</span>
                        <span>Duration : {ytObject.courseDuration} <FaHourglassEnd/> </span>
                        <div className='star-div'>{Object.values(userFavData).find(obj=>obj.courseId === ytObject.courseId) ? <FaStar/> : <FaRegStar/> }</div>
                    </div>
                })}
            </div>
            </div>}
        </div>
    )
}
export default Favorites;