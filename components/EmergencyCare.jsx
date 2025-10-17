"use client";
import React from "react";
import { FaAmbulance, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

const EmergencyCareSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-green-400 py-14 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Emergency Care – We’re Here When Every Second Counts
        </h2>
        <p className="text-white/90 mb-10 max-w-3xl mx-auto">
          Get instant medical attention from trusted hospitals and doctors near you.
          24/7 ambulance and emergency care service available at your fingertips.
        </p>

        {/* Emergency Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t-4 border-red-300">
          <div className="flex items-center gap-4 text-left">
            <FaAmbulance className="w-12 h-12 text-red-400" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Need Emergency Care?
              </h3>
              <p className="text-gray-600 text-sm">
                Connect with emergency doctors or book ambulance instantly.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-md">
              <FaPhoneAlt className="w-5 h-5" />
              Call Ambulance
            </button>
            <button className="border border-red-500 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-md">
              <HiOutlineClock className="w-5 h-5" />
              Book Emergency Doctor
            </button>
          </div>
        </div>

        {/* Location Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-10 text-white/90">
          <FaMapMarkerAlt className="w-5 h-5 text-white" />
          <p>
            Find nearest emergency center:{" "}
            <span className="font-semibold text-white">Enable your location</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCareSection;
