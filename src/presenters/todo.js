import React, { useState } from 'react';
import fire from "../util/firebase";

function Todo({ todo }) {
    const [complete, setComplete] = useState(!todo.complete);

    const deleteTodo = () => {
        fire.database().ref('Todo').child(todo.id).remove();
    }

    const completeTodo = () => {
        fire.database().ref('Todo').child(todo.id).update(
            {
                complete: !todo.complete
            }
        );
        if (!todo.complete) setComplete(false);
        else setComplete(true);
    }

    return (
        <div className="todo">
            <h2>{todo.title}</h2>
            <button onClick={deleteTodo}>Delete</button>
            <button className={complete ? "completedBtn" : "notCompletedBtn"} onClick={completeTodo}>Completed</button>
        </div>
    );
};

export default Todo;