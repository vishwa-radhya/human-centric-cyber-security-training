import './community-videos.styles.scss';
import { useParams } from 'react-router-dom';
import DataLoader from '../../components/data-loader/data-loader.component';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { HelperContext } from '../../contexts/helper-context.context';
import { ref,get } from 'firebase/database';
import { firebaseRealtimeDb } from '../../utils/firebase';
import { FaHourglassEnd } from 'react-icons/fa6';
import { FavContext } from '../../contexts/fav-context.context';
import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa6';
import { LuRefreshCw } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';


const CommunityVideos = () => {

    const [isLoading,setIsLoading]=useState(false);
    const {userVideoCacheObject,handleSetUserVideoCacheObject,handleSetCurrentCourseDuration,handleSetCurrentCourseName}=useContext(HelperContext);
    const {userFavData}=useContext(FavContext);
    const {userUid}=useParams();
    const [data,setData]=useState([]);
    const navigateRouter = useNavigate();
    
    useEffect(()=>{
        if(!Object.keys(userVideoCacheObject).includes(userUid)){
            // console.log('fetching user vid')
            fetchDataFromDb()
        }else{
            setData(Object.entries(userVideoCacheObject[userUid]).map(([keyId,{courseName,courseDuration,courseCatagory,embedLink}])=>({keyId,courseName,courseDuration,courseCatagory,embedLink})));
        }
    },[userVideoCacheObject])
    
    const fetchDataFromDb = async()=>{
        setIsLoading(true);
        // console.log('refetching user vid')
        try{
            const refPathInDb = ref(firebaseRealtimeDb,`userVideos/${userUid}`)
            const snapshot = await get(refPathInDb);
            if(snapshot.exists()){
                const dataValues = snapshot.val();
                handleSetUserVideoCacheObject(userUid,dataValues);
            }
        }catch(e){
            console.error('error occured at fetching user videos',e)
        }
        setIsLoading(false);
    }

    return ( 
        <div className='community-videos-div animate__animated animate__fadeInDown'>
            <h1>Community Videos</h1>
            <div className='refresh-div' onClick={fetchDataFromDb}>
                <LuRefreshCw/>
                <span>Refresh</span>
            </div>
            <div className='container'>
                {data.map(obj=>{
                    return (
                        <div key={`cv-${obj.keyId}`} className='tile'>
                        <img src={`https://img.youtube.com/vi/${obj.embedLink.slice(0,11)}/hqdefault.jpg`} onClick={()=>{
                            handleSetCurrentCourseDuration(obj.courseDuration)
                            handleSetCurrentCourseName(obj.courseName)
                            navigateRouter(`/course/${obj.embedLink}`)
                        }} />
                        <span>{obj.courseName}</span>
                        <span>Duration : {obj.courseDuration} <FaHourglassEnd/> </span>
                        <span>Category : {obj.courseCatagory}</span>
                        <div className='star-div'>{Object.values(userFavData).find(ob=>ob?.courseId === obj.embedLink.slice(0,11)) ? <FaStar/> : <FaRegStar/> }</div>
                        <button className='c-btn'>Report</button>
                        </div>
                    )
                })}
            </div>
            {isLoading && <DataLoader/>}
        </div>
     );
}
 
export default CommunityVideos;