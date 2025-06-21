import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function ({isOpen,setIsOpen,children}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>

            {/*noi dung*/}
            <DialogContent>
                {children}
            </DialogContent>

            {/*dieu huong*/}
            <DialogActions>
                <Button color={'error'} variant={'outlined'} onClick={() => setIsOpen(false)}>Close</Button>
                <Button color={'info'} variant={'outlined'} >Save</Button>
            </DialogActions>
        </Dialog>
    )
}