import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import App from "../../App.jsx";

export default function ({isOpen, setIsOpen}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTitle>DELETE</DialogTitle>
            <DialogContent>
                <span>XOA khong ?</span>
            </DialogContent>
        </Dialog>
    )
}