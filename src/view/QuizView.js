import React from 'react';

const QuizView = ({questions, currentQuestion, quiz, options, userAnswer, checkAnswer, selectedAnswers, prev, next, finish, disabled}) => {

    return(
        <div className="Quiz">
            <h2>{questions}</h2>
            <span> Question {currentQuestion + 1} out of {quiz.length}</span>
            {options.map(option => (
                <p key={option.id} 
                className= {`ui floating message options ${userAnswer === option ? "selected" : null}`}
                onClick={() => {
                    checkAnswer(option); 
                    selectedAnswers(currentQuestion, option);
                    //this.selectedAnswers(this.state.number, option);
                    }}>
                        {option}
                </p>
            ))}

            {currentQuestion > 0 &&
                <button className="ui inverted button"
                    onClick={prev}
                > Previous </button>}
            {currentQuestion < quiz.length - 1 &&
                <button className="ui inverted button"
                    disabled={disabled} 
                    onClick={next}
                > Next </button>}
            {currentQuestion === quiz.length - 1 && 
                <button onClick={finish}
                > Finish </button>}
        </div>
    )};
export default QuizView;
