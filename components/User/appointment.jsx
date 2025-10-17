"use client";

import { FaVideo, FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar, BsClock } from "react-icons/bs";

export default function AppointmentsPage() {
  const upcomingAppointments = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      date: "Today",
      time: "2:30 PM",
      type: "Video Consultation",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "In-person Visit",
      status: "Confirmed",
    },
  ];

  const pastAppointments = [
    {
      id: 1,
      name: "Dr. Amit Verma",
      specialty: "Orthopedic",
      date: "Dec 10, 2024",
      time: "4:00 PM",
      type: "In-person Visit",
      status: "Completed",
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Sneha Patel",
      specialty: "Pediatrician",
      date: "Dec 5, 2024",
      time: "11:30 AM",
      type: "Video Consultation",
      status: "Completed",
      rating: 4,
    },
  ];

  return (
    <div className=" bg-gray-50 flex flex-col items-center px-4 py-6">
      <div className="w-full ">
        {/* Upcoming Appointments */}
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          {upcomingAppointments.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} type="upcoming" />
          ))}
        </div>

        {/* Past Appointments */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Past Appointments</h2>
        <div className="space-y-4">
          {pastAppointments.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} type="past" />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppointmentCard({ appointment, type }) {
  const { name, specialty, date, time, status, rating, type: visitType } =
    appointment;

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        {/* Doctor Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xl">
          <span className="font-bold">👤</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 text-sm">{specialty}</p>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 flex-wrap">
            <span className="flex items-center gap-1">
              <BsCalendar /> {date}
            </span>
            <span className="flex items-center gap-1">
              <BsClock /> {time}
            </span>
            <span className="flex items-center gap-1">
              {visitType.includes("Video") ? <FaVideo /> : <MdOutlineLocationOn />}
              {visitType}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <StatusBadge status={status} />

        {type === "upcoming" ? (
          <>
            <button className="border border-blue-400 text-blue-500 px-3 py-1 rounded-md text-sm hover:bg-blue-50">
              Reschedule
            </button>
            <button className="bg-gradient-to-r from-blue-400 to-green-500 text-white px-3 py-1 rounded-md text-sm">
              Join Call
            </button>
          </>
        ) : (
          <>
            <RatingStars rating={appointment.rating} />
            <button className="border border-blue-400 text-blue-500 px-3 py-1 rounded-md text-sm hover:bg-blue-50">
              Book Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors =
    status === "Confirmed" || status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors}`}
    >
      {status}
    </span>
  );
}

function RatingStars({ rating }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, idx) =>
        idx < rating ? (
          <FaStar key={idx} className="text-yellow-400" />
        ) : (
          <FaRegStar key={idx} className="text-yellow-400" />
        )
      )}
    </div>
  );
}
