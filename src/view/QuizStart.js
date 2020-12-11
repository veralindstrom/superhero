import React from 'react';
import { Route } from 'react-router-dom';

const QuizStart = ({startQuiz}) => {
    return(
            <div className="Quiz Start">
                <button className="ui inverted button"
                    onClick={startQuiz}
                > Start Quiz </button>

            <Route render={({history}) => (
                <button className="ui inverted button"
                onClick={() => {history.push('/') }}
                >
                Exit Quiz</button>
            )}/>
            </div>
        );
};
export default QuizStart;
    