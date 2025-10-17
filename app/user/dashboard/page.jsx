// "use client";
// import { useState } from "react";
// // import StatCard from "@/components/user/dashboard/stat-card";
// import Appointment from "./components/appointment";
// import LabReport from "./components/labreport";
// import Medicine from "./components/medicines";
// import Profile from "./components/profile";

// export default function UserDashboard() {
//   const [activeTab, setActiveTab] = useState("Appointments");
//   const tabs = ["Appointments", "Lab Reports", "Medicines", "Profile"];

//   return (
//     <div className="w-full  bg-gray-50 flex flex-col">
//       {/* Header - now full width */}
//       <div className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white p-6 shadow-md">
//         <div className="w-full  mx-auto">
//           <h1 className="text-3xl font-bold">My Health Dashboard</h1>
//           <p className="text-lg mt-2">
//             Track your health journey and manage appointments
//           </p>
//         </div>
//       </div>

//       {/* Stats - full width with centered content */}
//       <div className="w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4">
//         <StatCard value="24" label="Appointments" sub="+2 this month" />
//         <StatCard value="8" label="Lab Tests" sub="+1 this month" />
//         <StatCard value="12" label="Prescriptions" sub="Active: 2" />
//         <StatCard value="85%" label="Health Score" sub="+5% improvement" />
//       </div>

//       {/* Tabs */}
//       <div className="w-full  mx-auto flex flex-wrap justify-center mt-6 rounded-lg bg-gray-100 p-1 px-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 
//               ${
//                 activeTab === tab
//                   ? "bg-white shadow border border-blue-400 text-blue-600"
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Content Placeholder */}
//       <div className="w-full mx-auto mt-4 bg-white p-6 rounded-xl shadow px-4">
        
//           {activeTab === "Appointments" && <Appointment />}
//           {activeTab === "Lab Reports" && <LabReport />}
//           {activeTab === "Medicines" && <Medicine />}
//           {activeTab === "Profile" && <Profile />}
        
//       </div>
//     </div>
//   );
// }

// function StatCard({ value, label, sub }) {
//   return (
//     <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center justify-center text-center">
//       <span className="text-3xl font-bold text-blue-500">{value}</span>
//       <span className="mt-1 text-gray-800 font-medium">{label}</span>
//       <span className="text-sm text-gray-500">{sub}</span>
//     </div>
//   );
// }

import UserDashboard from "@/components/User/Dashboard";

export default function UserDashboardPage() {
  return <UserDashboard />;
}