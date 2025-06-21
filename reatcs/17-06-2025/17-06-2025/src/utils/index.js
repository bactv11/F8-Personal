import api from '../plugins/api.js'
import { ToastContainer, toast } from 'react-toastify';
const get = async (endpoint) =>{
    try{
        const {data} = await api.get('endpoint')
        return data
    }catch(e){
        toast.error('get data failed')
    }
}
const post = async (endpoint,body) =>{
    try{
        const {data} = await api.get('employees',body)
        toast.error('save data success')
        return data
    }catch(e){
        toast.error('save data failed')
    }
    return null
}
const put = async (endpoint,body) =>{
    try{

    }catch(e){
        toast.error('put data failed')
    }
}
export default {
    get,post
}