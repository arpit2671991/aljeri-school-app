"use client"


import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [

{
        name: 'Sun',
        present: 50,
        absent: 0,
       
},
  {
    name: 'Mon',
    present: 40,
    absent: 10,
  },
  {
    name: 'Tue',
    present: 45,
    absent: 5,
  },
  {
    name: 'Wed',
    present: 50,
    absent: 0,
  },
  {
    name: 'Thu',
    present: 30,
    absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
          {/* Title */}
          <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='more' width={20} height={20} />
        </div>
        {/* Chart */}
        <div className='w-full h-full'>
        <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
        barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#9d9a99"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#9d9a99"}} tickLine={false}/>
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}} />
          <Bar dataKey="present" fill="#C3EBFA"  legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AttendanceChart