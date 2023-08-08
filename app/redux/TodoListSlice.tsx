import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    isloading:false,
    data:null,
    isError:false
};


export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let json = await response.json();
    return json;
});

export const counterSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=> {
      builder.addCase(fetchTodos.pending,(state,action)=>{
        state.isloading = true;
      });
      builder.addCase(fetchTodos.fulfilled,(state,action)=>{
        state.isloading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchTodos.rejected,(state,action)=>{
        state.isError = false;
      });
    },
})

export default counterSlice.reducer