// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LaboratoryVerifyOtpForm() {
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       alert("OTP verified successfully!");
//       router.push("/laboratory/dashboard");
//     } catch (error) {
//       alert("Invalid OTP. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
//       <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Laboratory OTP Verification</h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Please enter the OTP sent to your email
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             maxLength="6"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter 6-digit OTP"
//             className="w-full px-4 py-3 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none tracking-widest"
//             required
//           />

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-teal-500 to-green-600 hover:opacity-90 disabled:opacity-50"
//           >
//             {isLoading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Didn't receive the code?{" "}
//           <button
//             type="button"
//             className="font-medium text-teal-600 hover:underline"
//           >
//             Resend OTP
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

import VerifyOtpLaboratory from "@/components/Laboratory/VerifyOtpLaboratory";

export default function VerifyOtpLaboratoryPage() {
  return (
    <div>
      <VerifyOtpLaboratory />
    </div>
  );
}