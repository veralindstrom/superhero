import React from 'react';
import Score from '../presenters/score';

const ScoreBoard = (props) => {
    const {
        scoreboard
    } = props;
    const scoreboardArr = [];
    scoreboard ? scoreboard.map((score) => scoreboardArr.push(score.score)): console.log('scoreboard not defined');
    scoreboardArr.sort((a, b) => {return b-a});
    console.log("scoreboardArr: " + scoreboardArr);
    return (
        <center><div className="todoList">
            <h1>Score Board</h1>
            <center>{scoreboardArr.map((score, index) => <Score key={index} score={score} />)}</center>
        </div>
        </center>
    );
};

export default ScoreBoard;