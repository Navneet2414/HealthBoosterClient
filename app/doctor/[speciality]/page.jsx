// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";


// const allDoctors = [
//   // Cardiologists
//   { id: 1, name: "Dr. Sarah Johnson", specialty: "cardiologist", rating: 4.9, experience: "15 years", image: "/images/doctordemo.jpg", location: "New York" },
//   { id: 2, name: "Dr. David Smith", specialty: "cardiologist", rating: 4.8, experience: "20 years", image: "/images/doctordemo.jpg", location: "California" },
//   { id: 3, name: "Dr. Maria Garcia", specialty: "cardiologist", rating: 4.7, experience: "12 years", image: "/images/doctordemo.jpg", location: "Texas" },
  
//   // Dermatologists
//   { id: 4, name: "Dr. Michael Chen", specialty: "dermatologist", rating: 4.8, experience: "12 years", image: "/images/doctordemo.jpg", location: "Florida" },
//   { id: 5, name: "Dr. Jennifer Lee", specialty: "dermatologist", rating: 4.9, experience: "14 years", image: "/images/doctordemo.jpg", location: "Illinois" },
//   { id: 6, name: "Dr. Alex Thompson", specialty: "dermatologist", rating: 4.6, experience: "10 years", image: "/images/doctordemo.jpg", location: "Nevada" },
  
//   // Pediatricians
//   { id: 7, name: "Dr. Emily Davis", specialty: "pediatrician", rating: 4.9, experience: "10 years", image: "/images/doctordemo.jpg", location: "Washington" },  
//   { id: 8, name: "Dr. Kevin Brown", specialty: "pediatrician", rating: 4.8, experience: "16 years", image: "/images/doctordemo.jpg", location: "Oregon" },
//   { id: 9, name: "Dr. Amanda Wilson", specialty: "pediatrician", rating: 4.7, experience: "8 years", image: "/images/doctordemo.jpg", location: "Colorado" },
  
//   // Neurologists
//   { id: 10, name: "Dr. Robert Wilson", specialty: "neurologist", rating: 4.7, experience: "18 years", image: "/images/doctordemo.jpg", location: "Arizona" },
//   { id: 11, name: "Dr. Susan Taylor", specialty: "neurologist", rating: 4.8, experience: "22 years", image: "/images/doctordemo.jpg", location: "Michigan" },
//   { id: 12, name: "Dr. Mark Johnson", specialty: "neurologist", rating: 4.6, experience: "13 years", image: "/images/doctordemo.jpg", location: "Ohio" },
  
//   // Orthopedists
//   { id: 13, name: "Dr. Lisa Brown", specialty: "orthopedist", rating: 4.8, experience: "14 years", image: "/images/doctordemo.jpg", location: "Georgia" },
//   { id: 14, name: "Dr. Paul Martinez", specialty: "orthopedist", rating: 4.9, experience: "19 years", image: "/images/doctordemo.jpg", location: "North Carolina" },
//   { id: 15, name: "Dr. Rachel Green", specialty: "orthopedist", rating: 4.7, experience: "11 years", image: "/images/doctordemo.jpg", location: "Virginia" }, 
  
//   // Gynecologists
//   { id: 16, name: "Dr. James Miller", specialty: "gynecologist", rating: 4.9, experience: "16 years", image: "/images/doctordemo.jpg", location: "Pennsylvania" },
//   { id: 17, name: "Dr. Catherine White", specialty: "gynecologist", rating: 4.8, experience: "13 years", image: "/images/doctordemo.jpg", location: "Massachusetts" },
//   { id: 18, name: "Dr. Daniel Clark", specialty: "gynecologist", rating: 4.7, experience: "17 years", image: "/images/doctordemo.jpg", location: "Maryland" },
// ];

// const specialtyInfo = {
//   cardiologist: { name: "Cardiologist", desc: "Heart Specialists", icon: "❤️" },
//   dermatologist: { name: "Dermatologist", desc: "Skin Specialists", icon: "🧴" },
//   pediatrician: { name: "Pediatrician", desc: "Child Specialists", icon: "👶" },
//   neurologist: { name: "Neurologist", desc: "Brain Specialists", icon: "🧠" },
//   orthopedist: { name: "Orthopedist", desc: "Bone Specialists", icon: "🦴" },
//   gynecologist: { name: "Gynecologist", desc: "Women's Health Specialists", icon: "👩‍⚕️" },
// };

// export default function SpecialtyPage({ params }) {
//     const unwrappedParams = React.use(params);
//   const specialty = unwrappedParams.speciality;
//   const filteredDoctors = allDoctors.filter((doctor) => doctor.specialty === specialty);
//   const currentSpecialty = specialtyInfo[specialty];

//   if (!currentSpecialty) {
//     return <div className="text-center py-8">Specialty not found</div>;
//   }

//   return (
//     <div className="mx-auto px-4 py-8">
//       {/* Specialty Header */}
//       <div className="bg-gradient-to-r from-green-400 via-green-500 to-blue-600 rounded-2xl p-8 mb-8 text-white text-center">
//         <div className="text-6xl mb-4">{currentSpecialty.icon}</div>
//         <h1 className="text-3xl font-bold mb-2">{currentSpecialty.name}</h1>
//         <p className="text-xl opacity-90">{currentSpecialty.desc}</p>
//         <p className="mt-4 text-lg">{filteredDoctors.length} Doctors Available</p>
//       </div>

//       {/* Back Button */}
//       <Link
//         href="/doctor"
//         className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 font-medium"
//       >
//         ← Back to Specialties
//       </Link>

//       {/* Doctors List */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {filteredDoctors.map((doctor) => (
//           <div
//             key={doctor.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
//           >
//             {/* Doctor Image */}
//             <div className="relative h-48 w-full">
//               <Image
//                 src={doctor.image}
//                 alt={doctor.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Doctor Info */}
//             <div className="p-4 flex flex-col flex-1">
//               {/* Top Row: Name + Rating */}
//               <div className="flex justify-between items-center">
//                 <h4 className="text-xl font-bold text-gray-800">{doctor.name}</h4>
//                 <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
//                   <FaStar className="text-yellow-500 mr-1" />
//                   <span className="text-sm font-medium">{doctor.rating}</span>
//                 </div>
//               </div>

//               <p className="text-sm text-gray-600">{currentSpecialty.name}</p>
//               <p className="text-sm text-gray-500">{doctor.experience}</p>
//               <p className="text-sm text-gray-700 font-medium">{doctor.degree}</p>
//               <p className="text-lg font-semibold text-green-700 mt-2">
//                 Consultation Fee: {doctor.fee}
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-3 mt-auto pt-4">
//                 <Link
//                   href={`/doctor/book/${doctor.name.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="flex-1 bg-green-500 text-white py-2 rounded-lg text-center font-medium hover:bg-green-600 transition"
//                 >
//                   Book
//                 </Link>
//                 <Link
//                   href={`/doctor/${specialty}/${doctor.name.toLowerCase().replace(/\s+/g, "-")}/preview-profile`}                >
//                   View Profile
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Speciality from "@/components/doctor/DoctorSpeciality";

export default function SpecialtyPage({ params }) {
  return (
    <div>
      <Speciality params={params} />
    </div>
  );
}``