import { z } from "zod";

export const subjectSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string()
    .min(1, {message: 'Subject name is required!'}),
    teachers: z.array(z.string())
})

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string()
    .min(1, {message: 'Subject name is required!'}),
    capacity: z.coerce.number()
    .min(1, {message: 'Capacity is required!'}),
    gradeId: z.coerce.number()
    .min(1, {message: 'Grade is required!'}),
    supervisorId: z.coerce.string().optional()
   
})

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
    username: z.string()
    .min(3, {message: 'username must be atleast 3 charecters long!'})
    .max(20, {message: 'maximum 20 charecters allowed!'}),
    password: z.string().min(8, {message: "password must be 8 cheracters long!"}),
    name: z.string().min(3, {message: "firstname is required!"}),
    surname: z.string().min(3, {message: "lastname is required!"}),
    email: z.string().email({message: 'invalid email address!'}).optional().or(z.literal("")),
    phone: z.string().optional(),
    address: z.string(),
    birthday: z.coerce.date({message: "date of birth is required!"}),
    sex: z.enum(["MALE", "FEMALE"], {message: "please choose male or female!"}),
    img: z.string().optional(),
    bloodType: z.string(),
    subjects: z.array(z.string()).optional(),



})

export type TeacherSchema = z.infer<typeof teacherSchema>

