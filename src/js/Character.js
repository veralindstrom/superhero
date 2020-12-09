import React from 'react';
import startQuiz from './Quiz'



//const imageUrl = 'https://superheroapi.com/api/1741527979362433/70/image';

const Character = ({ name, image }) => {

    return (

        <div className="character">
            <button class="character-btn"
            >
                <img src={image.url} alt={name} />
                <div className="character-info">

                    <h2>{name}</h2>
                    <button className="quiz-button"
                        onClick={startQuiz}
                    > Start Quiz</button>

                </div>
            </button>
        </div>
    )

};

export default Character; 