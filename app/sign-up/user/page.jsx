// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaImage, FaUser } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { useRegisterUserMutation } from "../../../lib/store/api/userApi";

// export default function UserSignup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [profileImage, setProfileImage] = useState(null);

//   const router = useRouter();
//   const [registerUser, { isLoading, error }] = useRegisterUserMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match ❌");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("address", address);
//     formData.append("city", city);
//     if (profileImage) {
//       formData.append("profilePic", profileImage);
//     }

//     try {
//       const result = await registerUser(formData).unwrap();
//       console.log("✅ Registration successful:", result);
//       alert(
//         "Registration successful! OTP sent to registered email. Please verify your email!"
//       );
//       router.push("/user/verify-otp");
//     } catch (err) {
//       console.error("❌ Registration failed:", err);
//       alert(err?.data?.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <main className="min-h-[100vh] w-full flex items-center justify-center bg-white px-4 py-10 md:py-16">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
//           User Sign Up
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           Welcome to <span className="font-semibold">HealthBooster</span>!  
//           Please sign up to get started.
//         </p>

//         {/* Avatar */}
//         <div className="w-full flex justify-center mb-6">
//           <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-md">
//             <FaUser className="w-8 h-8 text-white" />
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
//               placeholder="John Doe"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
//               placeholder="123 Main St"
//             />
//           </div>

//           {/* City */}
//           <div>
//             <label
//               htmlFor="city"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
//               placeholder="New York"
//             />
//           </div>

//           {/* Profile Picture */}
//           <div>
//             <label
//               htmlFor="profilePic"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Profile Picture
//             </label>
//             <div className="relative">
//               <input
//                 type="file"
//                 id="profilePic"
//                 accept="image/*"
//                 onChange={(e) => setProfilePic(e.target.files[0])}
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500 pl-8"
//               />
//               <FaImage className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
//               placeholder="••••••••"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
//               placeholder="••••••••"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
//           >
//             {isLoading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Feedback */}
//         {error && (
//           <p className="text-red-500 text-center mt-3">
//             {error?.data?.message || "Registration failed"}
//           </p>
//         )}

//         {/* Footer Links */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           <p>
//             Already have an account?{" "}
//             <Link
//               href="/user/login"
//               className="text-blue-600 font-medium hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaImage, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "../../../lib/store/api/userApi";
import { ToastContainer, toast } from "react-toastify"; // ✅ import
import "react-toastify/dist/ReactToastify.css"; // ✅ import css

export default function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const router = useRouter();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌"); // ✅ toast instead of alert
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("city", city);
    if (profileImage) {
      formData.append("profilePic", profileImage);
    }

    try {
      const result = await registerUser(formData).unwrap();
      console.log("✅ Registration successful:", result);

      toast.success(
        "Registration successful! OTP sent to registered email. Please verify your email!"
      ); // ✅ success toast

      setTimeout(() => {
        router.push("/verify-otp");
      }, 2000); // give time for toast to show
    } catch (err) {
      console.error("❌ Registration failed:", err);
      toast.error(err?.data?.message || "Registration failed. Please try again."); // ✅ error toast
    }
  };

  return (
    <main className="min-h-[100vh] w-full flex items-center justify-center bg-white px-4 py-10 md:py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          User Sign Up
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome to <span className="font-semibold">HealthBooster</span>!  
          Please sign up to get started.
        </p>

        {/* Avatar */}
        <div className="w-full flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-md">
            <FaUser className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="123 Main St"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="New York"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture
            </label>
            <div className="relative">
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500 pl-8"
              />
              <FaImage className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              href="/login/user"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ Toast container (must be at root level of component/page) */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </main>
  );
}
