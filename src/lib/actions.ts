"use server"

import { revalidatePath } from "next/cache"
import { ClassSchema, SubjectSchema, TeacherSchema } from "./formValidation"
import prisma from "./prisma"
import { clerkClient } from "@clerk/clerk-sdk-node";



type currentState = {success: boolean; error: boolean};
export const createSubject = async(currentState: currentState, data: SubjectSchema) => {
  try {
    await prisma.subject.create({
      data:{
        name: data.name,
        teachers:{
          connect: data.teachers.map((teacherId) => ({id: teacherId}))
        }
      }
    });



    // revalidatePath("/list/subjects")
    return {success: true, error: false};
  } catch (error) {
    
    console.log(error);
   return {success: false, error: true};
    
  }
}




export const deleteSubject = async(currentState: currentState, data: FormData) => {

  const id = data.get("id") as string
  try {
    await prisma.subject.delete({
      where:{
        id: parseInt(id)
      },
      
    });



    // revalidatePath("/list/subjects")
    return {success: true, error: false};
  } catch (error) {
    
    console.log(error);
   return {success: false, error: true};
    
  }
}


export const updateSubject = async (
  currentState: currentState,
  data: SubjectSchema
) => {
  try {
    await prisma.subject.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        teachers:{
          set: data.teachers.map((teacherId) => ({id: teacherId}))
        }
        
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createClass = async(currentState: currentState, data: ClassSchema) => {
  try {
    await prisma.class.create({
      data
    });



    // revalidatePath("/list/subjects")
    return {success: true, error: false};
  } catch (error) {
    
    console.log(error);
   return {success: false, error: true};
    
  }
}

export const updateClass = async (
  currentState: currentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteClass = async(currentState: currentState, data: FormData) => {

  const id = data.get("id") as string
  try {
    await prisma.class.delete({
      where:{
        id: parseInt(id)
      },
      
    });



    // revalidatePath("/list/subjects")
    return {success: true, error: false};
  } catch (error) {
    
    console.log(error);
   return {success: false, error: true};
    
  }
}

export const createTeacher = async(currentState: currentState, data: TeacherSchema) => {
  
  try {

    
 const user =    await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata:{role: "teacher"}

    })

   
    await prisma.teacher.create({
      data:{
        id: user.id,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        img: data.img,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects: {
          connect: data.subjects?.map((subjectId: string) => ({
            id:parseInt(subjectId),
          }))
        }
      



      }
    });



    // revalidatePath("/list/subjects")
    return {success: true, error: false};
  } catch (error) {
    
    console.log(error);
   return {success: false, error: true};
    
  }
}

export const updateTeacher = async (
  currentState: currentState,
  data: TeacherSchema
) => {
  try {
    await prisma.teacher.update({
      where: {
        id: data.id,
      },
      data
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteTeacher = async(currentState: currentState, data: FormData) => {

  const id = data.get("id") as string
  try {
    await prisma.teacher.delete({
      where:{
        id: parseInt(id)
      },
      
    });



    // revalidatePath("/list/subjects")
    return {success: true, error: false};
  } catch (error) {
    
    console.log(error);
   return {success: false, error: true};
    
  }
}