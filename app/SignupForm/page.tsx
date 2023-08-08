"use client"
import React,{useState} from 'react'
import { useForm,SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/TodoListSlice';
import { AppDispatch } from '../redux/store';

interface Userinput  {
    firstName:String,
    lastName:String,
    gender:String,
}

enum GenderEnum {
  female="female",
  male="male",
  other="other"
}

const SignupForm = () => {
  const data = useSelector((state?:any) => state.todolistSlice.data);
  const dispatch = useDispatch<AppDispatch>();   
    const [userdata,setuserdata] = useState<Userinput>({
        firstName:"",
        lastName:"",
        gender:"",
    });
    
    const {register,handleSubmit,formState:{errors},} = useForm<Userinput>();
    const onSubmit: SubmitHandler<Userinput> = (data) => {
      alert(JSON.stringify(data))
    }
  return (
    <div className='flex justify-center items-center flex-col h-screen  w-full'>
       <form onSubmit={handleSubmit((data)=>setuserdata(data))} className='mt-5 w-[300px] shadow-2xl py-4 px-5'>
        <h1 className='text-center mb-6'>SignupForm</h1>
         <input {...register("firstName",{ pattern: /^[A-Za-z]+$/i })} type='text' className='border py-1 px-5 rounded-full mt-4'/>
         {errors.firstName && <p className='text-red-700 font-semibold ml-1'>First name is required.</p>}
         <input {...register('lastName',{required:true})} type='text' className='border py-1 px-5 rounded-full mt-4'/>
         {errors.lastName && <p className='text-red-700 font-semibold ml-1'>Last name is required.</p>}
         <select {...register("gender")} className='boerder py-1 px-5 rounded-full mt-4 w-full'>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
        </select>
         <button className='bg-indigo-700 border-none outline-none w-full py-2 mt-5 rounded-full text-white' onSubmit={()=>dispatch(fetchTodos())}>Submit</button>
       </form>
        
        <p>Hello {userdata.firstName} {userdata.lastName} your gender {userdata.gender}</p>
        
        {data && data.map((items?:any)=>{
          console.log(items);
          return <div>
            <h1>{items.userId}</h1>
            <h1>{items.title}</h1>
            <h1>{items.completed}</h1>
          </div>
        })}
   </div>
  )
}

export default SignupForm