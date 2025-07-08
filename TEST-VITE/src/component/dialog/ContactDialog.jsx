import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button
} from '@mui/material';

export default function ContactDialog({ open, onClose, onSubmit, contact, mode }) {
    const [form, setForm] = useState({ name: '', age: '', address: '' });

    useEffect(() => {
        setForm(contact);
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: name === 'age' ? parseInt(value) || '' : value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(form);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{mode === 'add' ? 'Thêm mới' : 'Sửa'} liên hệ</DialogTitle>
            <DialogContent>
                <TextField
                    label="Tên"
                    name="name"
                    fullWidth
                    margin="dense"
                    value={form.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Tuổi"
                    name="age"
                    type="number"
                    fullWidth
                    margin="dense"
                    value={form.age}
                    onChange={handleChange}
                />
                <TextField
                    label="Địa chỉ"
                    name="address"
                    fullWidth
                    margin="dense"
                    value={form.address}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Huỷ</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    {mode === 'add' ? 'Thêm' : 'Lưu'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
