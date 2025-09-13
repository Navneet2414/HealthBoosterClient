"use client";

import { motion } from "framer-motion";

export default function PersonalInfo() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 98765 43210",
    dob: "January 15, 1990",
    bloodGroup: "O+",
    emergencyContact: "+91 98765 43211",
    profileImage:
      "https://ui-avatars.com/api/?name=John+Doe&background=random&size=128",
  };

  return (
    <div className="bg-gray-50 flex justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full border rounded-2xl shadow-md p-8"
      >
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-8">
          Personal Information
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-start gap-8">
          {/* Profile Image + Button */}
          <div className="flex flex-col items-center sm:items-start">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={user.profileImage}
              alt={user.name}
              className="w-28 h-28 rounded-full border-2 border-gray-200 object-cover shadow-sm"
            />
            <button className="mt-4 px-4 py-2 text-sm bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-lg shadow hover:opacity-90 hover:scale-105 transition-all">
              Change Photo
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 flex-1">
            <InfoField label="Full Name" value={user.name} />
            <InfoField label="Email" value={user.email} />
            <InfoField label="Phone" value={user.phone} />
            <InfoField label="Date of Birth" value={user.dob} />
            <InfoField label="Blood Group" value={user.bloodGroup} />
            <InfoField label="Emergency Contact" value={user.emergencyContact} />
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-2.5 rounded-lg shadow hover:opacity-90 hover:scale-105 transition-all">
            Edit Profile
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function InfoField({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
      <p className="text-gray-900 font-semibold mt-0.5">{value}</p>
    </div>
  );
}
