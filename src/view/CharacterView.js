import React from 'react';

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

export default CharacterView; 