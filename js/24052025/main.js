import {Employee} from './employee.js'
const employes =[]
const createEmployee = ({id,name,address}) => {
    employes.push(new Employee(id,name,address))
}
createEmployee({id:1, name:'John', address:'example'})
//dùng for laasy ra các phần tử
for (const emp of employes) {
    console.log(emp.toString())
}
