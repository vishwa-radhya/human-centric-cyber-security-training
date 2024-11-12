import {  useState } from 'react';
import './user-video-add-dialog.styles.scss';
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context.context';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import { firebaseRealtimeDb } from '../../utils/firebase';
import { ref,push } from 'firebase/database';

const UserVideoAddDialog = ({setIsUserVideoAddDialogOpen}) => {

    const [courseName,setCourseName]=useState('');
    const [embedLink,setEmbedLink]=useState('');
    const [courseDuration,setCourseDuration]=useState('');
    const [courseCatagory,setCourseCatagory]=useState('');
    const {user} = useContext(AuthContext);      

    const guideArray = ['Choose Your Youtube Video','Click on share','Click on embed','copy source(src) link from iframe code'];
    const courseCatalogs=['Cryptography','Cloud Security','Application Security','Information Security','Network Security','Social Engineering','Others'];

    const handleUserVideoSubmit =async()=>{
        const trimmedCourseName = courseName.trim();
        const trimmedEmbedLink = embedLink.trim();
        const trimmedCourseCategory = courseCatagory.trim();
        const trimmedCourseDuration = courseDuration.trim();

        if(user && trimmedCourseName && trimmedEmbedLink.startsWith('https://www.youtube.com/embed/') && trimmedCourseCategory && trimmedCourseDuration){
            const dbReference = ref(firebaseRealtimeDb,`userVideos/${user.uid}`)
            const dbReferenceForNewPath = ref(firebaseRealtimeDb,`videoCategoryUsers/${courseCatagory}`)
            try{
                push(dbReference,{
                    courseName:trimmedCourseName,
                    courseDuration:trimmedCourseDuration,
                    courseCatagory:trimmedCourseCategory.toLowerCase(),
                    embedLink:trimmedEmbedLink.replace(/"/g,'').slice(30)
                })
            }catch(e){
                console.error('error pushing user videos to userVideos',e)
            }
            try{
                push(dbReferenceForNewPath,{
                    authorName:user.displayName,
                    authorPhotoUrl:user.photoURL,
                })
            }catch(e){
                console.error('error pushing user details to video added users',e)
            }
            setIsUserVideoAddDialogOpen(false)
        }
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
                <legend>Course Duration Ex:(01:30:00)</legend>
                <input type='text' maxLength={10} spellCheck={false} value={courseDuration} onChange={(e)=>setCourseDuration(e.target.value)} />
            </fieldset>
            </div>
            <fieldset> 
                <legend>Youtube embed link</legend>
                <input type='text' maxLength={70}  spellCheck={false} value={embedLink} onChange={(e)=>setEmbedLink(e.target.value)} />
            </fieldset>
            <div><span className='info-h'>Get Youtube embed link by following below steps</span>
            </div>
            {<div className='step-guide'>
                {guideArray.map((str,idx)=>{
                    return <div key={`guide-${idx}`} className='guide-step'>
                        <span>{str}</span>
                        <PiArrowFatLineDownFill/>
                    </div>
                })}
                <span className='example-link'>Example Link : https://www.youtube.com/embed/j_8PLI_wCVU?si=3_vn6vENc70dceL7 </span>
            </div>}
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