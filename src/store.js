import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileSlice"
export default configureStore({
    reducer : {
        profile : profileReducer
    }
})