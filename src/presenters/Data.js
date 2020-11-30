import React, { useEffect, useState } from 'react';
import fire from "../util/firebase";
import '../css/App.css';
import Form from '../view/Form';
import TodoList from '../view/TodoList';

const Data = () => {
    const [title, setTitle] = useState("");
    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = fire.database().ref('Todo');
        let isSubscribed = true;
        if(isSubscribed){
            todoRef.on('value', (snapshot) => {
                const todos = snapshot.val();
                const todoArr = [];
                for (let id in todos) {
                    todoArr.push({ id, ...todos[id] });
                }
                setTodoList(todoArr);
                console.log("todoArr: ");
                console.log(todoArr);
            });
        }
        return () => isSubscribed = false;
    }, []);

    const clearInput = () => {
        setTitle("");
    }

    const createTodo = () => {
        const todoRef = fire.database().ref('Todo');
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