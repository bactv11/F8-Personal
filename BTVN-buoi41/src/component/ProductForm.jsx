import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/actions';
import {
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
} from '@mui/material';

const ProductForm = ({ open, onClose, product, showDialog }) => {
    const [form, setForm] = useState({ name: '', price: '', quantity: '', unit: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        if (product) setForm(product);
        else setForm({ name: '', price: '', quantity: '', unit: '' });
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = product?.id || `p${Date.now()}`;
        const finalProduct = { ...form, id };

        if (product) {
            dispatch(updateProduct(finalProduct));
            showDialog('Cập nhật sản phẩm thành công!');
        } else {
            dispatch(addProduct(finalProduct));
            showDialog('Thêm sản phẩm thành công!');
        }

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{product ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        fullWidth
                        label="Tên sản phẩm"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Giá bán (VNĐ)"
                        type="number"
                        required
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Số lượng"
                        type="number"
                        required
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Đơn vị"
                        required
                        value={form.unit}
                        onChange={(e) => setForm({ ...form, unit: e.target.value })}
                        sx={{ mb: 2 }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Huỷ</Button>
                <Button onClick={handleSubmit} variant="contained" type="submit">
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductForm;
