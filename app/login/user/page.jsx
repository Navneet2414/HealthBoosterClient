// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import { setCredentials } from "@/lib/store/slices/authSlice";
// import { useLoginUserMutation } from "@/lib/store/api/userApi";


// export default function UserLogin() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [loginUser, { isLoading }] = useLoginUserMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await loginUser(formData).unwrap();
      
//       // Set authentication state
//       dispatch(setCredentials({
//         user: result.user,
//         token: result.token,
//         role: "user"
//       }));
      
//       toast.success("Login successful!");
      
//       // Redirect to user dashboard
//       setTimeout(() => {
//         router.push("/user/dashboard");
//       }, 1500);
//     } catch (error) {
//       toast.error(error?.data?.message || "Login failed. Please try again.");
//     }
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md"
//       >
//         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 shadow-sm">
//               <FaUser className="w-8 h-8 text-indigo-600" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900">User Login</h1>
//             <p className="text-gray-600 mt-2 text-sm">
//               Access your health dashboard
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg 
//                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
//                   transition placeholder-gray-400"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Password */}
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
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg 
//                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
//                     transition placeholder-gray-400 pr-12"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             {/* Submit button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-medium 
//                 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
//                 disabled:opacity-50 transition"
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           {/* Signup link */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600 text-sm">
//               Don't have an account?{" "}
//               <Link
//                 href="/sign-up/user"
//                 className="text-indigo-600 hover:text-indigo-700 font-medium"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>

//           {/* Back button */}
//           <div className="mt-6">
//             <Link
//               href="/login"
//               className="block border border-gray-200 rounded-lg py-2 px-4 text-center 
//                 text-sm text-gray-600 hover:bg-gray-50 hover:border-indigo-300 
//                 transition"
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

import UserLogin from "@/components/Login/UserLogin";

export default function UserLoginPage() {
  return (
    <div>
      <UserLogin />
    </div>
  );
}