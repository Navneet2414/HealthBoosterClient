"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaBrain, FaBaby, FaStar } from "react-icons/fa";
import { GiBoneKnife, GiFemale, GiBodyBalance } from "react-icons/gi";

const specialties = [
  { name: "Cardiologist", desc: "Heart Specialist", icon: <FaHeart className="text-red-500" size={64} /> },
  { name: "Dermatologist", desc: "Skin Specialist", icon: <GiBodyBalance className="text-green-600" size={64} /> },
  { name: "Pediatrician", desc: "Child Specialist", icon: <FaBaby className="text-blue-500" size={64} /> },
  { name: "Neurologist", desc: "Brain Specialist", icon: <FaBrain className="text-orange-400" size={64} /> },
  { name: "Orthopedist", desc: "Bone Specialist", icon: <GiBoneKnife className="text-purple-500" size={64} /> },
  { name: "Gynecologist", desc: "Women's Health", icon: <GiFemale className="text-pink-400" size={64} /> },
];

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Cardiologist",
    experience: "10+ years experience",
    degree: "MBBS, MD (Cardiology)",
    fee: "₹700",
    rating: 4.8,
    image: "/images/doctordemo.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatologist",
    experience: "8+ years experience",
    degree: "MBBS, DDVL",
    fee: "₹500",
    rating: 4.5,
    image: "/images/doctordemo.jpg",
  },
  {
    id: 3,
    name: "Dr. Neha Gupta",
    specialization: "Pediatrician",
    experience: "12+ years experience",
    degree: "MBBS, MD (Pediatrics)",
    fee: "₹600",
    rating: 4.9,
    image: "/images/doctordemo.jpg",
  },
  {
    id: 4,
    name: "Dr. Neha Gupta",
    specialization: "Pediatrician",
    experience: "12+ years experience",
    degree: "MBBS, MD (Pediatrics)",
    fee: "₹600",
    rating: 4.9,
    image: "/images/doctordemo.jpg",
  },
  {
    id: 5,
    name: "Dr. Neha Gupta",
    specialization: "Pediatrician",
    experience: "12+ years experience",
    degree: "MBBS, MD (Pediatrics)",
    fee: "₹600",
    rating: 4.9,
    image: "/images/doctordemo.jpg",
  },
  {
    id: 6,
    name: "Dr. Neha Gupta",
    specialization: "Pediatrician",
    experience: "12+ years experience",
    degree: "MBBS, MD (Pediatrics)",
    fee: "₹600",
    rating: 4.9,
    image: "/images/doctordemo.jpg",
  },
  {
    id: 7,
    name: "Dr. Neha Gupta",
    specialization: "Pediatrician",
    experience: "12+ years experience",
    degree: "MBBS, MD (Pediatrics)",
    fee: "₹600",
    rating: 4.9,
    image: "/images/doctordemo.jpg",
  },
];

export default function SpecialityCards() {
  return (
    <section className="mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Top Specialties
      </h2>

      {/* Specialties Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {specialties.map((specialty) => {
          const safeName = (specialty?.name ?? "").toLowerCase();

          return (
            <Link
              key={specialty.name}
              href={`/doctor/${specialty.name.toLowerCase()}`}
              className="bg-gradient-to-r from-green-300 via-green-300 to-blue-100 rounded-full shadow-lg flex flex-col items-center justify-center text-white hover:from-green-400 hover:via-green-400 hover:to-blue-200 hover:scale-105 transition-transform duration-300 cursor-pointer aspect-square"
            >
              <div className="mb-2">{specialty.icon}</div>
              <h3 className="text-lg font-bold text-center text-gray-800">
                {specialty.name}
              </h3>
              <p className="text-sm font-medium opacity-90 text-center text-gray-700">
                {specialty.desc}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Doctors Near You Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-8">
          Doctors Near You
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Doctor Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-4 flex flex-col flex-1">
                {/* Top Row: Name + Rating */}
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-800">
                    {doctor.name}
                  </h4>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                <p className="text-sm text-gray-500">{doctor.experience}</p>
                <p className="text-sm text-gray-700 font-medium">
                  {doctor.degree}
                </p>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mt-2">
                  Consultation Fee: {doctor.fee}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-4">
                  <Link
                    href={`/doctor/book/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white  py-2 rounded-lg text-center font-bold hover:opacity-90 transition"
                  >
                    Book
                  </Link>
                  <Link
                    href={`/doctor/doctor-profile/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1  bg-gradient-to-r from-blue-500 to-green-500 bg-clip-border text-white  py-2 rounded-md text-center font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition"
                    style={{borderImage: 'linear-gradient(to right, rgb(59 130 246), rgb(34 197 94)) 1'}}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
