"use client";

import { FaVideo, FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar, BsClock } from "react-icons/bs";
import { useAuth } from "../../lib/hooks/useAuth";
import { useGetUserAppointmentsQuery } from "../../lib/store/api/userApi";

export default function AppointmentsPage() {
  const { user, isAuthenticated } = useAuth();
  const userId = user?.id;
  
  const { data, isLoading, error } = useGetUserAppointmentsQuery(userId, {
    skip: !userId
  });

  if (!isAuthenticated || !userId) return <div className="text-center py-8">Please log in to view appointments</div>;
  if (isLoading) return <div className="text-center py-8">Loading appointments...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading appointments</div>;

  const { today = [], upcoming = [], past = [] } = data?.bookings || {};

  return (
    <div className=" bg-gray-50 flex flex-col items-center px-4 py-6">
      <div className="w-full ">
        {/* Upcoming Appointments */}
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          {today.length > 0 && (
            <>
              <h3 className="text-lg font-medium text-gray-700">Today</h3>
              {today.map((appt) => (
                <AppointmentCard key={appt._id} appointment={appt} type="today" />
              ))}
            </>
          )}
          {upcoming.length > 0 ? (
            <>
              <h3 className="text-lg font-medium text-gray-700">Upcoming</h3>
              {upcoming.map((appt) => (
                <AppointmentCard key={appt._id} appointment={appt} type="upcoming" />
              ))}
            </>
          ) : (
            !today.length && <p className="text-gray-500">No upcoming appointments</p>
          )}
        </div>

        {/* Past Appointments */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Past Appointments</h2>
        <div className="space-y-4">
          {past.length > 0 ? (
            past.map((appt) => (
              <AppointmentCard key={appt._id} appointment={appt} type="past" />
            ))
          ) : (
            <p className="text-gray-500">No past appointments</p>
          )}
        </div>
      </div>
    </div>
  );
}

function AppointmentCard({ appointment, type }) {
  const { 
    doctorName, 
    specialization, 
    appointmentDate, 
    appointmentTime, 
    status, 
    rating, 
    consultationType,
    paymentStatus ,
    patientName,
    patientAge
  } = appointment;

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        {/* Doctor Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xl">
          <span className="font-bold">👤</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">{doctorName}</h3>
          <p className="text-blue-600 text-sm">{specialization}</p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Patient:</span> {patientName} • 
            <span className="font-medium">Age:</span> {patientAge}
          </p>
          
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 flex-wrap">
            <span className="flex items-center gap-1">
              <BsCalendar /> {appointmentDate}
            </span>
            <span className="flex items-center gap-1">
              <BsClock /> {appointmentTime}
            </span>
            <span className="flex items-center gap-1">
              {consultationType.includes("Video") ? <FaVideo /> : <MdOutlineLocationOn />}
              {consultationType}
            </span>
          </div>
          {paymentStatus === "unpaid" && (
            <span className="text-red-500 text-xs mt-1 block">Payment Pending</span>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <StatusBadge status={status} />

        {(type === "upcoming" || type === "today") ? (
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
  const colors = {
    confirmed: "bg-green-100 text-green-700",
    completed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700"
  }[status.toLowerCase()] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
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
