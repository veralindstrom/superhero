import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

export const Header = () => {

    const { currentUser } = useContext(AuthContext)

    return currentUser ? (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">
                            <button className="headerBut">Homepage</button>
                        </Link>
                    </div>

                    <ul className="nav-links">

                        <li>
                            <Link to="/scoreboard">
                                <button className="headerBut">Scoreboard</button>
                            </Link>
                        </li>

                        <li>
                            <Link to="/myscores">
                                <button className="headerBut">My Scores</button>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    ) : (
        <div></div>
    );
}