// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FaSearch, FaStar } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import Image from "next/image";
// import slugify from "slugify";

// export default function DoctorListing() {
//   const [doctors] = useState([
//     {
//       id: 1,
//       name: "Dr. Rajesh Kumar",
//       specialization: "Cardiologist",
//       degree: "MBBS, MD (Cardiology)",
//       rating: 4.9,
//       reviews: 234,
//       experience: "15+ years",
//       hospital: "Apollo Hospital, Mumbai",
//       languages: ["English", "Hindi"],
//       fee: 800,
//       nextAvailable: "2:30 PM",
//       image: "/images/doctordemo.jpg",
//     },
//     {
//       id: 2,
//       name: "Dr. Sneha Sharma",
//       specialization: "Dermatologist",
//       degree: "MBBS, MD (Dermatology)",
//       rating: 4.7,
//       reviews: 189,
//       experience: "10 years",
//       hospital: "Fortis Hospital, Delhi",
//       languages: ["English", "Hindi"],
//       fee: 600,
//       nextAvailable: "4:00 PM",
//       image: "/images/doctordemo.jpg",
//     },
//     {
//       id: 3,
//       name: "Dr. Amit Verma",
//       specialization: "Neurologist",
//       degree: "MBBS, DM (Neurology)",
//       rating: 4.8,
//       reviews: 310,
//       experience: "12 years",
//       hospital: "AIIMS, Delhi",
//       languages: ["English", "Hindi"],
//       fee: 1200,
//       nextAvailable: "6:00 PM",
//       image: "/images/doctordemo.jpg",
//     },
//     {
//       id: 4,
//       name: "Dr. Amit Verma",
//       specialization: "Neurologist",
//       degree: "MBBS, DM (Neurology)",
//       rating: 4.8,
//       reviews: 310,
//       experience: "12 years",
//       hospital: "AIIMS, Delhi",
//       languages: ["English", "Hindi"],
//       fee: 1200,
//       nextAvailable: "6:00 PM",
//       image: "/images/doctordemo.jpg",
//     },
//     {
//       id: 5,
//       name: "Dr. Amit Verma",
//       specialization: "Neurologist",
//       degree: "MBBS, DM (Neurology)",
//       rating: 4.8,
//       reviews: 310,
//       experience: "12 years",
//       hospital: "AIIMS, Delhi",
//       languages: ["English", "Hindi"],
//       fee: 1200,
//       nextAvailable: "6:00 PM",
//       image: "/images/doctordemo.jpg",
//     },
//     {
//       id: 6,
//       name: "Dr. Amit Verma",
//       specialization: "Neurologist",
//       degree: "MBBS, DM (Neurology)",
//       rating: 4.8,
//       reviews: 310,
//       experience: "12 years",
//       hospital: "AIIMS, Delhi",
//       languages: ["English", "Hindi"],
//       fee: 1200,
//       nextAvailable: "6:00 PM",
//       image: "/images/doctordemo.jpg",
//     },
//   ]);

//   return (
//     <div className="w-full bg-gray-50">
//       {/* Top Search Section */}
//       <div className="bg-gradient-to-r from-blue-400 to-green-400 py-12 px-4 text-center text-white">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2">Find the Best Doctors</h1>
//         <p className="mb-6">Connect with verified doctors across specializations</p>

//         {/* Search Bar */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-5xl mx-auto bg-white rounded-full p-4 shadow-lg">
//           {/* Search Input */}
//           <div className="flex items-center w-full md:w-1/3 border border-gray-300 px-4 py-2 rounded-md bg-white">
//             <FaSearch className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Search doctors, conditions"
//               className="w-full outline-none text-gray-700 placeholder-gray-400"
//             />
//           </div>

//           {/* Specialization Dropdown */}
//           <select className="w-full md:w-1/4 border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700">
//             <option>Specialization</option>
//             <option>Cardiologist</option>
//             <option>Dermatologist</option>
//             <option>Neurologist</option>
//           </select>

//           {/* Location Dropdown */}
//           <select className="w-full md:w-1/4 border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700">
//             <option>Location</option>
//             <option>Mumbai</option>
//             <option>Delhi</option>
//           </select>

