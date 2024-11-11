import './catalog-quiz.styles.scss';
import { useParams } from 'react-router-dom';

const CatalogQuiz = () => {

    const {quizCatalog} = useParams();

    return ( 
        <div className='catalog-quiz-div'>
            <h1>Quiz on {quizCatalog} </h1>
        </div>
     );
}
 
export default CatalogQuiz;
