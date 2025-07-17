import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Products from './components/Pages/Products.jsx';

// Khai báo router
const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />,
    },
    {
        path: "/products",
        element: <Products />,
    },
]);

// Render
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
