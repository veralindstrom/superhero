import React from 'react';
import Score from '../presenters/score';

const ScoreView = (props) => {
    const {
        score,
        setScore,
        createScore,
        scoreList
    } = props;

    const scoreListArr = [];
    scoreList ? scoreList.map((score) => scoreListArr.push(score.score)): console.log('scoreList not defined');
    scoreListArr.sort((a, b) => {return b-a});

    return (
        <div>
            <div className="addTodo">
                <input type="text" onChange={(e) => setScore(e.target.value)} value={score} />
                <button onClick={createScore}>Add Score</button>
            </div>
            <center><div className="todoList">
                <h1>Your scores:</h1>
                <center>{scoreListArr.map((score, index) => <Score key={index} score={score} />)}</center>
            </div></center>
        </div>
    );
};

export default ScoreView;