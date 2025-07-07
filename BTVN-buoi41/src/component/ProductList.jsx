import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../redux/selectors';
import ProductRow from './ProductRow.jsx';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ProductList = ({ onEdit, showDialog }) => {
    const products = useSelector(selectFilteredProducts);

    return (
        <Table sx={{ my: 3 }}>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Tên sản phẩm</TableCell>
                    <TableCell>Giá bán (VNĐ)</TableCell>
                    <TableCell>Số lượng</TableCell>
                    <TableCell>Đơn vị</TableCell>
                    <TableCell>Hành động</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((p) => (
                    <ProductRow key={p.id} product={p} onEdit={onEdit} showDialog={showDialog} />
                ))}
            </TableBody>
        </Table>
    );
};

export default ProductList;
