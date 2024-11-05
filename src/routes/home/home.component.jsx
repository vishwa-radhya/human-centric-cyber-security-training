import './home.styles.scss';
import homeImg from '../../assets/cyber-attack (1).png';
import { MdTravelExplore } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Home=()=>{

    const navigateRouter = useNavigate();

    return(
        <div className="home-div animate__animated animate__fadeInDown">
            <div>
                <p>Human Centric Cyber Security Training Program</p>
                <span>
                    content content content content content content content content content content content content content content content content content content content content content content 
                </span>
                <button onClick={()=>navigateRouter('/catalog')}> <MdTravelExplore/> Explore Catalog</button>
            </div>
            <div>
                <img src={homeImg} style={{width:'55%'}} />
            </div>
        </div>
    )
}
export default Home;