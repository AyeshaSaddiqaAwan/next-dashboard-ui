import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
  const session = await auth(); // Await auth to get userId properly
  const userId = session?.userId;

  if (!userId) {
    return <p className="p-4 text-red-500">Unauthorized: Please log in.</p>;
  }

  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: userId } },
    },
  });

  if (!classItem.length) {
    return <p className="p-4 text-gray-500">No class schedule available.</p>;
  }

  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
