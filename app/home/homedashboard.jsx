"use client";
import { FaUserMd, FaShieldAlt, FaClock } from "react-icons/fa";

export default function HomeDashboard() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/homepage.png')] bg-cover bg-center opacity-30"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Your Health, <br /> Our Priority
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-lg">
                        Book doctor appointments, schedule tests, and order medicines online.
                        Complete healthcare solutions at your fingertips.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-6 mt-6 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <FaUserMd className="text-white text-lg" />
                            <span>500+ Doctors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-white text-lg" />
                            <span>Secure & Private</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-white text-lg" />
                            <span>24/7 Available</span>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-6 px-6 py-3 rounded-lg bg-white text-green-600 font-semibold shadow hover:bg-gray-100 transition">
                        Explore Services
                    </button>
                </div>

                {/* Right Form */}
                <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto lg:mx-0">
                    <h2 className="text-xl font-semibold mb-4">Quick Search</h2>

                    <div className="space-y-4">
                        {/* Search Input */}
                        <div className="flex items-center border rounded-lg px-3 py-2">
                            <svg
                                className="w-5 h-5 text-gray-400 mr-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search doctors, specializations..."
                                className="w-full outline-none"
                            />
                        </div>

                        {/* Select City */}
                        <div className="flex items-center border rounded-lg px-3 py-2">
                            <svg
                                className="w-5 h-5 text-gray-400 mr-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21a8.38 8.38 0 01-15 0C5.5 17 12 13 12 13s6.5 4 7.5 8z" />
                            </svg>
                            <select className="w-full outline-none bg-transparent">
                                <option>Select your city</option>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow hover:opacity-90 transition">
                            Search Doctors
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
