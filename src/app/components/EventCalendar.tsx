"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
// TEMPORARY
const events = [
  {
    id: 1,
    title: "Color Day Celebration",
    time: "9:00 AM - 12:00 PM",
    description: "Celebrate the vibrant and diverse colors of life with a day full of activities like painting, dress-up, and a parade. Let's bring color and joy to our community!",
  },
  {
    id: 2,
    title: "World Health Day",
    time: "10:00 AM - 1:00 PM",
    description: "Join us for health screenings, fitness activities, and awareness programs to promote a healthy lifestyle. Learn about the importance of mental and physical well-being.",
  },
  {
    id: 3,
    title: "Earth Day Cleanup",
    time: "8:00 AM - 12:00 PM",
    description: "Participate in a community-driven cleanup event to promote environmental awareness. Let's work together to reduce waste and protect our planet for future generations.",
  },

];


const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange ={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className="flex flex-col gap-4">
        {events.map(event=> (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Sky even:border-t-Purple"
           key={event.id}>
            <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">{event.title}</h1>
            <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
