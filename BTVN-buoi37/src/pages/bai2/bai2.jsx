import React, { useState } from 'react';
import UserItem from '../../component/UserItem.jsx';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const users = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' },
];

function App() {
    const navigate = useNavigate();
    const [point, setPoint] = useState(0);

    const onIncrease = () => {
        setPoint(prev => prev + 1);
    };

    return (
        <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
            <h2> Bài 2 Danh sách người dùng</h2>

            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}

            <div style={{ marginTop: '20px' }}>
                <p>Điểm hiện tại: <strong>{point}</strong></p>
                <button onClick={onIncrease}>Count</button>
            </div>

            <Button variant="contained" onClick={() => navigate('/bai1')} sx={{marginTop:10}}>
                Bài 1
            </Button>
            <Button variant="contained" onClick={() => navigate('/bai3')} sx={{marginTop:10, marginLeft:55}}>
                Bài 3
            </Button>
        </div>
    );
}

export default App;


