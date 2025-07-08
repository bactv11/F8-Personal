import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';

export default function ContactTable({ contacts, onEdit, onDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Tên</TableCell>
                        <TableCell>Tuổi</TableCell>
                        <TableCell>Địa chỉ</TableCell>
                        <TableCell>Hành động</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>
                                <Button variant="outlined" onClick={() => onEdit(row)} sx={{ mr: 1 }}>
                                    Sửa
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => onDelete(row.id)}>
                                    Xoá
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {contacts.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} align="center">Không tìm thấy kết quả.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
