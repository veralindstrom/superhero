import React from 'react';
import ScoreList from '../js/ScoreModel';
import AllScores from './allScores';
import Quiz from '../js/Quiz';
import CharacterList from '../js/CharacterList';
import SuperheroSource from '../js/SuperheroSource';
import Item from '../js/QuizData';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <Item id="71"/>
            <CharacterList/>
            <ScoreList/>
            <AllScores/>
           
        </section>
    );
};

export default Home;