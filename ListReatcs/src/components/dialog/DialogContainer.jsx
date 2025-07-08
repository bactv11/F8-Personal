import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function DialogContainer({ open, onClose, onSubmit, model, product }) {
    const [form, setForm] = useState({ name: '', categoryId: '', orderNum: '' });

    useEffect(() => {
        if (product) {
            setForm(product);
        } else {
            setForm({ name: '', categoryId: '', orderNum: '' });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]:
                type === 'number' || name === 'categoryId'
                    ? parseInt(value, 10) || ''
                    : value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(form);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{model === 'add' ? 'Thêm mới' : 'Sửa'} Sản phẩm</DialogTitle>
            <DialogContent>
                <TextField
                    label="Tên sản phẩm"
                    name="name"
                    fullWidth
                    margin="dense"
                    value={form.name ?? ''}
                    onChange={handleChange}
                />
                <TextField
                    label="Danh mục"
                    name="categoryId"
                    type="text"
                    fullWidth
                    margin="dense"
                    value={form.categoryId ?? ''}
                    onChange={handleChange}
                />
                <TextField
                    label="Số lượng"
                    name="orderNum"
                    type="text"
                    fullWidth
                    margin="dense"
                    value={form.orderNum ?? ''}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Huỷ</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    {model === 'add' ? 'Thêm' : 'Lưu'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
