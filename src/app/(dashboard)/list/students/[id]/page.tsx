import Announcement from '@/components/Announcement'
import Performance from '@/components/Performance'
import BigCalendar from '@/components/BigCalendar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SingleStudentPage = () => {

 
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      {/* Left */}
      <div className='w-full xl:w-2/3'>
        {/* Usercard Info */}
        {/* top */}
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='bg-sky py-6 px-4 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
              <Image src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" alt='' width={144} height={144} className='w-36 h-36 rounded-full object-cover' />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
            <h1 className='text-xl font-semibold'>Cameron Moran</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
              <div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
                <Image src="/blood.png" alt='' width={14} height={14} />
                <span>A+</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
                <Image src="/date.png" alt='' width={14} height={14} />
                <span>January 2025</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
                <Image src="/mail.png" alt='' width={14} height={14} />
                <span>user@gmail.com</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
                <Image src="/phone.png" alt='' width={14} height={14} />
                <span>+1 234 456</span>
              </div>
            </div>
            </div>
          </div>
          <div className='flex-1 flex gap-4 justify-between flex-wrap'>
            {/* Card */}
            <div className=' bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
              <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6' />
              <h1 className='text-xl font-semibold'>90%</h1>
              <span className='text-sm text-gray-600'>Attendance</span>
            </div>
            <div className=' bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
              <Image src="/singleClass.png" alt='' width={24} height={24} className='w-6 h-6' />
              <h1 className='text-xl font-semibold'>6</h1>
              <span className='text-sm text-gray-600'>Classes</span>
            </div>
            <div className=' bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
              <Image src="/singleLesson.png" alt='' width={24} height={24} className='w-6 h-6' />
              <h1 className='text-xl font-semibold'>7</h1>
              <span className='text-sm text-gray-600'>Lessions</span>
            </div>
            <div className=' bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
              <Image src="/singleBranch.png" alt='' width={24} height={24} className='w-6 h-6' />
              <h1 className='text-xl font-semibold'>2</h1>
              <span className='text-sm text-gray-600'>Branches</span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar  />
        </div>
      </div>
      {/* Right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <div className='bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Shortcurs</h1>
          <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
            <Link href={`/list/lessons?classId=${2}`} className='p-3 rounded-md bg-skyLight'> Student&apos;s Lessons</Link>
            <Link href={`/list/teachers?classId=${2}`} className='p-3 rounded-md bg-PurpleLight'>Student&apos;s Teachers</Link>
            <Link href={`/list/exams?classId=${2}`}  className='p-3 rounded-md bg-YellowLight'>Student&apos;s Exams</Link>
            <Link href={`/list/assignments?classId=${2}`}  className='p-3 rounded-md bg-pink-50'>Student&apos;s Assignments</Link>
            <Link href={`/list/results?studentId=${"student2"}`}  className='p-3 rounded-md bg-PurpleLight'> Student&apos;s Results</Link>
            
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  )
}

export default SingleStudentPage