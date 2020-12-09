import React from 'react';


const QuizSide = ({goToQuestion, quiz, check}) => {

    return(
        <div className="Quiz">
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

/*
            <ul> 
                <li><a href="#QuizView" onClick={() => goToQuestion(0)}>Question 1</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(1)}>Question 2</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(2)}>Question 3</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(3)}>Question 4</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(4)}>Question 5</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(5)}>Question 6</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(6)}>Question 7</a></li>
                <li><a href="#QuizView" onClick={() => goToQuestion(7)}>Question 8</a></li>
            </ul>
*/
