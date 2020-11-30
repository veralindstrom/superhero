import React, { useState } from 'react';
import '../css/App.css';

const QuestionBox = ({question, options, selected}) => {
    const[answer, setAnswer] = useState(options);
    const[isSelected, setIsSelected] = useState(false);

    return(
        <div className="questionBox">
            <div className="question">{question}</div>
            {/*{options.map(option => (
                <p key={option.id} className={`options ${answer === option ? "selected" : null}`}
                onClick={() => this.computeAnswer(option)}>
                    {option}
                </p>
            ))}*/}
            {answer.map((text, index) => (
                <button key={index} className={isSelected ? "selectedBtn" : "unselectedBtn"} onClick={() => {
                    //setAnswer([text]);
                    setIsSelected(prevState => ({
                        isSelected: !prevState.isSelected,
                    }));
                    selected(text);
                }}>
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox;