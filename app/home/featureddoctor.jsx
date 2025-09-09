"use client";
import React from "react";
import Link from "next/link";
import slugify from "slugify";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    rating: 4.9,
    reviews: 234,
    location: "Mumbai",
    experience: "15+ years",
    fee: 800,
    languages: ["English", "Hindi"],
    availability: "Today",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist",
    rating: 4.8,
    reviews: 189,
    location: "Delhi",
    experience: "12+ years",
    fee: 600,
    languages: ["English", "Hindi"],
    availability: "Tomorrow",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Anil Mehta",
    specialization: "Orthopedic",
    rating: 4.7,
    reviews: 310,
    location: "Bangalore",
    experience: "10+ years",
    fee: 700,
    languages: ["English", "Kannada"],
    availability: "Today",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 4,
    name: "Dr. Ritu Agarwal",
    specialization: "Gynecologist",
    rating: 4.9,
    reviews: 420,
    location: "Jaipur",
    experience: "14+ years",
    fee: 900,
    languages: ["English", "Hindi"],
    availability: "Tomorrow",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 5,
    name: "Dr. Arvind Patel",
    specialization: "Neurologist",
    rating: 4.6,
    reviews: 280,
    location: "Ahmedabad",
    experience: "18+ years",
    fee: 1000,
    languages: ["English", "Gujarati"],
    availability: "Today",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Dr. Neha Gupta",
    specialization: "Pediatrician",
    rating: 4.9,
    reviews: 355,
    location: "Lucknow",
    experience: "9+ years",
    fee: 500,
    languages: ["English", "Hindi"],
    availability: "Tomorrow",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function FeaturedDoctors() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Featured Doctors
      </h2>
      <p className="text-gray-600 mb-8">
        Consult with our top-rated doctors across various specializations
      </p>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {doctors.map((doc) => {
          const slug = slugify(doc.name, {
            lower: true,
            strict: true,
            trim: true,
          });

          return (
            <Link
              key={doc.id}
              href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slug}`}
              className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4 hover:shadow-xl transition"
            >
              {/* Doctor Image */}
              <img
                src={doc.image}
                alt={doc.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
              />

              {/* Doctor Info */}
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-blue-500 text-sm font-medium">
                  {doc.specialization}
                </p>

                {/* Rating */}
                <p className="text-gray-700 text-sm mt-1">
                  ⭐ {doc.rating}{" "}
                  <span className="text-gray-500">
                    ({doc.reviews} reviews)
                  </span>
                </p>

                {/* Location & Experience */}
                <p className="text-gray-500 text-sm mt-1">
                  📍 {doc.location} • {doc.experience}
                </p>

                {/* Fee */}
                <p className="text-gray-700 text-sm font-semibold mt-2">
                  Consultation Fee:{" "}
                  <span className="text-green-600">₹{doc.fee}</span>
                </p>

                {/* Languages */}
                <div className="flex gap-2 mt-2">
                  {doc.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-md border text-gray-700"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="flex items-center gap-2 px-3 py-2 border border-blue-500 text-blue-500 rounded-lg text-sm hover:bg-blue-50">
                    📅 Book
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-600 rounded-lg text-sm hover:bg-green-200">
                    🎥 Video Call
                  </button>
                </div>
              </div>

              {/* Availability Badge */}
              <span className="ml-auto px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
                {doc.availability}
              </span>
            </Link>
          );
        })}
      </div>

      {/* View All Doctors Button */}
      <div className="mt-10">
        <button
          onClick={() => alert("Redirecting to all doctors page...")}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
        >
          View All Doctors
        </button>
      </div>
    </section>
  );
}
