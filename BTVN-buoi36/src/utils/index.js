import axios from '../plugins/api.js';

// GET
export const getTodos = async () => {
    const response = await axios.get('/todos');
    return response.data;
};

// POST
export const addTodo = async (todo) => {
    const response = await axios.post('/todos', todo);
    return response.data;
};

// PUT
export const updateTodo = async (id, updates) => {
    const response = await axios.put(`/todos/${id}`, updates);
    return response.data;
};

// DELETE
export const deleteTodo = async (id) => {
    await axios.delete(`/todos/${id}`);
};
