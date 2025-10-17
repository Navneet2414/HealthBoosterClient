// "use client";
// import React from "react";
// import Link from "next/link";
// import slugify from "slugify";
// import { motion } from "framer-motion";
// import { useGetFeaturedDoctorsQuery, useGetLatestDoctorsQuery } from "@/lib/store/api/doctorApi";



// export default function FeaturedDoctors() {
//   const { data: latestDoctors, isLoading } = useGetLatestDoctorsQuery();
//   console.log("Latest Doctors:", latestDoctors?.data);

//   return (
//     <section className="py-12 bg-white text-center">
//       <h2 className="text-3xl font-bold text-gray-800 mb-2">
//         Featured Doctors
//       </h2>
//       <p className="text-gray-600 mb-8">
//         Consult with our top-rated doctors across various specializations
//       </p>

//       {/* Doctors Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
//         {latestDoctors?.data?.map((item) => {
//           const doc = item.doctor;
//           const slug = slugify(doc.name, {
//             lower: true,
//             strict: true,
//             trim: true,
//           });

//           return (
//             <Link
//               key={doc._id}
//               href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slug}-${doc._id}`}
//               className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4 hover:shadow-xl transition"
//             >
//               {/* Doctor Image */}
//               <img
//                 src={doc.profileImage ? (doc.profileImage.startsWith('http') ? doc.profileImage : `/images/${doc.profileImage}`) : "https://randomuser.me/api/portraits/men/32.jpg"}
//                 alt={doc.name}
//                 className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
//               />

//               {/* Doctor Info */}
//               <div className="flex-1 text-left">
//                 <h3 className="font-semibold text-lg">{doc.name}</h3>
//                 <p className="text-blue-500 text-sm font-medium">
//                   {doc.specialization}
//                 </p>

//                 {/* Rating */}
//                 <p className="text-gray-700 text-sm mt-1">
//                   ⭐ 4.8{" "}
//                   <span className="text-gray-500">
//                     (150+ reviews)
//                   </span>
//                 </p>

//                 {/* Location & Experience */}
//                 <p className="text-gray-500 text-sm mt-1">
//                   📍 {doc.address?.country || "India"} • {doc.experience}+ years
//                 </p>

//                 {/* Fee */}
//                 <p className="text-gray-700 text-sm font-semibold mt-2">
//                   Consultation Fee:{" "}
//                   <span className="text-green-600">₹{doc.consultationFee}</span>
//                 </p>

//                 {/* Languages */}
//                 <div className="flex gap-2 mt-2">
//                   <span className="text-xs px-2 py-1 rounded-md border text-gray-700">
//                     English
//                   </span>
//                   <span className="text-xs px-2 py-1 rounded-md border text-gray-700">
//                     Hindi
//                   </span>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-2 mt-4">
//                   <Link
//                     href={`/doctor/book-appointment/${doc.specialization.toLowerCase()}/${doc.address?.city || 'india'}/${slug}/${doc._id}`}
//                     onClick={(e) => e.stopPropagation()}
//                     className="flex items-center gap-2 px-3 py-2 border border-blue-500 text-blue-500 rounded-lg text-sm hover:bg-blue-50"
//                   >
//                     📅 Book
//                   </Link>
//                   <button className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-600 rounded-lg text-sm hover:bg-green-200">
//                     🎥 Video Call
//                   </button>
//                 </div>
//               </div>

//               {/* Availability Badge */}
//               <span className="ml-auto px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
//                 {doc.status === 'active' ? 'Available' : 'Busy'}
//               </span>
//             </Link>
//           );
//         })}
//       </div>

//       {/* View All Doctors Button */}
//       <div className="mt-10">
//         <button
//           onClick={() => alert("Redirecting to all doctors page...")}
//           className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
//         >
//           View All Doctors
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import Link from "next/link";
import slugify from "slugify";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useGetLatestDoctorsQuery } from "@/lib/store/api/doctorApi";

export default function FeaturedDoctors() {
  const { data: latestDoctors, isLoading } = useGetLatestDoctorsQuery();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
        Featured Doctors
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Consult with our top-rated doctors across various specializations.
      </p>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {latestDoctors?.data?.map((item, index) => {
          const doc = item.doctor;
          const slug = slugify(doc.name, { lower: true, strict: true, trim: true });

          return (
            <motion.div
              key={doc._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden transform hover:-translate-y-2 relative">
                {/* Card Header with Gradient */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                  
                  {/* Doctor Image */}
                  <div className="relative flex justify-center">
                    <div className="relative">
                      <img
                        src={
                          doc.profileImage
                            ? doc.profileImage.startsWith("http")
                              ? doc.profileImage
                              : `/images/${doc.profileImage}`
                            : "https://randomuser.me/api/portraits/men/32.jpg"
                        }
                        alt={doc.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Status Badge - Below Image Center */}
                  <div className="flex justify-center mt-4">
                    <span className={`px-4 py-2 text-xs rounded-full font-bold shadow-lg ${
                      doc.status === "active"
                        ? "bg-gradient-to-r from-green-400 to-green-500 text-white"
                        : "bg-gradient-to-r from-red-400 to-red-500 text-white"
                    }`}>
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          doc.status === "active" ? "bg-white animate-pulse" : "bg-white/80"
                        }`}></span>
                        {doc.status === "active" ? "Available" : "Busy"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Doctor Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {doc.name}
                    </h3>
                    <p className="text-blue-500 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full inline-block mt-2">
                      {doc.specialization}
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-800">{doc.experience}+ years</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="font-semibold text-gray-800 flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-500" /> 4.8
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="font-semibold text-gray-800 flex items-center justify-center gap-1">
                        <FaMapMarkerAlt className="text-red-500" /> {doc.address?.country || "India"}
                      </p>
                    </div>
                  </div>

                  {/* Fee Highlight */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 text-center border border-green-100">
                    <p className="text-sm text-gray-600 mb-1">Consultation Fee</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{doc.consultationFee}
                    </p>
                  </div>

                  {/* Languages */}
                  <div className="flex justify-center gap-2">
                    {["English", "Hindi"].map((lang) => (
                      <span
                        key={lang}
                        className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Link
                      href={`/doctor/book-appointment/${doc.specialization.toLowerCase()}/${doc.address?.city || 'india'}/${slug}/${doc._id}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FaCalendarAlt /> Book Appointment
                    </Link>
                    <Link
                      href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${slug}-${doc._id}`}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FaUser /> View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Doctors Button */}
      <div className="mt-12">
        <button
          onClick={() => alert("Redirecting to all doctors page...")}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          View All Doctors
        </button>
      </div>
    </section>
  );
}
