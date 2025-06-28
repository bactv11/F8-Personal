import {useEffect, useState} from "react";
import {get, post} from "../../utils/index.js";
import {EmployeeDialog, FTable} from "../../conponent/index.js";
import {Button,DialogContent, DialogTitle, Dialog, TextField, DialogActions} from "@mui/material";
import DeleteDialog from "../../conponent/DeleteDialog/index.jsx";


const initEmployee = {
    id: null, name: null, age: null, address: null
}

function Empolyees() {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [isOpenDialogDelete, setIsOpenDialogDelete] = useState(false)

    const [curEmployee, setCurEmployee] = useState({
        id: null, name: null, age: null, address: null
    })
    const [employees, setEmployee] = useState([])

    const columns = [
        { name: 'id', text: 'Id'},
        { name: 'name', text: 'Name'},
        { name: 'age', text: 'Age'},
        { name: 'address', text: 'Address'},
        { name: 'action', text: ''},
    ]

    const getEmployee = async () => {
        const data = await get('employees')
        if (data) setEmployee(data)
    }
    const toBody = (employee) =>{
        return {
            name: employee.name,
            age: employee.age,
            address: employee.address,
        }
    }

    const onEdit = (employee) => {
        const newEmployee = { ...employee }
        setCurEmployee(newEmployee)
        console.log('test', newEmployee)
        setIsOpenDialog(true)
    }
    const onCreate = () => {
        setCurEmployee(initEmployee)
        setIsOpenDialog(true)
    }

    const onSave = async (employee) => {
        if (employee.id) {

        }else await post('employees', toBody(employee))
        //
        await getEmployee()
    }

    console.log('reload main screen')

    useEffect(() => {
        getEmployee()
    },[])
    return (
        <>
            <FTable columns={columns} rows={employees} onEdit={onEdit}/>
            <Button variant="outlined" onClick={onCreate}>Add new</Button>
            <EmployeeDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
                employee={curEmployee}
                setEmployee={setCurEmployee}
                onSave={onSave}
            />
            <DeleteDialog isOpen={isOpenDialogDelete} setIsOpen={setIsOpenDialogDelete}/>
        </>
    )
}

export default Empolyees
