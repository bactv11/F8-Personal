import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from './redux/actions';
import { Container, Typography, TextField, Button } from '@mui/material';
import ProductForm from './component/ProductForm.jsx';
import ProductList from './component/ProductList.jsx';
import DialogContainer from './component/dialog/DialogContainer.jsx';

const App = () => {
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const showDialog = (msg) => {
        setDialogMessage(msg);
        setDialogOpen(true);
    };

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" sx={{ my: 4 }}>
                Quản lý sản phẩm
            </Typography>

            <TextField
                fullWidth
                label="Tìm kiếm theo Tên hoặc ID"
                onChange={handleSearch}
                sx={{ mb: 2 }}
            />

            <Button variant="contained" onClick={() => {
                setEditProduct(null);
                setOpenForm(true);
            }}>
                Thêm sản phẩm
            </Button>

            <ProductForm
                open={openForm}
                onClose={() => setOpenForm(false)}
                product={editProduct}
                showDialog={showDialog}
            />

            <ProductList
                onEdit={(product) => {
                    setEditProduct(product);
                    setOpenForm(true);
                }}
                showDialog={showDialog}
            />

            <DialogContainer
                open={dialogOpen}
                message={dialogMessage}
                onClose={() => setDialogOpen(false)}
            />
        </Container>
    );
};

export default App;
