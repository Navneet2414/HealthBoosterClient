"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function ManageSchedule() {
  const onlineSlots = [
    { day: "Monday", time: "9:00 AM - 1:00 PM" },
    { day: "Tuesday", time: "2:00 PM - 6:00 PM" },
  ];

  const clinicSlots = [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 4:00 PM" },
  ];

  // ✅ Reusable Slot Card
  const SlotCard = ({ day, time }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border border-gray-200 bg-white rounded-xl px-4 py-2 shadow-sm text-gray-700"
    >
      <span className="font-semibold">{day}:</span> {time}
    </motion.div>
  );

  // ✅ Reusable Add Button
  const AddSlotButton = ({ onClick }) => (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
      onClick={onClick}
    >
      <FaPlus className="text-sm" /> Add Time Slot
    </motion.button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
    >
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800">Manage Schedule</h2>
      <p className="text-gray-500 text-sm mb-6">
        Set your availability for online and in-clinic consultations
      </p>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Online Slots */}
        <div>
          <h3 className="text-md font-semibold text-gray-700 mb-3">
            Online Consultation Slots
          </h3>
          <div className="space-y-3 mb-3">
            {onlineSlots.map((slot, idx) => (
              <SlotCard key={idx} {...slot} />
            ))}
          </div>
          <AddSlotButton onClick={() => alert("Add Online Slot")} />
        </div>

        {/* In-Clinic Slots */}
        <div>
          <h3 className="text-md font-semibold text-gray-700 mb-3">
            In-Clinic Availability
          </h3>
          <div className="space-y-3 mb-3">
            {clinicSlots.map((slot, idx) => (
              <SlotCard key={idx} {...slot} />
            ))}
          </div>
          <AddSlotButton onClick={() => alert("Add Clinic Slot")} />
        </div>
      </div>
    </motion.div>
  );
}
