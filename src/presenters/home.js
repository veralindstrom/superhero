import React from 'react';
import ScoreList from '../js/ScoreModel';
import SuperheroSource from '../js/SuperheroSource';
import AllScores from './allScores';
import Quiz from '../js/Quiz';
import CharacterList from '../js/CharacterList';

const Home = ({ handleLogOut }) => {

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <CharacterList/>
            <ScoreList/>
            <AllScores/>
            <Quiz />
            <SuperheroSource />
        </section>
    );
};

export default Home;