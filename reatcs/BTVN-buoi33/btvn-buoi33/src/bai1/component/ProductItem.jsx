import React from 'react';

function ProductItem({ name, price }) {
    return (
        <div style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
            <strong>{name}</strong>: {price.toLocaleString('vi-VN')} VND
        </div>
    );
}

export default ProductItem;
