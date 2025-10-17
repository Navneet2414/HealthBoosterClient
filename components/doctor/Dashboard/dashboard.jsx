"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Schedule from "@/components/doctor/Dashboard/schedule";
import PatientRecord from "@/components/doctor/Dashboard/patientRecord";
import Prescriptions from "@/components/doctor/Dashboard/prescriptions";

import {
  FaCalendarAlt,
  FaUserClock,
  FaUsers,
  FaPrescriptionBottleAlt,
  FaVideo,
  FaClinicMedical,
} from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
// import { P } from "framer-motion/dist/types.d-Cjd591yU";

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("Appointments");

  // ✅ Reusable Button Component
  const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles =
      "px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 shadow";
    const variants = {
      primary:
        "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:scale-105 hover:shadow-lg",
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow",
    };

    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  // ✅ Reusable Card Component
  const Card = ({ icon, label, value, color = "text-gray-800" }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/90 rounded-2xl shadow-lg text-center p-6 hover:shadow-xl transition-all border border-white/40 backdrop-blur"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-gray-600">{label}</p>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </motion.div>
  );

  const stats = [
    {
      label: "Today's Appointments",
      value: 12,
      icon: <FaCalendarAlt className="text-blue-500" />,
    },
    {
      label: "Pending Consultations",
      value: 3,
      icon: <MdPendingActions className="text-yellow-500" />,
    },
    {
      label: "Total Patients",
      value: 156,
      icon: <FaUsers className="text-green-500" />,
    },
    {
      label: "Prescriptions",
      value: 8,
      icon: <FaPrescriptionBottleAlt className="text-purple-500" />,
    },
  ];

  const appointments = [
    { patient: "John Doe", time: "10:00 AM", type: "Online", status: "confirmed" },
    { patient: "Jane Smith", time: "11:30 AM", type: "In-clinic", status: "confirmed" },
    { patient: "Mike Johnson", time: "2:00 PM", type: "Online", status: "pending" },
  ];

  return (
    <main className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto space-y-6"
      >
        {/* Header */}
        <div className="text-center md:text-left bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-white drop-shadow">
            Doctor Dashboard
          </h1>
          <p className="text-white/90">Welcome back, Dr. Sarah Wilson</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-gradient-to-r from-blue-500 to-green-500" style={{borderImage: 'linear-gradient(to right, #3b82f6, #10b981) 1'}}>
          <div className="flex space-x-6 border-b px-6 pt-4">
            {["Appointments", "Schedule", "Patients", "Prescriptions"].map(
              (tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Conditional Rendering for Tabs */}
          <div className="p-6">
            {activeTab === "Appointments" && (
              <>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Today's Appointments
                </h2>
                <p className="text-gray-500 mb-4">
                  Manage your upcoming consultations
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="text-left text-gray-600">
                        <th className="py-2 px-4">Patient</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Type</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {appointments.map((appt, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="py-3 px-4">{appt.patient}</td>
                          <td className="py-3 px-4">{appt.time}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                                appt.type === "Online"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {appt.type === "Online" ? (
                                <FaVideo className="text-xs" />
                              ) : (
                                <FaClinicMedical className="text-xs" />
                              )}
                              {appt.type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-3 py-1 rounded-full ${
                                appt.status === "confirmed"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {appt.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 flex gap-2 justify-center">
                            <Button variant="outline">View</Button>
                            <Button>Start</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === "Schedule" && (
              <>
                {/* <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Weekly Schedule
                </h2>
                <p className="text-gray-500 mb-4">
                  Manage your availability and time slots
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Available Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Break Times</h3>
                    <p className="text-sm text-gray-600">Lunch: 1:00 PM - 2:00 PM</p>
                    <p className="text-sm text-gray-600">Tea Break: 4:00 PM - 4:15 PM</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button>Update Schedule</Button>
                </div> */}
                <Schedule/> 
              </>
            )}

            {activeTab === "Patients" && (
              <>
                <PatientRecord/>
              </>
            )}

            {activeTab === "Prescriptions" && (
              <>
               <Prescriptions/>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
