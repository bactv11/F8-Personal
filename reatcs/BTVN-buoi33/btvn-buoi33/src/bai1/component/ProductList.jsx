import React from 'react';
import ProductItem from './ProductItem.jsx';

function ProductList({ prdList }) {
    return (
        <div>
            {prdList.map(productE => (
                <ProductItem key={productE.id} name={productE.name} price={productE.price} />
            ))}
        </div>
    );
}

export default ProductList;
