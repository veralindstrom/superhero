import React from 'react';

const QuizEnd = ({score, quiz, reStart}) => {
    return(
            <div> 
                <h2> Final score is {score} points out of {quiz.length} </h2>
                <p> The correct answers are: </p>
                <ul>
                    {quiz.map((item, index) => (
                        <li className="ui floating message options"
                            key={index}
                        >{item.answer}</li>
                    ))}
                </ul>
                <button className="ui inverted button"
                    onClick={reStart}
                > Start Quiz Again </button>

            </div>
    )};
export default QuizEnd;
