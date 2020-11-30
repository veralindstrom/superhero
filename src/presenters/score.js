import React, { useState } from 'react';
import fire from "../util/firebase";

function Score({ score }) {
    const [user,] = useState(fire.auth().currentUser);
    const ref = fire.database().ref(`all_scores/${user.uid}`);

    const deleteScore = () => {
        ref.child(score.id).remove();
    }

    return (
        <div className="todo">
            <h2>{score}</h2>
            <button onClick={deleteScore}>Delete</button>
        </div>
    );
};

export default Score;