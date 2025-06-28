import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Bai1 from './pages/bai1/Bai1.jsx';
import Bai2 from './pages/bai2/bai2.jsx';
import Bai3 from './pages/bai3/bai3.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/bai1" />} />
                <Route path="/bai1" element={<Bai1 />} />
                <Route path="/bai2" element={<Bai2 />} />
                <Route path="/bai3" element={<Bai3 />} />
            </Routes>
        </Router>
    );
}

export default App;
