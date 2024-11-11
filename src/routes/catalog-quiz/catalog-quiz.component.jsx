import './catalog-quiz.styles.scss';
import { useParams } from 'react-router-dom';
import { catalogQuizData } from '../../quiz';
import { useState } from 'react';
import RadioButton from '../../components/radio-button/radio-button.component';

const CatalogQuiz = () => {
    const {quizCatalog} = useParams();
    const [userAnswers,setUserAnswers]=useState({});
    const [score,setScore]=useState(0);
    const [showIcons,setShowIcons]=useState(false);
    const passQuizCatalog = quizCatalog;

    const handleOptionChange = (questionId, selectedOption) => {
        setUserAnswers({
          ...userAnswers,
          [questionId]: selectedOption,
        });
      };

      const handleSetScore=()=>{
        let newScore = 0;
        if(Object.keys(userAnswers).length !== 10){
            return;
        }else{
            Object.keys(userAnswers).forEach(questionId=>{
                if(userAnswers[questionId]===catalogQuizData[quizCatalog.toLowerCase()][questionId].answer){
                    newScore++;
                }
            })
        }
        setScore(newScore);
        setShowIcons(true)
      }

      const handleRetakeQuiz=()=>{
        setShowIcons(false);
        setUserAnswers({});
        setScore(0);
      }

    return ( 
        <div className='catalog-quiz-div animate__animated animate__fadeInDown'>
            <h1>Quiz on {quizCatalog} </h1>
            <div className='quiz-container'>
                {Object.keys(catalogQuizData[quizCatalog.toLowerCase()]).map((questionId,idx)=>{
                    const question = catalogQuizData[quizCatalog.toLowerCase()][questionId];
                    return (
                        <div key={questionId} className='tile'>
                            <h3>{++idx}. {question.question} </h3>
                            {question.options.map(option=>{
                                return <div key={option} className='options-div'>
                                    <RadioButton optioValue={option} showIcons={showIcons} quizCatalog={passQuizCatalog} handleOptionChange={handleOptionChange} questionId={questionId} val={option} userAnswers={userAnswers} />
                                </div>
                            })}
                        </div>
                    )
                })}
            </div>
            <p>Your Score : {score}</p>
            <button className='c-btn' onClick={handleSetScore}>SUBMIT</button>
            <button className='c-btn' onClick={handleRetakeQuiz}>Retake quiz</button>
        </div>
     );
}
 
export default CatalogQuiz;
