import React from 'react';
import AllScores from './AllScores';
import Item from './BuildQuiz';
import YourScores from './YourScores';
import Character from './Character';
import CharacterList from '../js/CharacterModel';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <CharacterList/>
            <YourScores/>
            <AllScores/>
           
        </section>
    );
};

export default Home;
