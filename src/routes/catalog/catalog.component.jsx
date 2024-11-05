import './catalog.styles.scss';
import SvgLoader from '../../components/svg-loader/svg-loader.component';
import { FaArrowRight } from 'react-icons/fa6';
import c1 from '../../assets/cryptography (1).jpg';
import c2 from '../../assets/cloud (1).jpg';
import c3 from '../../assets/app-sec (1).jpg';
import c4 from '../../assets/information-sec (1).jpg';
import c5 from '../../assets/network sec (1).jpg';
import c6 from '../../assets/social-eng (1) (1).jpg';
import { useNavigate } from 'react-router-dom';
import { GrCatalog } from "react-icons/gr";

const Catalog=()=>{

    const catalogStrings=['Cryptography','Cloud Security','Application Security','Information Security','Network Security','Social Engineering'];
    const catalogImages = [c1, c2, c3, c4, c5, c6];
    const navigateRouter = useNavigate();

    return(
        <div className="catalog-div animate__animated animate__fadeInDown">
            <h1>Explore Range Of Cyber Security Course Catalog</h1>
            <div className='catalogs'>
                {catalogStrings.map((str,index)=>{
                    return <div className='catalog-tile' key={`cat-${index}`} onClick={()=>navigateRouter(`/catalog/${catalogStrings[index]}`)}>
                        <div className='image'>
                            <SvgLoader imgSrc={catalogImages[index]} imgWidth={180} />
                        </div>
                        <div className='content'>
                            <p> <GrCatalog/> {str}</p>
                            <span>Explore <FaArrowRight/> </span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Catalog;