import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from '@mui/material';

function ConfirmDialog({ open, title, content, onClose, onConfirm }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                {content}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={onConfirm} color="error" variant="contained">
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
