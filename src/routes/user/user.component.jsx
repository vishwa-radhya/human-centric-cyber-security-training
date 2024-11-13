import './user.styles.scss';
import { useContext,  useState } from 'react';
import { AuthContext } from '../../contexts/auth-context.context';
import { signInUser } from '../../utils/firebase';
import { signOutUser } from '../../utils/firebase';
import { FaGoogle } from 'react-icons/fa6';
import AuthImage from '../../assets/auth-now.png';
import SvgLoader from '../../components/svg-loader/svg-loader.component';
import { FaPlus } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import UserVideoAddDialog from '../../components/user-video-add-dialog/user-video-add-dialog.component';
import { UserVideosContext } from '../../contexts/user-videos.context';
import { FaHourglassEnd } from 'react-icons/fa6';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { ref,remove } from 'firebase/database';
import { firebaseRealtimeDb } from '../../utils/firebase';
import { HelperContext } from '../../contexts/helper-context.context';

const User = () => {

    const {user} = useContext(AuthContext);
    const {userVideos}=useContext(UserVideosContext);
    const {handleSetCurrentCourseDuration,handleSetCurrentCourseName}=useContext(HelperContext);
    const [isUserVideoAdddialogOpen,setIsUserVideoAddDialogOpen]=useState(false);
    const navigateRouter = useNavigate();

    const handleUserVideoDelete=async(dataId)=>{
        try{
            const userVideoInDbRef = ref(firebaseRealtimeDb,`userVideos/${user.uid}/${dataId}`);
            remove(userVideoInDbRef);
        }catch(e){
            console.error('error deleting user video from db',e)
        }
    }

    return ( 
        <div className="user-div animate__animated animate__fadeInDown">
            <h1>User Space</h1>
            {user ? <div className='user-div-space'>
                    <img src={user?.photoURL} alt='user' width={100} />
                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                    <button className='c-btn' onClick={signOutUser}>Sign Out</button>
                    <div className='user-video-add-div'>
                            <p>Share Your YouTube Videos with the Community<FaUserGroup/></p>
                            <button className='c-btn' onClick={()=>setIsUserVideoAddDialogOpen(true)} > <FaPlus/> Add Now</button>
                        </div>
                        <div className='user-videos'>
                            <p>Videos Shared By You</p>
                               <div className='container'>
                               {Object.entries(userVideos).map(([key,{courseName,courseDuration,courseCatagory,embedLink}])=>({key,courseName,courseDuration,courseCatagory,embedLink})).map((obj)=>{
                                return <div key={obj.key} className='tile'>
                                    <img src={`https://img.youtube.com/vi/${obj.embedLink.slice(0,11)}/hqdefault.jpg`} 
                                    onClick={
                                        ()=>{
                                            handleSetCurrentCourseDuration(obj.courseDuration)
                                            handleSetCurrentCourseName(obj.courseName)
                                            navigateRouter(`/course/${obj.embedLink}`)
                                            }
                                        } />
                                    <span>{obj.courseName}</span>
                                    <span>Duration : {obj.courseDuration} <FaHourglassEnd/> </span>
                                    <span onClick={()=>handleUserVideoDelete(obj.key)}> <MdDelete/>delete video</span>
                                </div>
                               })}
                               </div> 
                        </div>
                        {isUserVideoAdddialogOpen && <UserVideoAddDialog setIsUserVideoAddDialogOpen={setIsUserVideoAddDialogOpen} />}
            </div> : <div className='no-user-div-space'>
                        <SvgLoader imgSrc={AuthImage} imgWidth={200} />
                        <button className='c-btn' onClick={signInUser}> <FaGoogle/>signIn</button>
            </div>}
        </div>
     );
}
 
export default User;