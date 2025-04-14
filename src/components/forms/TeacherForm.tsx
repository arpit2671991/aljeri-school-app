"use client"





import { zodResolver } from '@hookform/resolvers/zod';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../Input';
import Image from 'next/image';
import { teacherSchema, TeacherSchema } from '@/lib/formValidation';
import { useFormState } from 'react-dom';
import { createTeacher, updateTeacher } from '@/lib/actions';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { CldUploadWidget } from 'next-cloudinary';




const TeacherForm = ({
  type, setOpen, 
  data, 
  relatedData 
}:{
  type:"create" | "update"; 
  setOpen: Dispatch<SetStateAction<boolean>>; 
  data?: any; 
  relatedData?: any }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TeacherSchema>({
        resolver: zodResolver(teacherSchema),
      });

      const [img, setImg] = useState<any>()

      const [state, formAction] = useFormState(
        type === "create" ? createTeacher : updateTeacher,
        {
          success: false,
          error: false,
        }
      );

      const onSubmit = handleSubmit(data => {
        console.log(data)
        formAction({...data, img:img?.secure_url})
      })
      const router  = useRouter()
      useEffect(() => {
        if(state.success){
          toast(`Teacher has been ${type === "create" ? "added!" : "updated."}`)
          setOpen(false)
          router.refresh();
        }
      }, [state, router, setOpen])

      const {subjects} = relatedData 

     
  return (
  <form className='flex flex-col gap-8 w-full' onSubmit={onSubmit}>
    <h1 className='text-xl font-semibold'>{type === "create" ? "Add new teacher" : "Update teacher details"}</h1>
    <span className='text-xs text-gray-500 font-medium'>login details</span>
    <div className='flex justify-between flex-wrap gap-4'>
    <InputField label='username' name='username' defaultValue={data?.username} register={register} error={errors?.username} />
    <InputField label='email' type='email' name='email' defaultValue={data?.email} register={register} error={errors?.email} />
    <InputField label='password' type='password' name='password' defaultValue={data?.password} register={register} error={errors?.password} />
    </div>
    <span className='text-xs text-gray-500 font-medium'>personal details</span>
    <div className='flex justify-between flex-wrap gap-4'>
    <InputField label='name' name='name' defaultValue={data?.name} register={register} error={errors?.name} />
    <InputField label='surname'  name='surname' defaultValue={data?.surname} register={register} error={errors?.surname} />
    <InputField label='address' name='address' defaultValue={data?.address} register={register} error={errors?.address} />
    <InputField label='date of birth' type='date' name='birthday' defaultValue={data?.birthday} register={register} error={errors?.birthday} />
    <InputField label='Blood Group'  name='bloodType' defaultValue={data?.bloodType} register={register} error={errors?.bloodType} />
    <div className='flex flex-col gap-2 w-full md:w-1/4'>
    <label className='text-sm text-gray-600'>gender</label>
    <select className='ring-[1.5px] ring-gray-400 p-2 rounded-md text-sm w-full' {...register("sex")} defaultValue={data?.sex}>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
    </select>
    {errors?.sex?.message && <p className='text-xs text-red-600 '>{errors?.sex.toString()}</p>}
   
    </div>
    <div className='flex flex-col gap-2 w-full md:w-1/4'>
    <label className='text-sm text-gray-600'>Subjects</label>
    <select className='ring-[1.5px] ring-gray-400 p-2 rounded-md text-sm w-full' {...register("subjects")} defaultValue={data?.subjects} multiple>
      {subjects.map((subject:{id: number; name: string; }) => (
        <option  value={subject.id} key={subject.id}>{subject.name}</option>
      ))}
        
       
    </select>
    {errors?.subjects?.message && <p className='text-xs text-red-600 '>{errors?.subjects.message.toString()}</p>}
   
    </div>
    
  <CldUploadWidget uploadPreset="school" onSuccess={(result, {widget}) => {setImg(result.info), widget.close()}}>
  {({ open }) => {
    return (
      <div className='text-sm text-gray-600 flex items-center gap-2 cursor-pointer' onClick={() => open()}>
        <Image src="/upload.png" alt='upload' width={28} height={28} />
        <span>upload image</span>
    </div>
    );
  }}
</CldUploadWidget>


    </div>
    {state.error && (
      <span className='text-red-500'>Something went wrong!</span>
    )}
    
    <button className='bg-blue-500 text-white p-2 rounded-md'>{type==="create" ? "Add": "update"}</button>
  </form>
  )
}

export default TeacherForm