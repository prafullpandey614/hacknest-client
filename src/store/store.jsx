import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/index.jsx"
const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store;