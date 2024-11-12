import './quiz.styles.scss';
import Img1 from '../../assets/cryptography (1).jpg';
import Img2 from '../../assets/cloud (1).jpg'
import Img3 from '../../assets/app-sec (1).jpg'
import Img4 from '../../assets/information-sec (1).jpg'
import Img5 from '../../assets/network sec (1).jpg'
import Img6 from '../../assets/social-eng (1) (1).jpg'
import SvgLoader from '../../components/svg-loader/svg-loader.component';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    
    const navigateRouter = useNavigate();
    const imgArray = [Img1,Img2,Img3,Img4,Img5,Img6];
    const quizcatalogs=['Cryptography','Cloud Security','Application Security','Information Security','Network Security','Social Engineering'];
    
    return ( 
        <div className="quiz-div animate__animated animate__fadeInDown">
            <h1>Quiz</h1>
            <div className='container'>
                {imgArray.map((image,idx)=>{
                    return <div key={`qz-${idx}`} className='tile' onClick={()=>navigateRouter(`/qz/${quizcatalogs[idx]}`)} >
                        <SvgLoader imgSrc={image} imgWidth={250} />
                        <span>{quizcatalogs[idx]}</span>
                    </div>
                })}
            </div>
        </div>
     );
}
 
export default Quiz;