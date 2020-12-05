import React, { useEffect, useState } from 'react';
import fire from "../util/firebase";
import '../css/App.css';
import YourScores from '../presenters/yourScores';
import AllScores from '../presenters/allScores';

  const ScoreModel = () => {
    const user = fire.auth().currentUser;
    const dbref = fire.database().ref(`all_scores/${user.uid}`);

    const createScore = (score) => {
      if(score){
        const sc = {
          score: score,
        };

        dbref.push(sc);
      }
    };

    return (
        <>
            <YourScores
                user={user}
                dbref={dbref}
                createScore={createScore}
            />
        </>
    );
}

export default ScoreModel;