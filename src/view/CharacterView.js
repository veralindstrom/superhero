import React from 'react';



const CharacterView = ({ name, image, id, startquiz }) => {
    /*const addDefaultSrc = (ev) => {
            ev.target.src = <h2>not found</h2>;
            ev.target.onerror = null;
        }
        onError={addDefaultSrc}*/
    /**onError={(e) => {
                        e.target.src = 'add some source '
                    }} */

    /*
const hideImg = () => {
document.getElementById("HideImg")
.style.display = "none";
}
onerror={hideImg}
*/
    /**onerror="this.onerror=null;this.src='missing.gif';" */

    /* const ImgError = (source) => {
         source.src = <h2>missing</h2>;
         source.onerror = "";
         return true;
     } 
     onerror={ImgError(this)}
     */

    /**onerror={(e) => {
                       e.target.src = 'https://se.depositphotos.com/28850541/stock-illustration-male-default-profile-picture.html '
                   }} */

    /*const handleErr = (req, res, next) => {
        res.status(404).send('character missing');
    }; */

    return (

        <div className="character">
            <div className="character-btn">
                <img src={image.url}
                    alt={name} />
                <div className="character-info">

                    <h2>{name}</h2>
                    <button className="quiz-button"
                        onClick={() => startquiz(id)}
                    > Start Quiz</button>
                </div>
            </div>
        </div>
    )

};

export default CharacterView; 