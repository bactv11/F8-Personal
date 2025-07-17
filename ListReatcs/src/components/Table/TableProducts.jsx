import {useEffect, useState} from "react";
import {getProducts} from "../plugins/index.js";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function TableProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            setProducts(data);
        }
        fetchData();
    }, []);
    const onEdit = (id) => {

    }
    const onDelete = (id) => {

    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Tên SP</TableCell>
                        <TableCell>Danh Mục</TableCell>
                        <TableCell>Số lượng</TableCell>
                        <TableCell>Thao Tác</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.categoryId}</TableCell>
                            <TableCell>{product.orderNum}</TableCell>
                            <TableCell>
                                <Button variant="outlined" onClick={() => onEdit(product)} sx={{ mr: 1 }}>
                                    Sửa
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => onDelete(product.id)}>
                                    Xoá
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
