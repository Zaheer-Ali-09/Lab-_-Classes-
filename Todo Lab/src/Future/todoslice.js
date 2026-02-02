import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: "Todo",
    initialState: {
        task: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter((task, index) => index !== action.payload);
        }
    }
});

export const { addTask, deleteTask } = todoslice.actions;
export default todoslice.reducer;