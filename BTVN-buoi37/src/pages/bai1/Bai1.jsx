import React, { useState, useMemo, useCallback } from 'react';
import ProductItem from '../../component/ProductItem.jsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const products = [
    { id: 1, name: 'Áo thun thể thao', price: 350000, category: 'Áo', brand: 'Nike' },
    { id: 2, name: 'Quần jogger', price: 750000, category: 'Quần', brand: 'Adidas' },
    { id: 3, name: 'Nón lưỡi trai', price: 250000, category: 'Phụ kiện', brand: 'Puma' },
    { id: 4, name: 'Áo hoodie', price: 1200000, category: 'Áo', brand: 'Nike' },
];

function App()  {
    const navigate = useNavigate();
    const [filterPrice, setFilterPrice] = useState('Tất cả');
    const [filterCategory, setFilterCategory] = useState('Tất cả');
    const [filterBrand, setFilterBrand] = useState('Tất cả');

    const onPriceChange = useCallback((e) => {
        setFilterPrice(e.target.value);
    }, []);

    const onCategoryChange = useCallback((e) => {
        setFilterCategory(e.target.value);
    }, []);

    const onBrandChange = useCallback((e) => {
        setFilterBrand(e.target.value);
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchPrice =
                filterPrice === 'Tất cả' ||
                (filterPrice === '<500K' && product.price < 500000) ||
                (filterPrice === '500K-1M' && product.price >= 500000 && product.price <= 1000000) ||
                (filterPrice === '>1M' && product.price > 1000000);

            const matchCategory =
                filterCategory === 'Tất cả' || product.category === filterCategory;

            const matchBrand =
                filterBrand === 'Tất cả' || product.brand === filterBrand;

            return matchPrice && matchCategory && matchBrand;
        });
    }, [filterPrice, filterCategory, filterBrand]);

    return (
        <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
            <h2>Bài 1 Lọc sản phẩm</h2>

            <div style={{ marginBottom: 20 }}>
                <label>
                    Giá:
                    <select value={filterPrice} onChange={onPriceChange}>
                        <option value="Tất cả">Tất cả</option>
                        <option value="<500K">Dưới 500K</option>
                        <option value="500K-1M">500K - 1 triệu</option>
                        <option value=">1M">Trên 1 triệu</option>
                    </select>
                </label>

                <label style={{ marginLeft: 20 }}>
                    Loại:
                    <select value={filterCategory} onChange={onCategoryChange}>
                        <option value="Tất cả">Tất cả</option>
                        <option value="Áo">Áo</option>
                        <option value="Quần">Quần</option>
                        <option value="Phụ kiện">Phụ kiện</option>
                    </select>
                </label>

                <label style={{ marginLeft: 20 }}>
                    Thương hiệu:
                    <select value={filterBrand} onChange={onBrandChange}>
                        <option value="Tất cả">Tất cả</option>
                        <option value="Nike">Nike</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Puma">Puma</option>
                    </select>
                </label>
            </div>

            <h3> Danh sách sản phẩm:</h3>
            {filteredProducts.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
            <Button variant="contained" onClick={() => navigate('/bai2')} sx={{marginTop:10}}>
                Bài 2
            </Button>
            <Button variant="contained" onClick={() => navigate('/bai3')} sx={{marginTop:10, marginLeft:55}}>
                Bài 3
            </Button>
        </div>
    );
};

export default App;
