import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function DialogContainer({ open, message, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Thông báo</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="primary">Đóng</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogContainer;
