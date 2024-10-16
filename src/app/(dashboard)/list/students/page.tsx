import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData} from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Student = {
  id: number,
  studentId: string,
  name: string,
  email?: string,
  photo: string,
  phone?: string,
  grade: number,
  class: string,
  address: string,

}

const columns = [
  {
    header: "Info", accesor: "info"
  },
  {
    header: "Student ID", 
    accesor: "studentId", 
    className:"hidden md:table-cell"
  },
  {
    header: "Grade", 
    accesor: "grade", 
    className:"hidden md:table-cell"
  },
  {
    header: "Class Room", 
    accesor: "class", 
    className:"hidden md:table-cell"
  },
  {
    header: "Phone", 
    accesor: "phone", 
    className:"hidden lg:table-cell"
  },
  {
    header: "Address", 
    accesor: "address", 
    className:"hidden lg:table-cell"
  },
  {
    header: "Actions", 
    accesor: "actions" 
  },

]
const StudentsListPage = () => {


  const renderRow = (item:Student) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt='' width={40} height={40} className='md:hidden xl:block w-10 h-10 rounded-full object-cover' />
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item.class}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.studentId}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item?.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className='flex items-center gap-2'>
          <Link href={`/list/teachers/${item.id}`}>
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-sky'>
              <Image src="/view.png" alt='' width={16} height={16} />
            </button>
          </Link>
            {role === "admin" && <button className='w-7 h-7 flex items-center justify-center rounded-full bg-Purple'>
              <Image src="/delete.png" alt='' width={16} height={16} />
            </button>}
        </div>
      </td>
    </tr>
  )
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
         {/* top */}
    <div className='flex items-center justify-between'>
      <h1 className='hidden md:block text-lg font-semibold w-full'>All Students</h1>
   
      <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
        <TableSearch />
        <div className='flex items-center gap-4 self-end'>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-Yellow'>
            <Image src="/filter.png" alt='filter' width={14} height={14}  />
          </button>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-Yellow'>
            <Image src="/sort.png" alt='filter' width={14} height={14}  />
          </button>
          {role === "admin" && <button className='w-8 h-8 flex items-center justify-center rounded-full bg-Yellow'>
            <Image src="/plus.png" alt='filter' width={14} height={14}  />
          </button>}
        </div>
      </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={studentsData}/>
    {/* Pagination */}
    <Pagination />
    </div>
  )
}

export default StudentsListPage