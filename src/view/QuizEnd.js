import React from 'react';

const QuizEnd = ({score, quiz, reStart, markCorrect, show}) => {
    return(
            <div className="Quiz End"> 
                <h2 className="scoreDeclaration"> Final score is {score} points out of {quiz.length} </h2>
                <table><tbody class="quizEndTable">
                    <tr className="tableHeaderRow">
                        <td><h3 className="tableTitles">Quiz questions:</h3></td>
                        <td></td>
                        <td><div className="answers" id={-1}><h3 className="tableTitles">Correct answers: </h3></div></td>
                    </tr>
                    {quiz.map((item, index) => (
                    <tr key={index} >
                        <td className="tableQuestionColumn">{item.question}</td>
                        <td className="mark">{markCorrect(index)}</td>
                        <td><div className="answers" id={index}>{item.answer}</div></td>
                    </tr>))}
                </tbody></table>
                
                <button id="answBut" className="ui inverted button"
                    onClick={() => show()}
                > Show correct answers .. </button>
                 
                <button className="ui inverted button"
                    onClick={reStart}
                > ReTry Quiz </button>

                <button className="ui inverted button"
                    onClick={reStart}
                > Exit Quiz REMEMBER TO CHANGE </button>
            </div>
    )};
export default QuizEnd;


