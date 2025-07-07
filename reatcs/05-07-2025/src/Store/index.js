import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./Count/index.js";

const store = configureStore({
    reducer: {
        count: countSlice.reducer
    }
})
export {
    store
}
export * from '../Store/Count'
export * from '../Store/Products'