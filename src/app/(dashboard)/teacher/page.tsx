import Announcement from "@/components/Announcement"
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer"
import { auth } from "@clerk/nextjs/server";





const TeacherPage = async({searchParams}:{searchParams: {[keys:string]:string | undefined};}) => {

  const {userId} = await auth()

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-full">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendarContainer type="teacherId" id={userId!} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalendarContainer searchParams={searchParams}/>
      <Announcement />
     
      </div>
 
      
    </div>
  )
}

export default TeacherPage