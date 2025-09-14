"use client";
import { useState } from 'react';
import { FaUserMd, FaShieldAlt, FaClock, FaSearch, FaStethoscope, FaCapsules, FaFlask } from "react-icons/fa";
export default function HomeDashboard() {
    const [activeTab, setActiveTab] = useState('doctors');

    // Tab config using react-icons
    const tabs = [
        { id: 'doctors', label: 'Doctors', icon: <FaStethoscope className="w-4 h-4" /> },
        { id: 'labtests', label: 'Lab Tests', icon: <FaFlask className="w-4 h-4" /> },
        { id: 'medicines', label: 'Medicines', icon: <FaCapsules className="w-4 h-4" /> },
    ];

    // Dynamic placeholder and button text based on active tab
    const placeholders = {
        doctors: 'Search doctors, specializations...',
        labtests: 'Search lab tests, packages...',
        medicines: 'Search medicines, brands...',
    };

    const searchButtonLabels = {
        doctors: 'Search Doctors',
        labtests: 'Search Tests',
        medicines: 'Search Medicines',
    };

    return (
        <section className="relative min-h-screen  font-serif  flex items-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/homepage.png')] bg-cover bg-center opacity-30"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-6xl md:text-5xl font-bold leading-tight">
                        YOUR HEALTH <br />
                        <span className="relative inline-block overflow-hidden">
                            <span className="text-white ">Our Priority</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent animate-[slideInLeft_2s_ease-out_infinite]">
                                Our Priority
                            </span>
                        </span>
                    </p>
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

                {/* Right Form - Search Card (unchanged styling) */}
                <div className="bg-white text-gray-500 rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-lg mx-auto lg:mx-0">
                    <h2 className="text-xl font-semibold mb-4">Quick Search</h2>

                    {/* Tabs */}
                    <div className="flex space-x-1 mb-4 border-b border-gray-200 pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                                        ? 'bg-blue-500 text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Input with FaSearch Icon */}
                    <div className="relative mb-4">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FaSearch className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder={placeholders[activeTab]}
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-md text-sm font-medium">
                            {searchButtonLabels[activeTab]}
                        </button>
                    </div>

                    {/* Select City */}
                    <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
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

                    {/* Submit Button (now hidden — replaced by dynamic search button above) */}
                    {/* Removed to avoid duplication */}
                </div>
            </div>

            {/* ✅ NEW: Buttons BELOW the entire card, centered under both columns */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold  rounded-lg shadow hover:opacity-90 transition flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                </button>
                <button className="px-6 py-3 border border-gray-300 text-white   font-bold rounded-lg hover:bg-green-500 transition flex items-center gap-2">
                    Emergency Care
                </button>
            </div>
        </section>
    );
}