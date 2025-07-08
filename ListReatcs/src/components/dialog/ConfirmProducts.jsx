import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button
} from '@mui/material';

export default function ConfirmDialog({ open, onClose, onConfirm, message }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Xác nhận</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Huỷ</Button>
                <Button onClick={onConfirm} variant="contained" color="error">
                    Xoá
                </Button>
            </DialogActions>
        </Dialog>
    );
}
