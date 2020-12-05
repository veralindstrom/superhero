import React, {useState, useEffect} from 'react';
import fire from '../util/firebase';
import ScoreBoard from '../view/ScoreBoard';
import ScoreView from '../view/ScoreView';

const YourScores = (props) => {
    const {
        s,
        user,
        dbref,
        createScore
    } = props;
    
    const [score,] = useState(s);
    const [scoreList, setScoreList] = useState();

    useEffect(() => {
      let isSubscribed = true;

      if(isSubscribed){
        dbref.on("value", snapshot => {
        const scores = snapshot.val();
        const scoreArr = [];
        for (let id in scores) {
          scoreArr.push({ id, ...scores[id] });
        }
        setScoreList(scoreArr);
        console.log("scoreArr:");
        console.log(scoreArr);
        });
      }

      createScore(score);

      return () => isSubscribed = false;
    }, []);
    
    return (
        <ScoreView scoreList={scoreList}/>
    );
}

export default YourScores;