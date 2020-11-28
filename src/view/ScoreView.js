import React from 'react';
import Score from '../presenters/score';

const ScoreView = (props) => {
    const {
        score,
        setScore,
        createScore,
        scoreList
    } = props;

    return (
        <div>
            <div className="addTodo">
                <input type="text" onChange={(e) => setScore(e.target.value)} value={score} />
                <button onClick={createScore}>Add Score</button>
            </div>
            <center><div className="todoList">
                <h1>Scores:</h1>
                <center>{scoreList ? scoreList.map((score, index) => <Score key={index} score={score} />) : ''}</center>
            </div></center>
        </div>
    );
};

export default ScoreView;