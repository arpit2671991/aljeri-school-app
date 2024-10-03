import Announcement from "@/components/Announcement"
import EventCalender from "@/components/EventCalender"


const StudentPage = () => {
  return (
    <div className=" p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalender />
      <Announcement />
      </div>
    </div>
  )
}

export default StudentPage