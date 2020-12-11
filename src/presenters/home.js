import React from 'react';
import CharacterList from '../js/CharacterModel';
import Item from '../presenters/BuildQuiz';
import YourScores from './YourScores';
import AllScores from './AllScores';
import Quiz from '../presenters/Quiz';
import Character from '../presenters/Character';
import ScoreBoard from '../view/ScoreBoard';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <CharacterList/>
        </section>
    );
};

export default Home;
