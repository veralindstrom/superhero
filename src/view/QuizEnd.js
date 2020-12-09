import React from 'react';

const QuizEnd = ({score, quiz, reStart, markCorrect}) => {
    return(
            <div className="Quiz"> 
                <h2 className="scoreDeclaration"> Final score is {score} points out of {quiz.length} </h2>
                <table><tbody class="quizEndTable">
                    <tr className="tableHeaderRow">
                        <td><h3>Quiz questions:</h3></td>
                        <td></td>
                        <td><div className="answers" id={-1}><h3>Correct answers: </h3></div></td>
                    </tr>
                    {quiz.map((item, index) => (
                    <tr key={index} >
                        <td className="tableQuestionColumn">{item.question}</td>
                        <td className="mark">{markCorrect(index)}</td>
                        <td><div className="answers" id={index}>{item.answer}</div></td>
                    </tr>))}
                </tbody></table>
                
                <button className="ui inverted button"
                    onClick={()=>show()}
                > Show correct answers .. </button>
                 
                <button className="ui inverted button"
                    onClick={reStart}
                > ReTry Quiz </button>
            </div>
    )};
export default QuizEnd;


// Called to display the default hidden correct answers
function show() {
    for(var i = -1; i < 8; i++){
        var x = document.getElementById(i);
        console.log(i);
            x.style.display = "block";    
        }
    return;
}

