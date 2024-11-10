import './home.styles.scss';
import homeImg from '../../assets/cyber-attack (1).png';
import { MdTravelExplore } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const Home=()=>{

    const navigateRouter = useNavigate();

    return(
        <div className="home-div animate__animated animate__fadeInDown">
            <div>
                <p>Human Centric Cyber Security Training Program</p>
                <span>
                Our Human-Centric Cybersecurity Training Program focuses on building knowledge and resilience against cyber threats, designed with people at its core. Learn essential skills to protect your digital presence and safeguard your organization from emerging cyber risks. 
                </span>
                <button onClick={()=>navigateRouter('/catalog')} className='c-btn'> <MdTravelExplore/> Explore Catalog</button>
            </div>
            <div>
                <img src={homeImg} style={{width:'55%'}} />
            </div>
        </div>
    )
}
export default Home;