import React from 'react';
import AllScores from '../presenters/AllScores';
import CharacterList from '../js/CharacterList';
import Item from '../presenters/BuildQuiz';
import YourScores from '../presenters/YourScores';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <Item id="71"/>
            <CharacterList/>
            <YourScores/>
            <AllScores/>
           
        </section>
    );
};

export default Home;
