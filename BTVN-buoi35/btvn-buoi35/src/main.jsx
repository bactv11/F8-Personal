
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './App.jsx'
import Post from './Component/Post.jsx'
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('access');
    if (!token) {
        window.location.href = '/';
        return null;
    }
    return children;
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/post"
                    element={
                        <ProtectedRoute>
                            <Post />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)