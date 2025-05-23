import { Outlet } from "react-router-dom";
import './navbar.styles.scss';
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavImage1 from '../../assets/gene-sequence-svgrepo-com.svg';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import BottomNav from "../bottom-nav/bottom-nav.component";

const Navbar=()=>{

    const navigateRouter = useNavigate();
    const [theme,setTheme]=useState(true);

    useEffect(()=>{
        document.body.className=theme ? 'dark-theme' : 'light-theme';
    },[theme]);


    return(
        <Fragment>
        <nav className="navbar-container">
            <div onClick={()=>navigateRouter('/')} className="home">
                <img src={NavImage1} />
                <p>Web App</p>
            </div>
            <ul>
                <li onClick={()=>navigateRouter('catalog')} className="nav-li">Catalog</li>
                <li onClick={()=>navigateRouter('favorites')} className="nav-li">Favorites</li>
                <li onClick={()=>navigateRouter('quiz')} className="nav-li">Quiz</li>
                <li onClick={()=>navigateRouter('people')} className="nav-li">Community</li>
                <li className="user nav-li" onClick={()=>navigateRouter('user')}><FaCircleUser/></li>
                <li className="theme" onClick={()=>setTheme(prev=>!prev)}>{theme ? <FaSun/> : <FaMoon/>} </li>
            </ul>
        </nav>
        <BottomNav />
            <Outlet/>
        </Fragment>
    )
}
export default Navbar;