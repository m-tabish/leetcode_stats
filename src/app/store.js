import { configureStore } from "@reduxjs/toolkit"
import { prevUserSlice } from "./prevUsers/prevUserSlice"


export const store = configureStore({
    reducer: prevUserSlice,
})