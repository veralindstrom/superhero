import React from 'react';

const QuizSide = ({goToQuestion, quiz, check}) => {

    return(
        <div className="Quiz Side">
            <h3> Questions: </h3>
            <ul>
                {quiz.map((item, index) => (
                    <li className="check" key={index}>
                        <a href="#QuizView" onClick={() => goToQuestion(index)}>Question {index+1}   </a>
                        {check(index)}
                    </li>
                ))}
            </ul>
        </div>
    )};
export default QuizSide;
