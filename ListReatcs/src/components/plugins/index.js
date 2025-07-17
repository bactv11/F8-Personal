import axios from "axios"
const BaseURL= "http://localhost:3000/products";

//get
export const getProducts = async () =>{
    const res = await axios.get(`${BaseURL}`)
    return res.data;
}
export const addProducts = async () =>{
    const res = await  axios.post(`${BaseURL}`)
    return res.data;
}
export const updateroducts = async () =>{
    const res = await axios.put(`${BaseURL}/${id}`)
    return res.data;
}
export const deleteProducts = async () =>{
    const res = await axios.delete(`${BaseURL}/${id}`);
    return res.data;
}
