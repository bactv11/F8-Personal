import { Button } from "@mui/material";
import TableProducts from "../Table/TableProducts.jsx";
import {useEffect, useState} from "react";
import DialogContainer from "../dialog/DialogContainer.jsx";
import ConfirmDialog from "../dialog/ConfirmProducts.jsx";
import {addProducts, getProducts, updateroducts} from "../plugins/index.js";

function Products() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogModel, setDialogModel] = useState('add');
    const [currentProduct, setCurrentProduct] = useState({ name: '', categoryId: '', orderNum: '' });
    const [products, setProducts] = useState([]);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            setProducts(data);
        }
        fetchData();
    }, []);

    const handleAdd = () => {
        setCurrentProduct({ name: '', categoryId: '', orderNum: '' });
        setDialogModel('add');
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
        setConfirmOpen(false);
    };

    const handleSubmit = async (data) => {
        if (!data.name || !data.categoryId || !data.orderNum) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (dialogModel === 'add') {
            await addProducts(data);
        } else {
            await updateroducts(data.id, data);
        }
        setDialogOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="success" onClick={handleAdd}>
                Thêm mới
            </Button>

            <TableProducts products={products} />

            <DialogContainer
                open={dialogOpen}
                onClose={handleClose}
                onSubmit={handleSubmit}
                model={dialogModel}
                product={currentProduct}
            />

            <ConfirmDialog
                open={confirmOpen}
                onClose={handleClose}
                message="Bạn có chắc muốn xoá liên hệ này không?"
            />
        </div>
    );
}

export default Products;
