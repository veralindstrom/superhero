
import { Link } from 'react-router-dom';

const HeaderView = () =>{
    return(
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
    );
}

export default HeaderView;