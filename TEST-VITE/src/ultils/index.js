import axios from 'axios';

const API_URL = 'https://api-todolist-multiuser.onrender.com/Bac/contacts';

export const getContacts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const addContact = async (contact) => {
    const res = await axios.post(API_URL, contact);
    return res.data;
};

export const updateContact = async (id, contact) => {
    const res = await axios.put(`${API_URL}/${id}`, contact);
    return res.data;
};

export const deleteContact = async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
};
