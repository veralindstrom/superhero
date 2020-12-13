import React from 'react';
import CharacterList from '../js/CharacterModel';
import superWelcome from '../pictures/superWelcome.gif';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <img src={superWelcome} alt="Welcome" />
                <h1 className="knowHero">
                <span> How well do you really Know your Hero?</span>
                <span>     Dare take a Quiz and find out!     </span>
                </h1>
                <button onClick={handleLogOut}> Logout </button>
            </nav>
            <CharacterList/>
        </section>
    );
};

export default Home;
