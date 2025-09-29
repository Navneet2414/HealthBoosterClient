"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFlask, FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRegisterLaboratoryMutation } from "@/lib/store/api/laboratoryApi";
import { toast } from "react-toastify";

export default function LaboratorySignup() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [registerLaboratory, { isLoading }] = useRegisterLaboratoryMutation();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const formDataToSend = new FormData();
      
      // Map frontend fields to backend expected fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('password', formData.password);
      
      // Create address object for backend
      const addressObj = {
        street: formData.address,
        city: formData.city,
        state: formData.state,
        country: 'India'
      };
      formDataToSend.append('address', JSON.stringify(addressObj));
      
      if (profileImage) {
        formDataToSend.append('profileImage', profileImage);
      }
      
      // Add default fields that backend might expect
      formDataToSend.append('slug', formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
      formDataToSend.append('description', `${formData.name} - Professional diagnostic laboratory`);
      formDataToSend.append('website', '');

      console.log('Calling registerLaboratory API...');
      console.log('FormData contents:');
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }
      
      const result = await registerLaboratory(formDataToSend).unwrap();
      console.log('API response:', result);
      toast.success(result.message || 'Registration successful! Please verify your OTP.');
      router.push(`/verify-otp?role=laboratory&email=${formData.email}`);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error?.data?.message || "Registration failed");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };



  return (
    <main className="min-h-screen  flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Gradient Border Wrapper */}
        <div className="p-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl shadow-xl">
          {/* Inner White Card */}
          <div className="bg-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
                <FaFlask className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Laboratory Registration
              </h1>
              <p className="text-gray-600 mt-2">Join our diagnostic network</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Laboratory Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter laboratory name"
                />
              </div>



              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter laboratory address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter state"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Profile Image (optional)</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="profileImage"
                  />
                  <label
                    htmlFor="profileImage"
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <FaUpload className="mr-2" />
                    Choose Image
                  </label>
                  {profileImage && <span className="text-sm text-gray-600">{profileImage.name}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                    placeholder="Enter password"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                onClick={(e) => {
                  console.log('Button clicked');
                  if (!e.currentTarget.form.checkValidity()) {
                    console.log('Form validation failed');
                  }
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-medium hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login/laboratory"
                  className="text-blue-600 hover:text-green-600 font-medium"
                >
                  Login
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link
                href="/sign-up"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← Back to role selection
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
