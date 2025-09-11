"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
console.log("VerifyOtpForm");
export default function VerifyOtpForm() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'user';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("OTP verified successfully!");
      
      // Role-based redirect after OTP verification
      const redirectMap = {
        user: '/user/dashboard',
        doctor: '/doctor/dashboard',
        laboratory: '/laboratory/dashboard'
      };
      
      router.push(redirectMap[role] || '/user/dashboard');
    } catch (error) {
      alert("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {role.charAt(0).toUpperCase() + role.slice(1)} OTP Verification
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Please enter the OTP sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-3 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none tracking-widest"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Didn't receive the code?{" "}
          <button
            type="button"
            className="font-medium text-blue-600 hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}