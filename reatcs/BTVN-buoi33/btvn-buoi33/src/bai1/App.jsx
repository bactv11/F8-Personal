import React, { useState } from 'react';
import { ProductList } from './component';

function App() {
    const [products] = useState([
        { id: 1, name: 'Áo thun', price: 150000 },
        { id: 2, name: 'Quần jean', price: 300000 },
        { id: 3, name: 'Giày thể thao', price: 500000 },
    ]);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ProductList prdList={products} />
        </div>
    );
}

export default App;
