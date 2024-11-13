import './community.styles.scss';
import { useContext } from 'react';
import { UserVideosContext } from '../../contexts/user-videos.context';
import NoCommunityUsersImg from '../../assets/void.svg';
import Avatar from 'boring-avatars';
import { useNavigate } from 'react-router-dom';

const Community = () => {

    const {communityUsers}=useContext(UserVideosContext);
    const navigateRouter = useNavigate();

    return ( 
        <div className='community-div animate__animated animate__fadeInDown'>
            <h1>Community</h1>
                {!Object.keys(communityUsers).length ? <div className='no-cu'>
                        <img src={NoCommunityUsersImg} width={350}  />
                </div> : <div className='cu'>
                {Object.entries(communityUsers).map(([userUid,{authorName}])=>({userUid,authorName})).map(obj=>{
                    return <div key={`cu-${obj.userUid}`} className='tile'>
                        <Avatar variant='marble' className='img-div'  name={obj.authorName} />
                        <span>{obj.authorName}</span>
                        <button className='c-btn' onClick={()=>navigateRouter(`/com/${obj.userUid}`)} >Explore</button>
                    </div>
                })}
                </div>}
        </div>
     );
}
 
export default Community;