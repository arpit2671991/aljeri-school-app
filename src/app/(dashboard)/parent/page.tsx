import Announcement from "@/components/Announcement"
import BigCalendarContainer from "@/components/BigCalendarContainer"
import EventCalendarContainer from "@/components/EventCalendarContainer";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"




const ParentPage = async({searchParams}:{searchParams: {[keys:string]:string | undefined};}) => {

  const {userId} = await auth();
  const currentUserId = userId;

  const students = await prisma.student.findMany({
    where:{
      parentId: currentUserId!,
    }
  })
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="flex flex-col justify-between  gap-4 w-full ">
        {students.map((student) => (
            <div className="w-full xl:w-2/3" key={student.id}>
            <div className="h-full bg-white rounded-md p-4">
              <h1 className="text-xl font-semibold">Schedule ({student.name + " " + student.surname})</h1>
              <BigCalendarContainer type="classId" id={student.classId} />
            </div>
          </div>
        ))}
      </div>
      
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalendarContainer searchParams={searchParams}/>
      <Announcement />
      
      </div>
    </div>
  )
}

export default ParentPage