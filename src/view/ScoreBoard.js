import React from 'react';
import Score from './score';

const ScoreBoard = (props) => {
    const {
        scoreboard
    } = props;
    
    const scoreboardArr = [];
    scoreboard ? scoreboard.map((score) => scoreboardArr.push(score.score)): <h1>Loading..</h1>;
    scoreboardArr.sort((a, b) => {return b-a});
    console.log("scoreboardArr: " + scoreboardArr);

    return (
        <center><h1>Score Board</h1>
        <div className="scoreList">    
        <center>
            {scoreboardArr.map((score, index) => <Score key={index} score={score} />)}
        </center>
        </div>
        </center>
    );
};

export default ScoreBoard;