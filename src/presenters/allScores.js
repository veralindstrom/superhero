import React, {useState, useEffect} from 'react';
import fire from '../util/firebase';
import ScoreBoard from '../view/ScoreBoard';

const AllScores = () => {
    const [scoreBoard, setScoreBoard] = useState();

    useEffect(() => {
        const allScoresRef = fire.database().ref('all_scores');
        let isSubscribed = true;
        if(isSubscribed){ 
            allScoresRef.on('value', (snapshot) => {
                let scoreboard = [];
                for(let uid in snapshot.val()){
                    const scoresRef = fire.database().ref(`all_scores/${uid}`);
                    scoresRef.on('value', (snapshot) => {
                        const scores = snapshot.val();
                        const scoreArr = [];
                        for (let id in scores) {
                            scoreArr.push({ uid, ...scores[id] });
                        }
                        scoreboard = [...scoreArr, ...scoreboard]; //...scoreArr to seperate make each element
            
                    });
                }
                setScoreBoard(scoreboard);
                console.log("scoreboard: ");
                console.log(scoreboard);
            });
        }
        return () => isSubscribed = false;
    }, []);
    
    return (
        <ScoreBoard scoreboard = {scoreBoard} />
    );
}

export default AllScores;