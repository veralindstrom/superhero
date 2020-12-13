import React from 'react';
import CharacterList from '../js/CharacterModel';
import superWelcome from '../pictures/superWelcome.gif';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <img src={superWelcome} alt="Wel" />
                <button className="logoutBtn" onClick={handleLogOut}> Logout </button>
            </nav>
            <CharacterList/>
        </section>
    );
};

export default Home;
