"use client";

import { FaStar, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";

const labs = [
  {
    name: "Apollo Diagnostics",
    rating: 4.8,
    reviews: 1245,
    location: "Multiple Locations",
    services: ["Home Collection", "NABL Certified"],
  },
  {
    name: "Dr. Lal PathLabs",
    rating: 4.7,
    reviews: 986,
    location: "Pan India",
    services: ["Home Collection", "NABL Certified"],
  },
  {
    name: "SRL Diagnostics",
    rating: 4.6,
    reviews: 756,
    location: "Major Cities",
    services: ["Home Collection", "NABL Certified"],
  },
];

export default function PartnerLabs() {
  return (
    <section className="mt-5 px-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        Certified Partner Labs
      </h2>
      <p className="text-gray-600 mt-2">
        Trusted diagnostic centers for accurate results
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{lab.name}</h3>

            {/* Rating */}
            <div className="flex items-center justify-center mt-2 text-sm text-gray-700">
              <FaStar className="text-yellow-500 mr-1" />
              <span className="font-semibold">{lab.rating}</span>
              <span className="ml-1 text-gray-500">
                ({lab.reviews} reviews)
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center text-gray-500 text-sm mt-2">
              <MdLocationOn className="mr-1" /> {lab.location}
            </div>

            {/* Services */}
            <div className="flex items-center justify-center gap-4 mt-3 text-sm">
              <span className="flex items-center text-green-600">
                <FaHome className="mr-1" /> Home Collection
              </span>
              <span className="flex items-center text-blue-600">
                <BiCheckCircle className="mr-1" /> NABL Certified
              </span>
            </div>

            {/* Button */}
            <button className="mt-5 border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-50 transition">
              View Tests
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
