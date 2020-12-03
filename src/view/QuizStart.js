import React from 'react';

const QuizStart = ({startQuiz}) => {
    return(
            <div>
                <button className="ui inverted button"
                    onClick={startQuiz}
                > Start Quiz </button>
            </div>
        )};
export default QuizStart;
    