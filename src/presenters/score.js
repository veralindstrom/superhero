import React, { useState } from 'react';
import { auth, db } from "../util/firebase";

function Score({ score }) {
    const [user,] = useState(auth.currentUser);
    const ref = db.ref(`all_scores/${user.uid}`);

    const deleteScore = () => {
        ref.child(score.id).remove();
    }

    return (
        <div className="todo">
            <h2>{score.score}</h2>
            <button onClick={deleteScore}>Delete</button>
        </div>
    );
};

export default Score;