import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// const initialState:any = {
//     firstName:"",
//     lastName:"",
//     age:"",
//     website:""
// }

const initialState:any = [];

// let initialState={
//    text:"hello world"
// };

export const counterSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    // udata:(state,action)=>{
    //     // console.log(action.payload);
    //     // console.log(state);
    //     // state.push(action.payload);
    //     // state.firstName = action.payload.firstName;
    //     // state.lastName = action.payload.lastName;
    //     // state.age = action.payload.age;
    //     // state.website = action.payload.website;
    //     return state;
    // },
    add(state,action){
      state.push(action.payload);
    },
    remove(state,action){
       state = state.filter((items:any)=>items.id !== action.payload)  
       return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { add,remove } = counterSlice.actions
export default counterSlice.reducer