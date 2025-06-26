import React, { useState, useCallback } from 'react';
import CartItem from '../../component/CartItem.jsx';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function App() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([
        { id: 1, name: 'Áo thun', quantity: 1 },
        { id: 2, name: 'Quần jeans', quantity: 2 },
        { id: 3, name: 'Nón lưỡi trai', quantity: 1 },
    ]);

    const onIncrease = useCallback((id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }, []);

    const onDecrease = useCallback((id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }, []);

    const onRemove = useCallback((id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }, []);

    return (
        <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}> Giỏ hàng</h2>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                />
            ))}
            <Button variant="contained" onClick={() => navigate('/bai1')} sx={{marginTop:10}}>
                Bài 1
            </Button>
            <Button variant="contained" onClick={() => navigate('/bai2')} sx={{marginTop:10, marginLeft:55}}>
                Bài 2
            </Button>
        </div>
    );
}

export default App;

