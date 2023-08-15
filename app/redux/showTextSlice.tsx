import { createSlice } from '@reduxjs/toolkit'

const initialState:any = {
  text:"",
  userdata:{},
  studentrecord:[]
}

export const showTextSlice = createSlice({
  name: 'showTextSlice',
  initialState,
  reducers: {
    showText:(state,action)=>{
        state.text = action.payload;
    },
    showUserData:(state,action)=>{
      state.userdata = action.payload;
    },
    showRecord:(state,action)=>{
      state.studentrecord.push(...action.payload);
    },
    updateRecord:(state,action)=>{
      return state.studentrecord.filter((item?:any)=>item.id !== action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { showText,showUserData,showRecord,updateRecord } = showTextSlice.actions
export default showTextSlice.reducer