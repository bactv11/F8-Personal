import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions';
import { TableRow, TableCell, Button } from '@mui/material';
import ConfirmDialog from './dialog/ConfirmDialog.jsx';

const ProductRow = ({ product, onEdit, showDialog }) => {
    const dispatch = useDispatch();
    const [confirmOpen, setConfirmOpen] = useState(false);

    const handleDelete = () => {
        dispatch(deleteProduct(product.id));
        showDialog('Xoá sản phẩm thành công!');
    };

    return (
        <>
            <TableRow>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.unit}</TableCell>
                <TableCell>
                    <Button onClick={() => onEdit(product)} size="small">Sửa</Button>
                    <Button onClick={() => setConfirmOpen(true)} color="error" size="small">Xoá</Button>
                </TableCell>
            </TableRow>

            <ConfirmDialog
                open={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={() => {
                    handleDelete();
                    setConfirmOpen(false);
                }}
                title="Xác nhận xoá"
                content={`Bạn có chắc chắn muốn xoá sản phẩm "${product.name}" không?`}
            />
        </>
    );
};

export default ProductRow;
