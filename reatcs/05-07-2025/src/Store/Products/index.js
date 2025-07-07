import api from "../plugins/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const { data } = await api.get('/products/');
    }
)
const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addNew: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log('reducer fulfilled', action.payload);
        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            console.log('reducer rejected', action.payload);
        })
    }
})
export default productsSlice
export const {addNew} = productsSlice.actions;
export {
    fetchProducts,
}