import { createAsyncThunk } from "@reduxjs/toolkit"


export const fetchTodo = createAsyncThunk('todo/fetchTodo', async () => {
    // dispatch(requestFiles);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => data)
    return response
})