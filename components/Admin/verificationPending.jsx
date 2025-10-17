"use client";

import Link from "next/link";
import { FaClock } from "react-icons/fa";

export default function VerificationPending() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <FaClock className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verification Pending
          </h1>
          <p className="text-gray-600">
            Your account is currently under review by our admin team. You will be notified once verification is complete.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>What happens next?</strong><br />
              Our team will review your credentials and approve your account within 24-48 hours.
            </p>
          </div>
          
          <Link
            href="/login"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}