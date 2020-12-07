import React from 'react';


//const imageUrl = 'https://superheroapi.com/api/1741527979362433/70/image';

const Character = ({ name, image }) => (

    <div className="character">
        <button type="button" class="character-btn">
            <img src={
                image.url ? image.url :
                    'https://se.depositphotos.com/28850541/stock-illustration-male-default-profile-picture.html'} alt={name} />
            <div className="character-info">

                <h2>{name}</h2>

            </div>
        //</button>
    </div>


);
export default Character;