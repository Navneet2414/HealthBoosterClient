// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import { setCredentials } from "@/lib/store/slices/authSlice";
// import { useLoginAdminMutation } from "@/lib/store/api/adminApi";

// export default function AdminLogin() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [loginAdmin] = useLoginAdminMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const result = await loginAdmin(formData).unwrap();
      
//       const adminData = {
//         user: result.user,
//         token: result.token,
//         role: "admin"
//       };

//       dispatch(setCredentials(adminData));
//       toast.success("Login successful!");
//       router.push("/admin/dashboard");
//     } catch (error) {
//       toast.error(error?.data?.message || "Login failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md"
//       >
//         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 shadow-sm">
//               <FaUserShield className="w-8 h-8 text-red-600" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
//             <p className="text-gray-600 mt-2 text-sm">
//               Access admin dashboard
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Admin Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
//                 placeholder="Enter admin email"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400 pr-12"
//                   placeholder="Enter password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:opacity-90 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 transition"
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <div className="mt-6">
//             <Link
//               href="/login"
//               className="block border border-gray-200 rounded-lg py-2 px-4 text-center text-sm text-gray-600 hover:bg-gray-50 hover:border-red-300 transition"
//             >
//               ← Back to role selection
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </main>
//   );
// }

import AdminLogin from "@/components/Login/AdminLogin";

export default function AdminLoginPage() {
  return (
    <div>
      <AdminLogin />
    </div>
  );
}