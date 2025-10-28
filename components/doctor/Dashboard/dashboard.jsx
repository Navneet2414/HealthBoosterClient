"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useGetDoctorAppointmentsQuery } from "@/lib/store/api/doctorApi";
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
  FaEye,
  FaPlay,
  FaUserMd,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { MdPendingActions, MdDashboard } from "react-icons/md";
import { BiCalendarCheck, BiUser, BiNotepad, BiTime } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
// import { P } from "framer-motion/dist/types.d-Cjd591yU";

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("Appointments");
  const { user } = useSelector((state) => state.auth);
  const { data: appointmentsData, isLoading: appointmentsLoading } = useGetDoctorAppointmentsQuery();

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
  const Card = ({ icon, label, value, color = "text-gray-800", bgGradient = "from-blue-50 to-green-50" }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className={`bg-gradient-to-br ${bgGradient} rounded-3xl shadow-xl text-center p-8 hover:shadow-2xl transition-all duration-300 border border-white/80 backdrop-blur-sm relative overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8"></div>
      <div className="relative z-10">
        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{icon}</div>
        <p className="text-gray-700 font-semibold text-sm uppercase tracking-wider mb-2">{label}</p>
        <p className={`text-4xl font-bold ${color} drop-shadow-sm`}>{value}</p>
      </div>
    </motion.div>
  );

  const stats = [
    {
      label: "Today's Appointments",
      value: appointmentsLoading ? "..." : (appointmentsData?.appointments?.filter(apt => {
        const today = new Date().toDateString();
        return new Date(apt.appointmentDate).toDateString() === today;
      })?.length || 0),
      icon: <BiCalendarCheck className="text-blue-600" />,
      bgGradient: "from-blue-50 to-blue-100",
      color: "text-blue-700"
    },
    {
      label: "Pending Consultations",
      value: appointmentsLoading ? "..." : (appointmentsData?.appointments?.filter(apt => 
        apt.status === 'pending' || apt.status === 'confirmed'
      )?.length || 0),
      icon: <BiTime className="text-green-600" />,
      bgGradient: "from-green-50 via-green-100 to-green-200",
      color: "text-green-700"
    },
    {
      label: "Total Patients",
      value: appointmentsLoading ? "..." : (appointmentsData?.appointments?.length || 0),
      icon: <BiUser className="text-green-600" />,
      bgGradient: "from-green-50 to-emerald-100",
      color: "text-green-700"
    },
    {
      label: "Prescriptions",
      value: appointmentsLoading ? "..." : (appointmentsData?.appointments?.filter(apt => apt.prescription)?.length || 0),
      icon: <BiNotepad className="text-green-600" />,
      bgGradient: "from-green-100 via-blue-50 to-blue-100",
      color: "text-green-700"
    },
  ];

  const appointments = appointmentsData?.appointments || [];

  return (
    <main className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto space-y-6"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 rounded-3xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative z-10 flex items-center gap-6">
            <div className="bg-white/20 p-5 rounded-3xl backdrop-blur-md border border-white/30">
              <FaUserMd className="text-4xl text-white drop-shadow-lg" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg flex items-center gap-3">
                <MdDashboard className="text-3xl" />
                Doctor Dashboard
              </h1>
              <p className="text-white/90 text-lg mt-2 font-medium">Welcome back, {user?.name || 'Doctor'}</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl shadow-2xl border-t-4 relative overflow-hidden" style={{borderImage: 'linear-gradient(to right, #3b82f6, #10b981) 1'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30"></div>
          <div className="relative z-10 flex space-x-2 border-b border-gray-200/50 px-6 pt-6 pb-2">
            {[
              { name: "Appointments", icon: <BiCalendarCheck className="text-lg" /> },
              { name: "Schedule", icon: <FaClock className="text-lg" /> },
              { name: "Patients", icon: <FaUsers className="text-lg" /> },
              { name: "Prescriptions", icon: <HiOutlineClipboardList className="text-lg" /> }
            ].map((tab, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.name
                      ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </motion.button>
              )
            )}
          </div>

          {/* Conditional Rendering for Tabs */}
          <div className="relative z-10 p-6">
            {activeTab === "Appointments" && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-xl">
                    <BiCalendarCheck className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Today's Appointments
                    </h2>
                    <p className="text-gray-600">
                      Manage your upcoming consultations
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-3xl p-6 border border-white/60">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr className="text-left text-gray-700 bg-white/80 backdrop-blur-sm">
                        <th className="py-4 px-6 font-semibold rounded-l-xl">
                          <div className="flex items-center gap-2">
                            <FaUsers className="text-blue-500" />
                            Patient
                          </div>
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-green-500" />
                            Time
                          </div>
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          <div className="flex items-center gap-2">
                            <FaVideo className="text-purple-500" />
                            Type
                          </div>
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-amber-500" />
                            Status
                          </div>
                        </th>
                        <th className="py-4 px-6 text-center font-semibold rounded-r-xl">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white/60 backdrop-blur-sm">
                      {appointments.map((appt, idx) => (
                        <motion.tr 
                          key={idx} 
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300 cursor-pointer"
                        >
                          <td className="py-4 px-6 font-medium text-gray-800">{appt.patientName || appt.patient}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{new Date(appt.appointmentDate).toLocaleTimeString() || appt.time}</td>
                          <td className="py-4 px-6">
                            <span
                              className={`flex items-center gap-2 text-sm px-3 py-2 rounded-xl font-medium ${
                                appt.type === "Online"
                                  ? "bg-green-100 text-green-700 border border-green-200"
                                  : "bg-orange-100 text-orange-700 border border-orange-200"
                              }`}
                            >
                              {appt.type === "Online" ? (
                                <FaVideo className="text-sm" />
                              ) : (
                                <FaClinicMedical className="text-sm" />
                              )}
                              {appt.type}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`text-sm px-4 py-2 rounded-xl font-semibold ${
                                appt.status === "confirmed"
                                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                                  : "bg-gray-100 text-gray-700 border border-gray-200"
                              }`}
                            >
                              {appt.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 flex gap-3 justify-center">
                            <Button variant="outline" className="flex items-center gap-2">
                              <FaEye className="text-sm" />
                              View
                            </Button>
                            <Button className="flex items-center gap-2">
                              <FaPlay className="text-sm" />
                              Start
                            </Button>
                          </td>
                        </motion.tr>
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
