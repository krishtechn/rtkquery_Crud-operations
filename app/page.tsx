"use client"
import Image from 'next/image'
import Signup from './Components/SignupFormwithController';
import { useSelector, useDispatch } from 'react-redux'
import { useDeleteProductsMutation, useGetAllProductsQuery, useUpdateProductsMutation } from './redux/apiServices/product';
import { showText, showUserData,showRecord, updateRecord } from './redux/showTextSlice';

export default function Home() {
 const  {data, isLoading,isError,error} =  useGetAllProductsQuery('');
 let dispatch = useDispatch();
 const [deleteProduct,response] = useDeleteProductsMutation();

 const [
  updatePost, 
  result
] = useUpdateProductsMutation();
  const datas = useSelector((state?:any) => state.showtext.text);
  const udata = useSelector((state?:any)=>state.showtext.userdata);
  const adddata = useSelector((state?:any)=>state.showtext.studentrecord);
  const updatedata = useSelector((state?:any)=>state.showtext.updateRecord);

  console.log(updatedata);

  if(isLoading){
    return(
      <h1>loading...</h1>
    )
  }
  
  if(isError){
    return(
      <h1>something went wrong</h1>
    )
  }
  return (
      <>
      <h1>{datas}</h1>
      <div>
        {udata && <h1>{udata.name} {udata.lname} from {udata.address}</h1>}
      </div>

      {adddata && adddata.map((items?:any,index?:number)=>{
        return <p key={index}>{items}</p>;
      })}


      <button className='bg-indigo-700 text-white shadow capitalize' onClick={()=>dispatch(showText("hello i am krish"))}>showhello world</button>
      <button className='bg-indigo-700 text-white shadow capitalize' onClick={()=>dispatch(showUserData({name:"krish",address:"waling-13 bayatari",lname:"kharal"}))}>showhello world</button>
      <button className='bg-indigo-700 text-white shadow capitalize' onClick={()=>dispatch(showRecord(["hello world","data","dfdkfkd"]))}>Add Data</button>
      <button className='bg-indigo-700 text-white shadow capitalize' onClick={()=>dispatch(updateRecord(1))}>update Data</button>

        {data && data.map((items?:any,index?:number)=>{
          return <div key={index} className='flex justify-between items-center text-white p-4 text-[13px]'>
             <h1 className='font-bold'>{items.id} </h1>
            <h1>{items.price} </h1>
            <h1>{items.title} </h1>
            <h1 className='line-clamp-1'>{items.desc} </h1>
            <h1>{items.createdAt} </h1>
            <button onClick={()=>deleteProduct(index)} className='bg-indigo-700 text-white shadow capitalize'>delete products</button>
          </div>
        })}
      </>
  )
}