//           {/* Search Button */}
//           <button className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-2 rounded-md font-semibold transition hover:opacity-90">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Filters + Doctors Section */}
//       <div className="flex flex-col md:flex-row mx-auto p-6 gap-6">
//         {/* Filters Sidebar */}
//         <div className="md:w-1/4 bg-white shadow rounded-lg p-5 h-fit sticky top-6">
//           <h2 className="font-semibold text-lg mb-3">Filters</h2>

//           <div className="mb-4">
//             <h3 className="font-medium mb-2">Availability</h3>
//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" className="h-4 w-4 text-blue-600" />
//                 Available Today
//               </label>
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" className="h-4 w-4 text-blue-600" />
//                 Available Tomorrow
//               </label>
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" className="h-4 w-4 text-blue-600" />
//                 Video Consultation
//               </label>
//             </div>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-medium mb-2">Consultation Fee</h3>
//             <input
//               type="range"
//               min="0"
//               max="2000"
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//             />
//             <div className="flex justify-between text-sm text-gray-500 mt-1">
//               <span>₹0</span>
//               <span>₹2000+</span>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-medium mb-2">Experience</h3>
//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" className="h-4 w-4 text-blue-600" />
//                 0–5 years
//               </label>
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" className="h-4 w-4 text-blue-600" />
//                 5–10 years
//               </label>
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" className="h-4 w-4 text-blue-600" />
//                 10+ years
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Doctor List */}
//         <div className="md:w-3/4 bg-white rounded-lg shadow p-5 overflow-y-auto max-h-[600px]">
//           <h2 className="font-semibold text-lg mb-3">
//             Available Doctors{" "}
//             <span className="text-gray-500">({doctors.length} found)</span>
//           </h2>

//           <div className="flex justify-end mb-4">
//             <select className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700">
//               <option>Sort by</option>
//               <option>Rating (High to Low)</option>
//               <option>Rating (Low to High)</option>
//               <option>Fee (Low to High)</option>
//               <option>Fee (High to Low)</option>
//               <option>Experience (High to Low)</option>
//               <option>Experience (Low to High)</option>
//             </select>
//           </div>

//           <div className="space-y-4">
//             {doctors.map((doc) => (
//               <div
//                 key={doc.id}
//                 className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
//               >
//                 {/* Doctor Card */}
//                 <div className="bg-white p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-start">
//                   {/* Profile Picture */}
//                   <div className="flex-shrink-0">
//                     <Image
//                       src={doc.image}
//                       alt={doc.name}
//                       width={80}
//                       height={80}
//                       className="w-60 h-60 rounded-lg object-cover border-2 border-green-100 shadow-sm"
//                       priority={doc.id === 1} // Optional: prioritize first image
//                     />
//                   </div>

//                   {/* Info Section */}
//                   <div className="flex-1 min-w-0">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <h3 className="font-bold text-lg text-gray-900 truncate">{doc.name}</h3>
//                         <p className="text-blue-600 font-medium">{doc.specialization}</p>
//                         <p className="text-gray-600 text-sm mt-1">{doc.degree}</p>

//                         <div className="flex items-center gap-3 mt-2 text-sm text-gray-700">
//                           <div className="flex items-center gap-1">
//                             <FaStar className="text-yellow-400" size={14} />
//                             <span className="font-semibold">{doc.rating}</span>
//                             <span className="text-gray-500">({doc.reviews} reviews)</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <svg
//                               className="w-4 h-4 text-gray-500"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                               />
//                             </svg>
//                             <span>{doc.experience}</span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
//                           <MdLocationOn className="text-gray-500" size={16} />
//                           <span className="truncate">{doc.hospital}</span>
//                         </div>

//                         <div className="flex gap-2 mt-2">
//                           {doc.languages.map((lang, i) => (
//                             <span
//                               key={i}
//                               className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
//                             >
//                               {lang}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Today Badge */}
//                       <span className="bg-gradient-to-r from-green-400 via-green-500 to-blue-600 text-white font-bold text-base px-2 py-1 rounded-full whitespace-nowrap self-start">
//                         Today
//                       </span>                    </div>

