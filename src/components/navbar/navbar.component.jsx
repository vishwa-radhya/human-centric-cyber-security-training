import { Outlet } from "react-router-dom";
import './navbar.styles.scss';
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavImage from '../../assets/shield-antivirus-svgrepo-com.svg';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const Navbar=()=>{

    const navigateRouter = useNavigate();
    const [theme,setTheme]=useState(true);

    useEffect(()=>{
        document.body.className=theme ? 'dark-theme' : 'light-theme';
    },[theme]);

    return(
        <Fragment>
        <nav className="navbar-container">
            <div onClick={()=>navigateRouter('/')}>
                <img src={NavImage}  />
                <p>Web App</p>
            </div>
            <ul>
                <li onClick={()=>navigateRouter('catalog')}>Catalog</li>
                <li onClick={()=>navigateRouter('favorites')}>Favorites</li>
                <li>opt3</li>
                <li className="theme" onClick={()=>setTheme(prev=>!prev)}>{theme ? <FaSun/> : <FaMoon/>} </li>
            </ul>
        </nav>
            <Outlet/>
        </Fragment>
    )
}
export default Navbar;