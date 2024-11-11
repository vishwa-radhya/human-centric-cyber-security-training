import './no-user-popover.styles.scss';
import NoAuthImg from '../../assets/no-auth.png';
import SvgLoader from '../svg-loader/svg-loader.component';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const NoUserPopover = ({starDivRef,isNoUserPopoverShown,handleSetIsNoUserPopOverShown}) => {

    const NoUserPopoverDivRef = useRef(null);
    const navigateRouter = useNavigate();

    useEffect(()=>{
        if(isNoUserPopoverShown){
            const handleClickOutside=(e)=>{
                if(starDivRef.current && !starDivRef.current.contains(e.target) && NoUserPopoverDivRef.current && !NoUserPopoverDivRef.current.contains(e.target)){
                    handleSetIsNoUserPopOverShown(false);
                }
            }
            document.addEventListener('click',handleClickOutside);
            return ()=>document.removeEventListener('click',handleClickOutside);
        }
    },[isNoUserPopoverShown,starDivRef,handleSetIsNoUserPopOverShown])

    return ( 
        <div className='overlaying'>
        <div className="no-user-popover-div animate__animated animate__fadeInDown" ref={NoUserPopoverDivRef} >
            <span>Sign In To Keep Favorites </span>
            <SvgLoader imgSrc={NoAuthImg} imgWidth={250} />
            <button className='c-btn' onClick={()=>{
                handleSetIsNoUserPopOverShown(false)
                navigateRouter('/user')
            }} >SignIn Now</button>
        </div>
        </div>
     );
}
NoUserPopover.propTypes={
    starDivRef:PropTypes.shape({
        current:PropTypes.instanceOf(Element)
    }),
    isNoUserPopoverShown:PropTypes.bool,
    handleSetIsNoUserPopOverShown:PropTypes.func,
}
export default NoUserPopover;