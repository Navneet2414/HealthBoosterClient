"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FaUserMd, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { setCredentials } from "@/lib/store/slices/authSlice";
import { useLoginDoctorMutation } from "@/lib/store/api/doctorApi";
import { toast } from "react-toastify";

export default function DoctorLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginDoctor, { isLoading }] = useLoginDoctorMutation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Logging in...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);

    try {
      console.log("Attempting login...");
      const result = await loginDoctor(formData).unwrap();
      console.log("=== LOGIN SUCCESS ===");
      console.log("Full result:", JSON.stringify(result, null, 2));
      
      if (result.doctor) {
        console.log("Doctor object exists:", result.doctor);
        console.log("isApproved value:", result.doctor.isApproved);
        console.log("isApproved type:", typeof result.doctor.isApproved);
        console.log("status value:", result.doctor.status);
      } else {
        console.log("No doctor object in response");
      }

      // Check approval status first
      if (result.doctor?.isApproved === true) {
        dispatch(setCredentials({
          user: result.user || result.doctor,
          token: result.token,
          role: result.doctor?.role || 'doctor'
        }));
        toast.success("Login successful!");
        router.push("/doctor/dashboard");
      } else {
        toast.warning("Your account is pending verification. Please wait for admin approval.");
        router.push("/verification-pending");
      }
      
    } catch (error) {
      console.log("=== LOGIN ERROR ===");
      console.log("Error:", error);
      console.log("Error data:", error?.data);
      
      // Handle verification pending case
      if (error?.status === 403 && error?.data?.message?.includes('Verification is pending')) {
        toast.warning("Your account is pending verification. Please wait for admin approval.");
        router.push("/verification-pending");
      } else {
        toast.error(error?.data?.message || "Login failed. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* White form card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            {/* Icon circle with gradient */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
              <FaUserMd className="w-8 h-8 text-white" />
            </div>
            {/* Heading with gradient text */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Doctor Login
            </h1>
            <p className="text-gray-600 mt-2">Access your medical practice</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medical License Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your registered email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Gradient button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-medium hover:opacity-90 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Need to register your practice?{" "}
              <Link
                href="/sign-up/doctor"
                className="font-medium bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent hover:opacity-80"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to role selection
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
