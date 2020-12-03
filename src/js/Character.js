import React from 'react';


//const imageUrl = 'https://superheroapi.com/api/1741527979362433/70/image';

const Character = ({ name, image }) => (
    <div className="character">
        <img src={image.url} alt={name} />
        <div className="character-info">
            
            <h2>{name}</h2>
        </div>
    </div>

);
export default Character;