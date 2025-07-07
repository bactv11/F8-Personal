import { createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increase: (state) => {
            return state + 1;
        }
    }
})
export default countSlice;
//muon lay increase  ta export countSlice.actions
export const {increase} = countSlice.actions;