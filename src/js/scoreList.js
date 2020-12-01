import React, { useEffect, useState } from 'react';
import fire from "../util/firebase";
import '../css/App.css';
import ScoreView from '../view/ScoreView';

  const ScoreList = (props) => {
      const {
        s
      } = props;

    const [score,] = useState(s);
    const [scoreList, setScoreList] = useState();

    useEffect(() => {
      const user = fire.auth().currentUser;
      const dbref = fire.database().ref(`all_scores/${user.uid}`);
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

      createScore();

      return () => isSubscribed = false;
    }, []);


    const createScore = () => {
      if(score){
        const user = fire.auth().currentUser;
        const dbref = fire.database().ref(`all_scores/${user.uid}`);
        const sc = {
          score: score,
        };

        dbref.push(sc);
      }
    };

    return (
        <>
            <ScoreView
                scoreList={scoreList}
            />
        </>
    );
}

export default ScoreList;