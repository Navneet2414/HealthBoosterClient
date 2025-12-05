"use client";
import Link from 'next/link';
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
        <section className="relative min-h-screen font-serif flex items-center bg-gradient-to-r from-blue-500 to-green-500 text-white pb-20 sm:pb-24 lg:pb-32">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/homepage.png')] bg-cover bg-center opacity-30"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center py-8 lg:py-0">

                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        YOUR HEALTH <br />
                        <span className="relative inline-block overflow-hidden">
                            <span className="text-white">Our Priority</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent animate-[slideInLeft_2s_ease-out_infinite]">
                                Our Priority
                            </span>
                        </span>
                    </p>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-lg mx-auto lg:mx-0">
                        Book doctor appointments, schedule tests, and order medicines online.
                        Complete healthcare solutions at your fingertips.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <FaUserMd className="text-white text-base sm:text-lg" />
                            <span>500+ Doctors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-white text-base sm:text-lg" />
                            <span>Secure & Private</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-white text-base sm:text-lg" />
                            <span>24/7 Available</span>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white text-green-600 font-semibold shadow hover:bg-gray-100 transition text-sm sm:text-base">
                        Explore Services
                    </button>
                </div>

                {/* Right Form - Professional Search Card */}
                <div className="bg-white/95 backdrop-blur-sm text-gray-700 rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 border border-white/20">
                    <div className="text-center mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">Quick Search</h2>
                        <p className="text-xs sm:text-sm text-gray-600">Find what you need instantly</p>
                    </div>
            
                    {/* Tabs */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2 mb-4 sm:mb-6 bg-gray-50 p-1 rounded-xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center gap-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 flex-1 ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg transform scale-105'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                <span className="text-sm sm:text-base">{tab.icon}</span>
                                <span className="hidden xs:inline sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Search Input with Enhanced Styling */}
                    <div className="relative mb-4 sm:mb-6">
                        <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder={placeholders[activeTab]}
                            className="w-full pl-10 sm:pl-12 pr-20 sm:pr-28 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base bg-gray-50 hover:bg-white transition-all duration-300"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300">
                            <span className="hidden sm:inline">{searchButtonLabels[activeTab]}</span>
                            <span className="sm:hidden">Search</span>
                        </button>
                    </div>

                    {/* Select City with Enhanced Styling */}
                    <div className="flex items-center border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-3 sm:py-4 mb-4 sm:mb-6 bg-gray-50 hover:bg-white transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21a8.38 8.38 0 01-15 0C5.5 17 12 13 12 13s6.5 4 7.5 8z" />
                        </svg>
                        <select className="w-full outline-none bg-transparent text-sm sm:text-base text-gray-700 font-medium">
                            <option>Select your city</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                            <option>Noida</option>
                            <option>Gurgaon</option>
                        </select>
                    </div>

                    {/* Professional CTA */}
                    <div className="text-center">
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">Trusted by 10,000+ patients</p>
                        <div className="flex justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Buttons - Mobile Column, Desktop Inline Center */}
            <div className="absolute bottom-2 sm:bottom-8 lg:bottom-16 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center justify-center max-w-xs sm:max-w-none mx-auto">
                    <button className="w-full sm:w-auto px-4 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-base min-w-[160px] sm:min-w-[220px]">
                        <svg className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Book Appointment</span>
                    </button>
                    <Link href="/emergency-care" className="w-full sm:w-auto px-4 sm:px-8 py-2.5 sm:py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white font-bold rounded-lg sm:rounded-xl hover:bg-white/30 hover:border-white/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-base min-w-[160px] sm:min-w-[220px]">
                        <svg className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Emergency Care</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}