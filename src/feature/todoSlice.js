import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./action";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {todo: [],
        status: 'idle',
        error: null
    },
    reducers: {
        AddData:(state, action) => {
                state.todo.push(action.payload)
    }
    },
    extraReducers(builder) {
        builder.addCase(fetchTodo.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchTodo.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.todo = state.todo.concat(action.payload) 
          })
      }
})
export const allData = state => {return state}
export const todoStatus = state => {return state.status}

export const { AddData } = todoSlice.actions
export default todoSlice.reducer