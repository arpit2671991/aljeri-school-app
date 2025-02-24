"use client"




import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../Input';
import { subjectSchema, SubjectSchema } from '@/lib/formValidation';
import { createSubject } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';




const SubjectForm = ({type, data, }:{type:"create" | "update"; data?: any; }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<SubjectSchema>({
        resolver: zodResolver(subjectSchema),
      });

      const [state, formAction] = useFormState(createSubject, {success:false, error:false})

      const onSubmit = handleSubmit(data => {
        console.log(data)
        formAction(data)
      })

      useEffect(() => {
        if(state.success){
          toast(`Subject has been ${type === "create" ? "added!" : "updated."}`)
        }
      }, [state])
  return (
  <form className='flex flex-col gap-8 w-full' onSubmit={onSubmit}>
    <h1 className='text-xl font-semibold'>{type === "create" ? "Add Subject" : "Update Subject"}</h1>
   
    <div className='flex justify-between flex-wrap gap-4'>
    <InputField label='Subject name' name='name' defaultValue={data?.name} register={register} error={errors?.name} />
    </div>
    {state.error && <span className='text-red-500'>Something went wrong!</span>}
   
    <button className='bg-blue-500 text-white p-2 rounded-md'>{type==="create" ? "Add": "update"}</button>
  </form>
  )
}

export default SubjectForm