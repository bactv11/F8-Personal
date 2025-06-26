import React from 'react';

const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + ' VND';
};

const ProductItem = React.memo(({ product }) => {
    return (
        <div style={{
            padding: '10px 0',
            borderBottom: '1px solid #ddd'
        }}>
            {product.name} - {formatPrice(product.price)} - {product.category} - {product.brand}
        </div>
    );
});

export default ProductItem;
