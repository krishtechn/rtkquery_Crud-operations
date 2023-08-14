"use client"
import Image from 'next/image'
import Signup from './Components/SignupFormwithController';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './redux/TodoListSlice';
import { AppDispatch } from './redux/store';
import { useDeleteProductsMutation, useGetAllProductsQuery } from './redux/apiServices/product';

export default function Home() {
 const  {data, isLoading,isError,error} =  useGetAllProductsQuery('')
 const [deleteProduct,response] = useDeleteProductsMutation()
  // const data = useSelector((state?:any) => state.todolistSlice.data);
  // const dispatch = useDispatch<AppDispatch>();   
  // console.log(data);

  if(isLoading){
    return(
      <h1>loading...</h1>
    )
  }

  
  if(isError){
    console.log(error)
    return(
      <h1>something went wrong</h1>

    )
  }
  return (
      <>
        <h1>hello world</h1>
        
        {/* <Signup />   */}
        <button onClick={()=>deleteProduct(5)}>delete products</button>

        {data && data.map((items?:any,index?:number)=>{
          return <div key={index}>
             <h1>{items.id} </h1>
            <h1>{items.price} </h1>
            <h1>{items.title} </h1>
            <h1>{items.desc} </h1>
            <h1>{items.createdAt} </h1>
          </div>
        })}
      </>
  )
}
