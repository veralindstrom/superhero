import React from 'react';
import Score from './score';
import Quiz from '../js/Quiz';

const ScoreView = (props) => {
    const {
        scoreList
    } = props;

    const scoreListArr = [];
    scoreList ? scoreList.map((score) => scoreListArr.push(score.score)): console.log('scoreList not defined');
    scoreListArr.sort((a, b) => {return b-a});
    
    return (
        <div>
            <center><div className="todoList">
                <h1>Your scores:</h1>
                <center>{scoreListArr.map((score, index) => <Score key={index} score={score} />)}</center>
            </div></center>
        </div>
    );
};

export default ScoreView;