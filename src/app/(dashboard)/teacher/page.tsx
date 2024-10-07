import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"




const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
     
      <Announcement />
      </div>
    </div>
  )
}

export default TeacherPage