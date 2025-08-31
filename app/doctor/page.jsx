"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import slugify from "slugify";

export default function DoctorListing() {
  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiologist",
      degree: "MBBS, MD (Cardiology)",
      rating: 4.9,
      reviews: 234,
      experience: "15+ years",
      hospital: "Apollo Hospital, Mumbai",
      languages: ["English", "Hindi"],
      fee: 800,
      nextAvailable: "2:30 PM",
      image:
        "https://images.generated.photos/p0A9V5eXY4vR3sYw0Er0pSh8D1zO5sZr6u7VzmrRwyo/rs:fit:512:512/czM6Ly9p/ZGVudGl0eS1hcGkv/aW1hZ2UvNDE0MDc1/Ny5qcGc.jpg",
    },
    {
      id: 2,
      name: "Dr. Sneha Sharma",
      specialization: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      rating: 4.7,
      reviews: 189,
      experience: "10 years",
      hospital: "Fortis Hospital, Delhi",
      languages: ["English", "Hindi"],
      fee: 600,
      nextAvailable: "4:00 PM",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      specialization: "Neurologist",
      degree: "MBBS, DM (Neurology)",
      rating: 4.8,
      reviews: 310,
      experience: "12 years",
      hospital: "AIIMS, Delhi",
      languages: ["English", "Hindi"],
      fee: 1200,
      nextAvailable: "6:00 PM",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Dr. Amit Verma",
      specialization: "Neurologist",
      degree: "MBBS, DM (Neurology)",
      rating: 4.8,
      reviews: 310,
      experience: "12 years",
      hospital: "AIIMS, Delhi",
      languages: ["English", "Hindi"],
      fee: 1200,
      nextAvailable: "6:00 PM",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 5,
      name: "Dr. Amit Verma",
      specialization: "Neurologist",
      degree: "MBBS, DM (Neurology)",
      rating: 4.8,
      reviews: 310,
      experience: "12 years",
      hospital: "AIIMS, Delhi",
      languages: ["English", "Hindi"],
      fee: 1200,
      nextAvailable: "6:00 PM",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ]);

  return (
    <div className="w-full  bg-gray-50">
      {/* Top Search Section */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 py-12 px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Find the Best Doctors
        </h1>
        <p className="mb-6">
          Connect with verified doctors across specializations
        </p>
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-5xl mx-auto bg-white rounded-full p-4 shadow-lg">
          {/* Search Input */}
          <div className="flex items-center w-full md:w-1/3 border border-gray-300 px-4 py-2 rounded-md bg-white">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search doctors, conditions"
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Specialization Dropdown */}
          <select className="w-full md:w-1/4 border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700">
            <option>Specialization</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>Neurologist</option>
          </select>

          {/* Location Dropdown */}
          <select className="w-full md:w-1/4 border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700">
            <option>Location</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>

          {/* Search Button */}
          <button className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-2 rounded-md font-semibold transition hover:opacity-90">
            Search
          </button>
        </div>

      </div>

      {/* Filters + Doctors Section */}
      <div className="flex flex-col md:flex-row mx-auto p-6 gap-6">
        {/* Filters */}
        <div className="md:w-1/4 bg-white shadow rounded-lg p-5 h-fit">
          <h2 className="font-semibold text-lg mb-3">Filters</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Available Today
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Available Tomorrow
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Video Consultation
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Consultation Fee</h3>
            <input type="range" min="0" max="2000" className="w-full" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹0</span>
              <span>₹2000+</span>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Experience</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 0-5 years
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 5-10 years
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 10+ years
              </label>
            </div>
          </div>
        </div>

        {/* Doctor List */}
        <div className="md:w-3/4 bg-white rounded-lg shadow p-5 overflow-y-auto max-h-[600px]">
          <h2 className="font-semibold text-lg mb-3">
            Available Doctors <span className="text-gray-500">({doctors.length} found)</span>

          </h2>


          <div className="flex justify-end mb-4">
            <select className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700">
              <option>Filter by</option>
              <option>Rating (High to Low)</option>
              <option>Rating (Low to High)</option>
              <option>Consultation Fee (Low to High)</option>
              <option>Consultation Fee (High to Low)</option>
              <option>Experience (Low to High)</option>
              <option>Experience (High to Low)</option>
            </select>
          </div>
          <div className="space-y-4">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Doctor Info */}
                <div className="flex gap-4">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-30 h-35 rounded-md object-cover border border-green-300"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{doc.name}</h3>
                    <p className="text-blue-600 font-medium">
                      {doc.specialization}
                    </p>
                    <p className="text-gray-600 text-sm">{doc.degree}</p>
                    <div className="flex items-center text-sm mt-1">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>
                        {doc.rating} ({doc.reviews} reviews) • {doc.experience}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <MdLocationOn className="text-green-500 mr-1" />
                      {doc.hospital}
                    </p>
                    <div className="flex gap-2 mt-1">
                      {doc.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fee + Buttons */}
                <div className="flex flex-col items-start md:items-end mt-3 md:mt-0">
                  <p className="text-green-600 font-semibold text-lg">
                    ₹{doc.fee}
                  </p>
                  <p className="text-sm text-gray-600">
                    Next Available: {doc.nextAvailable}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Link
                      href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slugify(
                        doc.name,
                        { lower: true, strict: true, trim: true }
                      )}`}
                    >
                      <span className="border px-4 py-1 rounded-md text-blue-500">
                        View Profile
                      </span>
                    </Link>
                    <Link href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slugify(
                      doc.name,
                      { lower: true, strict: true, trim: true }
                    )}/appointment`}>
                      <button className="bg-green-500 text-white px-4 py-1 rounded-md">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
