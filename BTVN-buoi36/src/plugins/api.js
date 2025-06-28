import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api-todolist-multiuser.onrender.com/Bac',
});

export default axiosInstance;