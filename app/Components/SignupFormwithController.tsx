"use client"
import React from "react";
import ReactDOM from "react-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { add,remove } from "../redux/UserdataSlice";
// import "./styles.css";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url()
});

function SignupFormwithController() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  
  const showdata = useSelector((state: RootState) => state.userdata);
  // const showtext = useSelector((state)=>state.text);
  console.log(showdata);

  const dispatch = useDispatch();
  const onSubmit = (data?:any) => {
      // dispatch(udata(data));
      dispatch(add({firstName:data.firstName,lastName:data.lastName,age:data.age,website:data.website}));
      // console.log(data);
  }

  let HandleDelete = (id:number)=>{
     dispatch(remove(id));
     alert(id);
  }
    
  return (<>
    <form onSubmit={handleSubmit(onSubmit)} className="shadow">
      <div>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            placeholder="First Name"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
          )}
          name="firstName"
      />
       {errors.firstName && <p>This is required.</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div className="w-full">
        <label>select your Country</label>
        <select defaultValue={"select your country"} onSelect={(e)=>console.log(e)}>
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
        </select>
      </div>

      <div>
        <label>Website</label>
        <input {...register("website")} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>

      <input type="submit" />
    </form>

    <div className="w-[900px] mt-[100px] mx-auto">
      {showdata && showdata.map((items?:any,index?:number)=>{
        return <div className="flex justify-between items-center mx-auto">
            <h1 className="text-white">{items.firstName}</h1>
            <h1 className="text-white">{items.lastName}</h1>
            <h1 className="text-white">{items.age}</h1>
            <h1 className="text-white">{items.website}</h1>
            <button className="bg-indigo-700 text-white rounded-full" onClick={()=>HandleDelete(index)}>Delete</button>
          </div>
      })}
    </div>
    </>
  );
}

export default SignupFormwithController;