//                     {/* Fee & Buttons */}
//                     <div className="flex flex-wrap justify-between items-center gap-4 mt-4 pt-4 border-t border-gray-100">
//                       <div className="flex flex-col">
//                         <p className="text-sm text-gray-600">Consultation Fee</p>
//                         <p className="text-green-600 font-bold text-lg">₹{doc.fee}</p>
//                       </div>

//                       <div className="flex flex-col">
//                         <p className="text-sm text-gray-600">Next Available</p>
//                         <p className="text-gray-700 flex items-center gap-1">
//                           <svg
//                             className="w-4 h-4"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                             />
//                           </svg>
//                           <span>{doc.nextAvailable}</span>
//                         </p>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex gap-2">
//                         <Link
//                           href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slugify(
//                             doc.name,
//                             { lower: true, strict: true, trim: true }
//                           )}`}
//                           className="border border-blue-500 text-blue-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition"
//                         >
//                           View Profile
//                         </Link>
//                         <Link
//                           href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slugify(
//                             doc.name,
//                             { lower: true, strict: true, trim: true }
//                           )}/appointment`}
//                           className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition flex items-center gap-1"
//                         >
//                           <svg
//                             className="w-4 h-4"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                             />
//                           </svg>
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import Link from "next/link";
// import { FaHeart, FaBrain, FaBaby } from "react-icons/fa";
// import { GiBoneKnife, GiFemale, GiBodyBalance } from "react-icons/gi";

// const specialties = [
//   { name: "Cardiologist", desc: "Heart Specialist", icon: <FaHeart color="red" size={80} /> },
//   { name: "Dermatologist", desc: "Skin Specialist", icon: <GiBodyBalance name="skin" color="green" size={80} /> },
//   { name: "Pediatrician", desc: "Child Specialist", icon: <FaBaby color="blue" size={80} /> },
//   { name: "Neurologist", desc: "Brain Specialist", icon: <FaBrain color="orange" size={80} /> },
//   { name: "Orthopedist", desc: "Bone Specialist", icon: <GiBoneKnife color="purple" size={80} /> },
//   { name: "Gynecologist", desc: "Women's Health", icon: <GiFemale color="pink" size={80} /> },
// ];

// export default function SpecialityCards() {
//   return (
//     <section className="mx-auto px-4 py-8">
//       <h2 className="text-4xl font-bold mb-6">Top Specialties</h2>

//       <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//         {specialties.map((specialty) => (
//           <Link
//             key={specialty.name}
//             href={`/doctor/doctor-profile/${encodeURIComponent(
//               // specialty.name.toLowerCase()
//               (specialty?.name || "").toLowerCase()
//             )}`}
//             className="  bg-gradient-to-r from-green-300 via-green-300 to-blue-100 rounded-full shadow-lg flex flex-col items-center justify-center text-white hover:bg-gradient-to-r hover:from-green-300 hover:via-green-300 hover:to-blue-300 hover:scale-105 transition-transform duration-300 cursor-pointer aspect-square"
//           >
//             <div className="text-7xl font-bold mb-2">{specialty.icon}</div>
//             <h3 className="text-xl font-bold text-center">{specialty.name}</h3>
//             <p className="text-lg font-bold opacity-90 text-center">{specialty.desc}</p>
//           </Link>
//         ))}
//       </div>
//      <div className="flex justify-center mt-8">
//       <p className="text-3xl font-bold">Doctors Near You</p>


//      </div>

//     </section>
//   );
// }

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
];

export default function SpecialityCards() {
  return (
    <section className="mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
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
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
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
                <p className="text-lg font-semibold text-green-700 mt-2">
                  Consultation Fee: {doctor.fee}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-4">
                  <Link
                    href={`/doctor/book/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg text-center font-medium hover:bg-green-600 transition"
                  >
                    Book
                  </Link>
                  <Link
                    href={`/doctor/doctor-profile/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-center font-medium hover:bg-gray-100 transition"
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
