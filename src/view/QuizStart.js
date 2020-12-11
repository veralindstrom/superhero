import React from 'react';

const QuizStart = ({startQuiz}) => {
    return(
            <div className="Quiz Start">
                <button className="ui inverted button start"
                    onClick={startQuiz}
                > Start Quiz </button>
                <button className="ui inverted button"
                    onClick={startQuiz}
                > Exit Quiz REMEMBER TO CHANGE  </button>
            </div>
        )};
export default QuizStart;
    