import React, { useState } from 'react';

const API_URL = 'https://api-todolist-multiuser.onrender.com/Bac/';

function TodoItem({ todo, setTodos }) {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const toggleComplete = async () => {
        try {
            await fetch(`${API_URL}/${todo.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !todo.completed }),
            });

            setTodos(prev =>
                prev.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t)
            );
        } catch (err) {
            console.error('Lỗi khi cập nhật trạng thái:', err);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`${API_URL}/${todo.id}`, {
                method: 'DELETE',
            });
            setTodos(prev => prev.filter(t => t.id !== todo.id));
        } catch (err) {
            console.error('Lỗi khi xoá:', err);
        }
    };

    const handleEdit = async () => {
        try {
            await fetch(`${API_URL}/${todo.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: editText }),
            });

            setTodos(prev =>
                prev.map(t => t.id === todo.id ? { ...t, text: editText } : t)
            );
            setEditing(false);
        } catch (err) {
            console.error('Lỗi khi sửa:', err);
        }
    };

    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />

            {editing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
                />
            ) : (
                <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                </div>
            )}

            {editing ? (
                <button className="edit-btn" onClick={handleEdit}>OK</button>
            ) : (
                <button className="edit-btn" onClick={() => setEditing(true)}>Sửa</button>
            )}
            <button className="del-btn" onClick={handleDelete}>Xóa</button>
        </div>
    );
}

export default TodoItem;
