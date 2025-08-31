"use client";

import React, { useState } from "react";

export default function UserVerifyOtpForm() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP Submitted: ${otp}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Verify OTP</h2>
          <p className="text-gray-500 text-sm mt-1">
            Please enter the OTP sent to your email
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-3 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none tracking-widest"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00c9a7 0%, #007cf0 100%)",
            }}
          >
            Verify OTP
          </button>
        </form>

        {/* Resend OTP */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Didn’t receive the code?{" "}
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
