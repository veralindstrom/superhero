import React, { useEffect, useState } from 'react';
import { auth, db } from "../util/firebase";
import '../css/App.css';
import ScoreView from '../view/ScoreView';

  const ScoreList = () => {
    const [score, setScore ] = useState("");
    const [scoreList, setScoreList] = useState();

    useEffect(() => {
      const user = auth.currentUser;
      const dbref = db.ref(`all_scores/${user.uid}`);
      let isSubscribed = true;

      if(isSubscribed){
        dbref.on("value", snapshot => {
        const scores = snapshot.val();
        const scoreArr = [];
        for (let id in scores) {
          scoreArr.push({ id, ...scores[id] });
        }
        setScoreList(scoreArr);
        });
      }

      return () => isSubscribed = false;
    }, []);

    
    const clearInput = () => {
      setScore("");
    }

    const createScore = () => {
      const user = auth.currentUser;
      const dbref = db.ref(`all_scores/${user.uid}`);
      const sc = {
          score: score,
      };

      dbref.push(sc);
      clearInput();
    };

    return (
            <ScoreView
                score={score}
                setScore={setScore}
                createScore={createScore}
                scoreList={scoreList}
            />
    );
}

export default ScoreList;