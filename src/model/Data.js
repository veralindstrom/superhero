import React, { useEffect, useState } from 'react';
import firebase from '../util/firebase';
import '../css/App.css';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

const Data = () => {
    const todoRef = firebase.database().ref('Todo');
    const [title, setTitle] = useState("");
    const [todoList, setTodoList] = useState();

    useEffect(() => {
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoArr = [];
            for (let id in todos) {
                todoArr.push({ id, ...todos[id] });
            }
            console.log(todoArr);
            setTodoList(todoArr);
        });
    }, []);

    const clearInput = () => {
        setTitle("");
    }

    const createTodo = () => {
        const todo = {
            title: title,
            complete: false
        };

        todoRef.push(todo);
        clearInput();
    };

    return (
        <div>
            <Form
                title={title}
                setTitle={setTitle}
                createTodo={createTodo}
                clearInput={clearInput}
            />
            <TodoList todoList={todoList} />
        </div>
    );
}

export default Data;