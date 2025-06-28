import React, { useState } from 'react';
import { addTodo } from '../utils/index.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoForm({ setTodos }) {
    const [input, setInput] = useState('');

    const onAddTodo = async (e) => {
        e.preventDefault();
        if (input === '') {
            toast.error('Vui lòng không để trống!');
            return;
        }
        try {
            const newTodo = await addTodo({ text: input, completed: false });
            setTodos(prev => [...prev, newTodo]);
            setInput('');
            focus()
            toast.success(' thêm thành công!');
        } catch (err) {
            alert('Thêm thất bại!');
            console.error(err);
        }
    }
    return (
        <form className="add-todo" onSubmit={onAddTodo}>
            <input
                type="text"
                className="todo-input"
                placeholder="What is the task today?"
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="add-btn">
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
