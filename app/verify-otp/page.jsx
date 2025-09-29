"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyOtpMutation, useResendOtpMutation } from "@/lib/store/api/otpApi";
import { toast } from "react-toastify";

export default function VerifyOtpForm() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'user';
  const email = searchParams.get('email');
  const [verifyOtpMutation, { isLoading }] = useVerifyOtpMutation();
  const [resendOtpMutation, { isLoading: isResending }] = useResendOtpMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Email not found. Please register again.');
      return;
    }
    
    try {
      const result = await verifyOtpMutation({ email, otp, role }).unwrap();
      toast.success(result.message || 'OTP verified successfully!');
      
      // Role-based redirect after OTP verification
      const redirectMap = {
        user: '/login/user',
        doctor: '/login/doctor',
        laboratory: '/login/laboratory'
      };
      
      router.push(redirectMap[role] || '/login/user');
    } catch (error) {
      toast.error(error?.data?.message || 'Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      toast.error('Email not found. Please register again.');
      return;
    }

    try {
      const result = await resendOtpMutation({ email, role }).unwrap();
      toast.success(result.message || 'OTP resent successfully!');
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to resend OTP. Please try again.');
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
            disabled={isResending}
            onClick={handleResendOtp}
            className="font-medium text-blue-600 hover:underline disabled:opacity-50"
          >
            {isResending ? 'Resending...' : 'Resend OTP'}
          </button>
        </p>
      </div>
    </div>
  );
}