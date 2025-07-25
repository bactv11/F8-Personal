import {configureStore} from "@reduxjs/toolkit";
import contactsReducer  from "../component/contactsSlice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
});

export default store;