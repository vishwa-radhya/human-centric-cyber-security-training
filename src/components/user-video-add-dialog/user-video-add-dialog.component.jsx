import {  useState } from 'react';
import './user-video-add-dialog.styles.scss';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context.context';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import { firebaseRealtimeDb } from '../../utils/firebase';
import { ref,push,set } from 'firebase/database';
import { UserVideosContext } from '../../contexts/user-videos.context';
import { FaYoutube } from "react-icons/fa";

const UserVideoAddDialog = ({setIsUserVideoAddDialogOpen}) => {

    const [courseName,setCourseName]=useState('');
    const [embedLink,setEmbedLink]=useState('');
    const [courseDuration,setCourseDuration]=useState('');
    const [courseCatagory,setCourseCatagory]=useState('');
    const {user} = useContext(AuthContext);
    const {communityUsers}=useContext(UserVideosContext);
    const [isChecked,setIsChecked]=useState(false);
    const [ytVideoCode,setYtVideoCode]=useState('');
    const shareLinkHead = 'https://youtu.be/';
    const embedLinkHead='https://www.youtube.com/embed/';

    const handleUserVideoSubmit =async()=>{
        const trimmedCourseName = courseName.trim();
        const trimmedEmbedLink = embedLink.trim();
        const trimmedCourseCategory = courseCatagory.trim();
        const trimmedCourseDuration = courseDuration.trim();

        if(user && trimmedCourseName && (trimmedEmbedLink.startsWith(shareLinkHead) || trimmedEmbedLink.startsWith(embedLinkHead)) && trimmedCourseCategory && trimmedCourseDuration){
            const dbReference = ref(firebaseRealtimeDb,`userVideos/${user.uid}`)
            const dbReferenceForNewPath = ref(firebaseRealtimeDb,`communityUsers/${user.uid}`)
            const slicerLength = trimmedEmbedLink.startsWith(shareLinkHead) ? 17 : trimmedEmbedLink.startsWith(embedLinkHead) ? 30 : 0
            
            try{
                push(dbReference,{
                    courseName:trimmedCourseName,
                    courseDuration:trimmedCourseDuration,
                    courseCatagory:trimmedCourseCategory.toLowerCase(),
                    embedLink:trimmedEmbedLink.replace(/"/g,'').slice(slicerLength)
                })
            }catch(e){
                console.error('error pushing user videos to userVideos',e)
            }

            if(!Object.keys(communityUsers).includes(user.uid)){
                console.log('setting com')
                try{
                    set(dbReferenceForNewPath,{
                        authorName:user.displayName,
                    })
                }catch(e){
                    console.error('error pushing user details to video added users',e)
                }
            }
            setIsUserVideoAddDialogOpen(false)
        }
    }
    
    const handleYTVideoCheck=()=>{
        const trimmedEmbedLink = embedLink.trim();

        if(trimmedEmbedLink){
            if(trimmedEmbedLink.startsWith(shareLinkHead)){
                videoCodeSetter(trimmedEmbedLink,shareLinkHead);
            }
            if(trimmedEmbedLink.startsWith(embedLinkHead)){
                videoCodeSetter(trimmedEmbedLink,embedLinkHead);
            }
        }
    }

    const videoCodeSetter=(link,head)=>{
        setYtVideoCode(link.slice(head.length,head.length+11))
        setIsChecked(true);
    }

    return (
        <div className="overlaying">  
        <div className="user-video-add-dialog-div animate__animated animate__fadeInDown">
        <div className='head'>
            <FaXmark onClick={()=>setIsUserVideoAddDialogOpen(false)} />
        </div>
            <span>Enter Course Details</span>
            <div className='cname-duration'>
            <fieldset> 
                <legend>Course name</legend>
                <input type='text' maxLength={60} spellCheck={false} value={courseName} onChange={(e)=>setCourseName(e.target.value)} />
            </fieldset>
            <fieldset> 
                <legend>Duration Ex: (01:30:00)</legend>
                <input type='text' maxLength={10} spellCheck={false} value={courseDuration} onChange={(e)=>setCourseDuration(e.target.value)} />
            </fieldset>
            </div>
            <fieldset> 
                <legend>Youtube embed link</legend>
                <input type='text' maxLength={70}  spellCheck={false} value={embedLink} onChange={
                    (e)=>{
                        setEmbedLink(e.target.value)
                        isChecked && setIsChecked(false)
                        }
                    } />
            </fieldset>
            <button className='c-btn' onClick={handleYTVideoCheck}>Check</button>
            <div className='yt-preview-div'>
                {!isChecked ? <FaYoutube/> : <img src={`https://img.youtube.com/vi/${ytVideoCode}/hqdefault.jpg`} />}
            </div>
            <div className='select-cc'>
                <span>Choose Category</span>
                <div className='cc'>
                {courseCatalogs.map((str,idx)=>{
                    return <div key={`sel-cc-${idx}`} onClick={()=>setCourseCatagory(str)} style={{backgroundColor:courseCatagory === str ? document.body.className === 'dark-theme' ? '#25C527' : '#90EF92'  : 'inherit'}}>
                        {str}
                    </div>
                })}
            </div>
            </div>
            <button className='c-btn' onClick={handleUserVideoSubmit}>Submit</button>
        </div>
        </div>
    );
}
UserVideoAddDialog.propTypes={
    setIsUserVideoAddDialogOpen:PropTypes.func,
}
export default UserVideoAddDialog;
