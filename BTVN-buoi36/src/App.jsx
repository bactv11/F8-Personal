import React, { useEffect, useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import './App.css';

const API_URL = 'https://api-todolist-multiuser.onrender.com/Bac/todos';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setTodos(data);
            } catch (err) {
                console.error('Lỗi khi tải todo:', err);
            }
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
