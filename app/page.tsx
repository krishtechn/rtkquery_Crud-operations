"use client"
import Image from 'next/image'
import Signup from './Components/SignupFormwithController';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './redux/TodoListSlice';
import { AppDispatch } from './redux/store';

export default function Home() {
  interface datatype{

  }
  const data = useSelector((state?:any) => state.todolistSlice.data);
  const dispatch = useDispatch<AppDispatch>();   
  return (
      <>
        <h1>hello world</h1>
        {/* <Signup />   */}
        <button onClick={()=>dispatch(fetchTodos())}>fetch todos</button>

        {data && data.map((items?:any)=>{
          return <div>
            <h1>{items.userId}</h1>
            <h1>{items.title}</h1>
            <h1>{items.completed}</h1>
          </div>
        })}
      </>
  )
}
