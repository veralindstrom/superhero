import React from 'react';
import '../css/App.css';

const Form = (props) => {
    const {
        title,
        setTitle,
        createTodo
    } = props;

    return (
        <div className="addTodo">
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button onClick={createTodo}>Add Todo</button>
        </div>
    );
}

export default Form;