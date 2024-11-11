import './radio-button.styles.scss';
import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { catalogQuizData } from '../../quiz';

const RadioButton = ({optioValue,handleOptionChange,questionId,val,userAnswers,showIcons,quizCatalog}) => {
    
    const uniqueId = `${questionId}-${optioValue}`;

    return ( 
        <div className='radio-button'>
            <input type="radio" className="radio-button__input" id={uniqueId} name={questionId} value={val} checked={userAnswers[questionId] === optioValue} onChange={()=>handleOptionChange(questionId,optioValue)} />
            <label className="radio-button__label" htmlFor={uniqueId}>
                <span className="radio-button__custom"></span>
                {optioValue}
            </label>
            {showIcons && (val === catalogQuizData[quizCatalog.toLowerCase()][questionId].answer ? <FaCheck className='a-crt icon' /> :
            <FaXmark className='a-wrong icon' />)}
        </div>
     );
}
RadioButton.propTypes={
    optioValue:PropTypes.string,
    handleOptionChange:PropTypes.func,
    questionId:PropTypes.string,
    val:PropTypes.string,
    userAnswers:PropTypes.object,
    showIcons:PropTypes.bool,
    quizCatalog:PropTypes.string,
}
export default RadioButton;