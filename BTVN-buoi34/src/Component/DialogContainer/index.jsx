import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from '@mui/material';
import { useState } from 'react';

const DialogEmployee = ({open, openDialog, closeDialog, setEmployees}) => {
    const [validate, setValidate] = useState({
        name: '',
        age: '',
        address: ''
    });

    const onChangeI = (e) => {
        const { id, value } = e.target;
        setValidate(employee => ({
            ...employee,
            [id]: value
        }));
    };

    const onSubmitE = () => {
        if (!validate.name || !validate.age || !validate.address) {
            alert('Khong de trong phan nay!');
            return;
        }
        setEmployees(employee => [...employee,
            {
                id: employee.length + 1,
                ...validate,
                age: parseInt(validate.age)
            }
        ]);

        // reset form
        setValidate({
            name: '',
            age: '',
            address: ''
        });
        closeDialog();
    };

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
            }}>
                <div style={{ flex: 1 }}></div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="outlined"
                        onClick={openDialog}
                    >
                        Add New
                    </Button>
                </div>
            </div>

            <Dialog
                open={open}
                maxWidth="sm"
                fullWidth
                onClose={closeDialog}
            >
                <DialogTitle sx={{fontWeight:600, fontSize:'18px', textAlign:'center'}}>
                    Add Employee
                </DialogTitle>
                <DialogContent>
                    <TextField
                        sx={{margin:'10px 0'}}
                        fullWidth
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={validate.name}
                        onChange={onChangeI}
                    />
                    <TextField
                        sx={{margin:'10px 0'}}
                        fullWidth
                        id="age"
                        type="number"
                        label="Age"
                        variant="outlined"
                        value={validate.age}
                        onChange={onChangeI}
                    />
                    <TextField
                        sx={{margin:'10px 0'}}
                        fullWidth
                        id="address"
                        label="Address"
                        variant="outlined"
                        value={validate.address}
                        onChange={onChangeI}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Hủy</Button>
                    <Button variant="contained" color="primary" onClick={onSubmitE}>
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DialogEmployee;