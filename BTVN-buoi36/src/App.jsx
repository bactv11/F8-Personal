import React, { useEffect, useState } from 'react';
import TodoForm from './component/TodoForm.jsx';
import TodoList from './component/TodoList.jsx';
import { getTodos } from './utils/index.js';
import './App.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getTodos();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    return (
        <div className="container">
            <h1>Get Things Done!</h1>
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default TodoApp;

