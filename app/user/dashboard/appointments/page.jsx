"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AppointmentsPage() {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2024-12-05",
      time: "10:00 AM",
      status: "confirmed",
      amount: 500
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist", 
      date: "2024-12-08",
      time: "2:30 PM",
      status: "pending",
      amount: 400
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Appointments</h1>
          <p className="text-gray-600">Manage your doctor consultations</p>
        </div>

        <div className="grid gap-6">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{appointment.doctor}</h3>
                  <p className="text-gray-600">{appointment.specialty}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  appointment.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Date:</span>
                  <p className="font-medium">{appointment.date}</p>
                </div>
                <div>
                  <span className="text-gray-500">Time:</span>
                  <p className="font-medium">{appointment.time}</p>
                </div>
                <div>
                  <span className="text-gray-500">Amount:</span>
                  <p className="font-medium">₹{appointment.amount}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:underline text-sm">Reschedule</button>
                  <button className="text-red-600 hover:underline text-sm">Cancel</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/doctor"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book New Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}