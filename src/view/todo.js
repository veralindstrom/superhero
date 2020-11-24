import React, { useState } from 'react';
import firebase from '../util/firebase';

function Todo({ todo }) {
    const [complete, setComplete] = useState(false);

    const deleteTodo = () => {
        firebase.database().ref('Todo').child(todo.id).remove();
    }

    const completeTodo = () => {
        firebase.database().ref('Todo').child(todo.id).update(
            {
                complete: !todo.complete
            }
        );
        console.log(todo.complete);
        if (todo.complete) setComplete(true);
        else setComplete(false);
    }

    return (
        <div className="todo">
            <h2>{todo.title}</h2>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={completeTodo} className={complete ? "completedBtn" : "notCompletedBtn"}>Completed</button>
        </div>
    );
};

export default Todo;