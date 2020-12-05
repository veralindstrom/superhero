import React from 'react';
import ScoreList from '../js/ScoreModel';
import SuperheroSource from '../js/SuperheroSource';
import AllScores from './allScores';
import Quiz from '../js/Quiz';

const Home = ({ handleLogOut }) => {

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <ScoreList/>
            <AllScores/>
            <Quiz />
            <SuperheroSource />
        </section>
    );
};

export default Home;