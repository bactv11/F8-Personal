import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function ResultDialog({ open, score, total, onRestart }) {
    return (
        <Dialog open={open}>
            <DialogTitle>Kết quả</DialogTitle>
            <DialogContent>
                <Typography>Bạn đã trả lời đúng {score}/{total} câu.</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onRestart} variant="contained">
                    Làm lại
                </Button>
            </DialogActions>
        </Dialog>
    );
}
