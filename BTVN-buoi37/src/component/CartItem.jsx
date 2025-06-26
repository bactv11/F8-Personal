import React from 'react';

const CartItem = React.memo(({ item, onIncrease, onDecrease, onRemove }) => {
    console.log('🔄 Rendering:', item.name);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
            border: '1px solid #ddd',
            borderRadius: 6,
            marginBottom: 12
        }}>
            <div>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: 13, color: '#666' }}>
                    Số lượng: {item.quantity}
                </div>
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button
                    disabled={item.quantity <= 1}
                    onClick={() => onDecrease(item.id)}
                >-</button>
                <button style={{ color: 'red' }} onClick={() => onRemove(item.id)}>
                    Xóa
                </button>
            </div>
        </div>
    );
});

export default CartItem;
