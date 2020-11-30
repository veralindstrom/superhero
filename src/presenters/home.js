import React from 'react';
import Data from './Data';
import ScoreList from './scoreList';
import SuperheroSource from '../js/SuperheroSource';
import Quiz from '../js/Quiz';


const Home = ({ handleLogOut }) => {

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <Data />
            <ScoreList/>
            <Quiz/>
            <SuperheroSource />
        </section>
    );
};

export default Home;