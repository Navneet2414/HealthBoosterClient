// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function PatientRecords() {
//   const [patients] = useState([
//     {
//       name: "John Doe",
//       ageGender: "45/M",
//       lastVisit: "Jan 15, 2024",
//       condition: "Hypertension",
//       contact: "+1 (555) 123-4567",
//     },
//     {
//       name: "Jane Smith",
//       ageGender: "32/F",
//       lastVisit: "Jan 12, 2024",
//       condition: "Diabetes",
//       contact: "+1 (555) 987-6543",
//     },
//     {
//       name: "Mike Johnson",
//       ageGender: "28/M",
//       lastVisit: "Jan 10, 2024",
//       condition: "Anxiety",
//       contact: "+1 (555) 456-7890",
//     },
//   ]);

//   // ✅ Reusable Button Component
//   const Button = ({ children, variant = "primary", className = "", ...props }) => {
//     const base = "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200";
//     const variants = {
//       primary: "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-md",
//       outline:
//         "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-sm",
//     };

//     return (
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         className={`${base} ${variants[variant]} ${className}`}
//         {...props}
//       >
//         {children}
//       </motion.button>
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
//     >
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">Patient Records</h2>
//           <p className="text-gray-500 text-sm">
//             View and manage patient information
//           </p>
//         </div>

//         {/* Actions + Search */}
//         <div className="flex flex-wrap gap-3 items-center">
//           <Button>Add New Patient</Button>
//           <Button variant="outline">Import Records</Button>

//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               placeholder="Search patients..."
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-200"
//             />
//             <Button variant="outline" className="px-3">
//               Search
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Patient Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="text-gray-600 text-left">
//             <tr>
//               <th className="py-3 px-4">Patient Name</th>
//               <th className="py-3 px-4">Age/Gender</th>
//               <th className="py-3 px-4">Last Visit</th>
//               <th className="py-3 px-4">Condition</th>
//               <th className="py-3 px-4">Contact</th>
//               <th className="py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {patients.map((p, idx) => (
//               <tr key={idx} className="hover:bg-gray-50">
//                 <td className="py-3 px-4">{p.name}</td>
//                 <td className="py-3 px-4">{p.ageGender}</td>
//                 <td className="py-3 px-4">{p.lastVisit}</td>
//                 <td className="py-3 px-4">
//                   <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
//                     {p.condition}
//                   </span>
//                 </td>
//                 <td className="py-3 px-4">{p.contact}</td>
//                 <td className="py-3 px-4 flex gap-2">
//                   <Button variant="outline" className="px-3">
//                     View History
//                   </Button>
//                   <Button className="px-3">Update Record</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
//         <div className="bg-gray-50 rounded-xl p-4 text-center border">
//           <p className="text-2xl font-bold text-blue-600">156</p>
//           <p className="text-gray-600 text-sm">Total Patients</p>
//         </div>
//         <div className="bg-gray-50 rounded-xl p-4 text-center border">
//           <p className="text-2xl font-bold text-green-600">23</p>
//           <p className="text-gray-600 text-sm">New This Month</p>
//         </div>
//         <div className="bg-gray-50 rounded-xl p-4 text-center border">
//           <p className="text-2xl font-bold text-gray-800">89%</p>
//           <p className="text-gray-600 text-sm">Follow-up Rate</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PatientRecords() {
  const [patients] = useState([
    {
      name: "John Doe",
      ageGender: "45/M",
      lastVisit: "Jan 15, 2024",
      condition: "Hypertension",
      contact: "+1 (555) 123-4567",
    },
    {
      name: "Jane Smith",
      ageGender: "32/F",
      lastVisit: "Jan 12, 2024",
      condition: "Diabetes",
      contact: "+1 (555) 987-6543",
    },
    {
      name: "Mike Johnson",
      ageGender: "28/M",
      lastVisit: "Jan 10, 2024",
      condition: "Anxiety",
      contact: "+1 (555) 456-7890",
    },
  ]);

  // ✅ Reusable Button Component
  const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const base = "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200";
    const variants = {
      primary: "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-md",
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-sm",
    };

    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Patient Records</h2>
        <p className="text-gray-500 text-sm">
          View and manage patient information
        </p>
      </div>

      {/* ✅ Stats Cards (Moved to Top) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-4 text-center border hover:shadow-md transition">
          <p className="text-2xl font-bold text-blue-600">156</p>
          <p className="text-gray-600 text-sm">Total Patients</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-center border hover:shadow-md transition">
          <p className="text-2xl font-bold text-green-600">23</p>
          <p className="text-gray-600 text-sm">New This Month</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-center border hover:shadow-md transition">
          <p className="text-2xl font-bold text-gray-800">89%</p>
          <p className="text-gray-600 text-sm">Follow-up Rate</p>
        </div>
      </div>

      {/* Actions + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-3">
          <Button>Add New Patient</Button>
          <Button variant="outline">Import Records</Button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search patients..."
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-200"
          />
          <Button variant="outline" className="px-3">
            Search
          </Button>
        </div>
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="text-gray-600 text-left">
            <tr>
              <th className="py-3 px-4">Patient Name</th>
              <th className="py-3 px-4">Age/Gender</th>
              <th className="py-3 px-4">Last Visit</th>
              <th className="py-3 px-4">Condition</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((p, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{p.name}</td>
                <td className="py-3 px-4">{p.ageGender}</td>
                <td className="py-3 px-4">{p.lastVisit}</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {p.condition}
                  </span>
                </td>
                <td className="py-3 px-4">{p.contact}</td>
                <td className="py-3 px-4 flex gap-2">
                  <Button variant="outline" className="px-3">
                    View History
                  </Button>
                  <Button className="px-3">Update Record</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
