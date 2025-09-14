"use client";
import { FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import {useParams, useSearchParams } from "next/navigation";

export default function PopularHealthPackage() {

    const { slug } = useParams();

  // mock data until you fetch from API
  const packageData = {
    title: slug.replace(/-/g, " ").toUpperCase(),
    description: "This is a description for the selected health package."
  };
  // packageData loaded
  if (!packageData) return <p>No package data found</p>;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 p-6 text-white">
        <p className="text-sm opacity-90">Lab Tests / Health Package Details</p>
        <h1 className="text-3xl font-bold mt-1">{packageData.title}</h1>
        <p className="text-base mt-2 opacity-95">
          {packageData.description}
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-6 p-4 flex gap-6">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          {/* Package Overview */}
          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              ✅ Package Overview
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <MdAccessTime className="text-blue-500 text-xl mx-auto" />
                <p className="text-sm mt-2">Results in</p>
                <p className="font-semibold text-gray-800">4-6 hours</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <FaStar className="text-yellow-500 text-xl mx-auto" />
                <p className="text-sm mt-2">Rating</p>
                <p className="font-semibold text-gray-800">
                  4.8 <span className="text-gray-500">(1245 reviews)</span>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  25% OFF
                </span>
                <p className="text-sm mt-2">You Save</p>
                <p className="font-semibold text-gray-800">₹301</p>
              </div>
            </div>
          </div>

          {/* Tests Included */}
          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Tests Included (5)
            </h2>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
              <li>Complete Blood Count (CBC)</li>
              <li>Lipid Profile</li>
              <li>Liver Function Test</li>
              <li>Kidney Function Test</li>
              <li>Blood Sugar (Fasting)</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[300px] bg-white shadow rounded-xl p-5 h-fit border border-blue-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              ₹899 <span className="line-through text-gray-400 text-lg">₹1200</span>
            </p>
            <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full mt-2 inline-block">
              25% OFF
            </span>
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-lg font-semibold hover:opacity-90">
            Book Package
          </button>

          <button className="w-full mt-3 border border-blue-400 text-blue-500 py-2 rounded-lg font-semibold hover:bg-blue-50">
            📞 Call to Book
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Home collection available • NABL certified labs • Free report consultation
          </p>
        </div>
      </div>
    </div>
  );
}
