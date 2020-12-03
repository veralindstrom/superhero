import React from 'react';
import Todo from '../presenters/todo';

const TodoList = (props) => {
    const {
        todoList
    } = props;
    
    return (
        <center><div className="todoList">
            <h1>Todos:</h1>
            <center>{todoList ? todoList.map((todo, index) => <Todo key={index} todo={todo} />) : ''}</center>
        </div>
        </center>
    );
};

export default TodoList;