import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prevUser: [{}],
}

export const prevUserSlice = createSlice({
    name: "prevUser",
    initialState,
    reducer: {
        addUserReducer: (state, action) => {
            const addUser_Function = {
                enteredName: state.payload
            }
            state.addUser.push(addUser_Function);
        }
    }
})
export const { addUser_Function } = prevUserSlice.actions;
export default prevUserSlice.reducer;