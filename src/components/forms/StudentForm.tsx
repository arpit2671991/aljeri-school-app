"use client"

const schema = z.object({
    username: z.string()
    .min(3, {message: 'username must be atleast 3 charecters long!'})
    .max(20, {message: 'maximum 20 charecters allowed!'}),
    email: z.string().email({message: 'invalid email address!'}),
    password: z.string().min(8, {message: "password must be 8 cheracters long!"}),
    firstname: z.string().min(3, {message: "firstname is required!"}),
    lastname: z.string().min(3, {message: "lastname is required!"}),
    phone: z.string().min(7, {message: "phone number is required!"}),
    address: z.string().min(3, {message: "address is required!"}),
    dob: z.date({message: "date of birth is required!"}),
    gender: z.enum(["Male", "Female"], {message: "please choose male or female!"}),
    img: z.instanceof(File, {message: "please upload the image"})


})



import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../Input';
import Image from 'next/image';

type Inputs = z.infer<typeof schema>;


const StudentForm = ({type, data, }:{type:"create" | "update"; data?: any; }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>({
        resolver: zodResolver(schema),
      });

      const onSubmit = handleSubmit(data => {
        console.log(data)
      })
  return (
  <form className='flex flex-col gap-8 w-full' onSubmit={onSubmit}>
    <h1 className='text-xl font-semibold'>add new student</h1>
    <span className='text-xs text-gray-500 font-medium'>login details</span>
    <div className='flex justify-between flex-wrap gap-4'>
    <InputField label='username' name='username' defaultValue={data?.username} register={register} error={errors?.username} />
    <InputField label='email' type='email' name='email' defaultValue={data?.email} register={register} error={errors?.email} />
    <InputField label='password' type='password' name='password' defaultValue={data?.password} register={register} error={errors?.password} />
    </div>
    <span className='text-xs text-gray-500 font-medium'>personal details</span>
    <div className='flex justify-between flex-wrap gap-4'>
    <InputField label='firstname' name='firstname' defaultValue={data?.firstname} register={register} error={errors?.firstname} />
    <InputField label='lastname'  name='lastname' defaultValue={data?.lastname} register={register} error={errors?.lastname} />
    <InputField label='address' name='address' defaultValue={data?.address} register={register} error={errors?.address} />
    <InputField label='date of birth' type='date' name='dob' defaultValue={data?.dob} register={register} error={errors?.dob} />
    <div className='flex flex-col gap-2 w-full md:w-1/4'>
    <label className='text-sm text-gray-600'>gender</label>
    <select className='ring-[1.5px] ring-gray-400 p-2 rounded-md text-sm w-full' {...register("gender")} defaultValue={data?.gender}>
        <option value="male">male</option>
        <option value="female">female</option>
    </select>
    {errors?.gender?.message && <p className='text-xs text-red-600 '>{errors?.gender.toString()}</p>}
   
    </div>
    <div className='flex flex-col gap-2 w-full md:w-1/4 justify-center'>
    <label className='text-sm text-gray-600 flex items-center gap-2 cursor-pointer' htmlFor='img'>
        <Image src="/upload.png" alt='upload' width={28} height={28} />
        <span>upload image</span>
    </label>
    <input type='file' {...register("img")} className='hidden' id='img' />
    {errors?.img?.message && <p className='text-xs text-red-600 '>{errors?.img.toString()}</p>}
   
    </div>
    </div>
    
    <button className='bg-blue-500 text-white p-2 rounded-md'>{type==="create" ? "Add": "update"}</button>
  </form>
  )
}

export default StudentForm