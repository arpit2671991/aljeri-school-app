"use client"



import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const AttendanceChart = ({data}: {data:{name:string, present:number, absent:number}[]
}) => {
  return (
   
     
       
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
      
  
  )
}

export default AttendanceChart