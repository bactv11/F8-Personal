import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-todolist-multiuser.onrender.com',
    timeout: 1000,
    headers: {
        'Content-Type': "application/json"
    }
})

// Các functions gọi API
export const contactsAPI = {

    getAll: () => api.get('/Bac/contacts'),

    create: (contactData) => api.post('/Bac/contacts', contactData),

    update: (id, contactData) => api.put(`/Bac/contacts/${id}`, contactData),
    
    delete: (id) => api.delete(`/Bac/contacts/${id}`),
}

export default api