import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from '@mui/material';

const ConfirmDialog = ({ open, title, content, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title || 'Xác nhận'}</DialogTitle>
            <DialogContent>
                <Typography>{content || 'Bạn có chắc chắn muốn thực hiện thao tác này?'}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Huỷ</Button>
                <Button onClick={onConfirm} color="error" variant="contained">
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
