import {createBrowserRouter} from 'react-router'
import Employees from "../pages/Employees/index.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/employees",
        element: <Employees/>
    },
]);
export default router;