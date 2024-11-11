import { Outlet } from "react-router-dom";
import './navbar.styles.scss';
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavImage from '../../assets/shield-antivirus-svgrepo-com.svg';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GrCatalogOption } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineQuiz } from "react-icons/md";

const Navbar=()=>{

    const navigateRouter = useNavigate();
    const [theme,setTheme]=useState(true);
    const [isDropdownOpen,setIsDropdownOpen]=useState(false);
    const ellipsisRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(()=>{
        document.body.className=theme ? 'dark-theme' : 'light-theme';
    },[theme]);

    useEffect(()=>{
        if(isDropdownOpen){
            const handleClickOutside=(event)=>{
                if(ellipsisRef.current && !ellipsisRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)){
                    setIsDropdownOpen(false);
                }
            }
            document.addEventListener('click',handleClickOutside);
            return ()=> document.removeEventListener('click',handleClickOutside);
        }
    },[isDropdownOpen])

    return(
        <Fragment>
        <nav className="navbar-container">
            <div onClick={()=>navigateRouter('/')}>
                <img src={NavImage}  />
                <p>Web App</p>
            </div>
            <ul>
                <li onClick={()=>navigateRouter('catalog')} className="nav-li">Catalog</li>
                <li onClick={()=>navigateRouter('favorites')} className="nav-li">Favorites</li>
                <li onClick={()=>navigateRouter('quiz')} className="nav-li">Quiz</li>
                <li className="user nav-li" onClick={()=>navigateRouter('user')}><FaCircleUser/></li>
                <li className="options" onClick={()=>setIsDropdownOpen(true)} ref={ellipsisRef}><FaEllipsisVertical/></li>
                <li className="theme" onClick={()=>setTheme(prev=>!prev)}>{theme ? <FaSun/> : <FaMoon/>} </li>
            </ul>
            {isDropdownOpen && <div className="options-div animate__animated animate__slideInDown" ref={dropdownRef}>
                <span onClick={
                    ()=>{navigateRouter('catalog')
                     setIsDropdownOpen(false)}
                    }><GrCatalogOption/>Catalog</span>
                <span onClick={
                    ()=>{navigateRouter('favorites')
                     setIsDropdownOpen(false)}
                    }><FaRegStar/>Favorites</span>
                <span onClick={
                    ()=>{navigateRouter('quiz')
                     setIsDropdownOpen(false)}
                    }><MdOutlineQuiz/>Quiz</span>
                <span onClick={()=>{
                    navigateRouter('user')
                    setIsDropdownOpen(false)
                    }}><FaRegCircleUser/>User</span>
            </div>}
        </nav>
            <Outlet/>
        </Fragment>
    )
}
export default Navbar;