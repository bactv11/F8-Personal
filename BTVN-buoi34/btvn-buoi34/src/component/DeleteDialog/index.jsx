import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import App from "../../App.jsx";

export default function ({isOpen, setIsOpen}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTitle>DELETE</DialogTitle>
            <DialogContent>
                <span>XOA nhan vien nay khong ?</span>
            </DialogContent>
        </Dialog>
    )
}