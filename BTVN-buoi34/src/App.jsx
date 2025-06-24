import {Table,DialogEmployee,DialogEditE} from './Component';
import './App.css';
import {useState} from "react";

function App() {
    const [open, setOpen] = useState(false); // Thêm state quản lý dialog
    const [openEdit, setOpenEdit] = useState(false);
    const [Employee, setEmployee] = useState(null);

    const columns = [
        {name: 'id', text: 'ID'},
        {name: 'name', text: 'Name'},
        {name: 'age', text: 'Age'},
        {name: 'address', text: 'Address'},
        {name: 'action', text: 'Action'}
    ]
    const [employees,setEmployees] = useState([
        { id: 1, name: 'Nguyen Van A', age: 20, address: 'Bắc Ninh' },
        { id: 2, name: 'Le Van B', age: 21, address: 'Hà Nội' },
        { id: 3, name: 'Tran Van C', age: 22, address: 'Hà Giang' },

    ]);

    //open Dialog
    const onOpenDialog = () => setOpen(true);
    const onCloseE = () => setOpen(false);


    // edit
    const onEditE = (employee) => {
        setEmployee(employee);
        setOpenEdit(true);
    };

    const onCloseEditE = () => {
        setOpenEdit(false);
        setEmployee(null);
    };

    const onUpdateE= (updatedEmployee) => {
        setEmployees(e =>
            e.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp)
        );
        onCloseEditE();
    };

    // delete
    const onDeleteE = (id) => {
        alert('ban co chac chan muon xoa?')
        setEmployees(emps => emps.filter(emp => emp.id !== id));
    };

    return (
        <div>
            <DialogEmployee
                columns={columns}
                employees={employees}
                setEmployees={setEmployees}
                open={open}
                openDialog={onOpenDialog}
                closeDialog={onCloseE}

            />
            <DialogEditE
                open={openEdit}
                onClose={onCloseEditE}
                employee={Employee}
                onUpdate={onUpdateE}

            />
            <Table
                columns={columns}
                employees={employees}
                onDelete={onDeleteE}
                onEdit={onEditE}
            />
        </div>
    );
}

export default App;