import React from 'react';
import AllScores from '../presenters/allScores';
import YourScores from '../presenters/yourScores';
import CharacterList from '../js/CharacterModel';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <CharacterList />
            <YourScores />
            <AllScores />

        </section>
    );
};

export default Home;
