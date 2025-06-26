import React, { useState, useRef } from 'react';

const API_URL = 'https://api-todolist-multiuser.onrender.com/Bac/todos';

function TodoForm({ setTodos }) {
    const [text, setText] = useState('');
    const inputRef = useRef();

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, completed: false }),
            });
            const newTodo = await res.json();

            setTodos(prev => [...prev, newTodo]);
            setText('');
            inputRef.current.focus();
        } catch (err) {
            console.error('Lỗi khi thêm todo:', err);
        }
    };

    return (
        <form className="add-todo" onSubmit={handleAdd}>
            <input
                ref={inputRef}
                type="text"
                className="todo-input"
                placeholder="What is the task today?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="add-btn">
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
