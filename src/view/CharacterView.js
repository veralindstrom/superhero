/*import React from 'react';

const CharacterView = ({ name, image, id, startquiz } ) => {

    return (

        <div className="character">
            <button class="character-btn"
            >
                <img src={image.url} alt={name} />
                <div className="character-info">

                    <h2>{name}</h2>
                    <button className="quiz-button"
                        onClick={()=>startquiz(id)}
                    > Start Quiz</button>
                </div>
            </button>
        </div>
    )

};

export default Character; */
import React, { useState } from 'react';
import CharacterView from '../view/CharacterView';
import Item from '../presenters/BuildQuiz';

const Character = (props) => {
    const {
        characters,
        handleOnSubmit,
        searchVal,
        handleOnChange
    } = props;


    const [quizstarted, setQuizstarted] = useState(false);
    const [id, setId] = useState("0");

    function getCharacter() {
        if (characters) {
            return characters.length > 0 &&
                characters.map((character) => <CharacterView key={character.id} {...character} startquiz={startQuiz} />)
        }
        else return <h1>No match found...</h1>
    }

    function startQuiz(ids) {
        setQuizstarted(true);
        setId(ids);
    }

    if (quizstarted) return <Item id={id} />
    else return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchVal}
                        onChange={handleOnChange} />
                </form>
            </header>
            <div className="character-container">
                {getCharacter()}
            </div>
        </>);

};

export default Character;
