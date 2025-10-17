"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import slugify from "slugify";
import { FaStar, FaArrowLeft, FaGraduationCap, FaClock, FaRupeeSign, FaCalendarAlt, FaEye, FaHeart, FaBrain, FaBaby, FaBone, FaFemale, FaStethoscope, FaUserMd } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdLocalHospital, MdSpa, MdPsychology } from "react-icons/md";
import { useGetSpecialityDoctorsQuery } from "@/lib/store/api/doctorApi";


const allDoctors = [
  // Cardiologists
  { id: 1, name: "Dr. Sarah Johnson", specialty: "cardiologist", rating: 4.9, experience: "15 years", image: "/images/doctordemo.jpg", location: "New York" },
  { id: 2, name: "Dr. David Smith", specialty: "cardiologist", rating: 4.8, experience: "20 years", image: "/images/doctordemo.jpg", location: "California" },
  { id: 3, name: "Dr. Maria Garcia", specialty: "cardiologist", rating: 4.7, experience: "12 years", image: "/images/doctordemo.jpg", location: "Texas" },
  
  // Dermatologists
  { id: 4, name: "Dr. Michael Chen", specialty: "dermatologist", rating: 4.8, experience: "12 years", image: "/images/doctordemo.jpg", location: "Florida" },
  { id: 5, name: "Dr. Jennifer Lee", specialty: "dermatologist", rating: 4.9, experience: "14 years", image: "/images/doctordemo.jpg", location: "Illinois" },
  { id: 6, name: "Dr. Alex Thompson", specialty: "dermatologist", rating: 4.6, experience: "10 years", image: "/images/doctordemo.jpg", location: "Nevada" },
  
  // Pediatricians
  { id: 7, name: "Dr. Emily Davis", specialty: "pediatrician", rating: 4.9, experience: "10 years", image: "/images/doctordemo.jpg", location: "Washington" },  
  { id: 8, name: "Dr. Kevin Brown", specialty: "pediatrician", rating: 4.8, experience: "16 years", image: "/images/doctordemo.jpg", location: "Oregon" },
  { id: 9, name: "Dr. Amanda Wilson", specialty: "pediatrician", rating: 4.7, experience: "8 years", image: "/images/doctordemo.jpg", location: "Colorado" },
  
  // Neurologists
  { id: 10, name: "Dr. Robert Wilson", specialty: "neurologist", rating: 4.7, experience: "18 years", image: "/images/doctordemo.jpg", location: "Arizona" },
  { id: 11, name: "Dr. Susan Taylor", specialty: "neurologist", rating: 4.8, experience: "22 years", image: "/images/doctordemo.jpg", location: "Michigan" },
  { id: 12, name: "Dr. Mark Johnson", specialty: "neurologist", rating: 4.6, experience: "13 years", image: "/images/doctordemo.jpg", location: "Ohio" },
  
  // Orthopedists
  { id: 13, name: "Dr. Lisa Brown", specialty: "orthopedist", rating: 4.8, experience: "14 years", image: "/images/doctordemo.jpg", location: "Georgia" },
  { id: 14, name: "Dr. Paul Martinez", specialty: "orthopedist", rating: 4.9, experience: "19 years", image: "/images/doctordemo.jpg", location: "North Carolina" },
  { id: 15, name: "Dr. Rachel Green", specialty: "orthopedist", rating: 4.7, experience: "11 years", image: "/images/doctordemo.jpg", location: "Virginia" }, 
  
  // Gynecologists
  { id: 16, name: "Dr. James Miller", specialty: "gynecologist", rating: 4.9, experience: "16 years", image: "/images/doctordemo.jpg", location: "Pennsylvania" },
  { id: 17, name: "Dr. Catherine White", specialty: "gynecologist", rating: 4.8, experience: "13 years", image: "/images/doctordemo.jpg", location: "Massachusetts" },
  { id: 18, name: "Dr. Daniel Clark", specialty: "gynecologist", rating: 4.7, experience: "17 years", image: "/images/doctordemo.jpg", location: "Maryland" },
];

const specialtyInfo = {
  cardiologist: { name: "Cardiologist", desc: "Heart Specialists", icon: "❤️" },
  dermatologist: { name: "Dermatologist", desc: "Skin Specialists", icon: "🧴" },
  pediatrician: { name: "Pediatrician", desc: "Child Specialists", icon: "👶" },
  neurologist: { name: "Neurologist", desc: "Brain Specialists", icon: "🧠" },
  orthopedist: { name: "Orthopedist", desc: "Bone Specialists", icon: "🦴" },
  gynecologist: { name: "Gynecologist", desc: "Women's Health Specialists", icon: "👩‍⚕️" },
};

export default function SpecialtyPage({ params }) {
  const unwrappedParams = React.use(params);
  const specialty = unwrappedParams.speciality;
  
  const { data: doctorsData, error, isLoading } = useGetSpecialityDoctorsQuery(specialty.charAt(0).toUpperCase() + specialty.slice(1));
  const doctors = doctorsData?.doctors || [];
  
  const getSpecialtyInfo = (specialty) => {
    const name = specialty?.toLowerCase();
    if (name?.includes('cardio')) return { name: "Cardiologist", desc: "Heart Specialists", icon: FaHeartPulse };
    if (name?.includes('dermato')) return { name: "Dermatologist", desc: "Skin Specialists", icon: MdSpa };
    if (name?.includes('general')) return { name: "General Physician", desc: "General Medicine", icon: FaStethoscope };
    if (name?.includes('ortho')) return { name: "Orthopedics", desc: "Bone Specialists", icon: FaBone };
    return { name: specialty, desc: "Medical Specialists", icon: FaUserMd };
  };
  
  const currentSpecialty = getSpecialtyInfo(specialty);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto px-4 py-8 max-w-7xl">
          <div className="animate-pulse">
            <div className="bg-gradient-to-r from-blue-300 to-green-300 rounded-3xl h-56 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-xl">
                  <div className="bg-gradient-to-r from-blue-200 to-green-200 h-64 rounded-2xl mb-6"></div>
                  <div className="space-y-4">
                    <div className="bg-blue-200 h-8 rounded-full w-3/4"></div>
                    <div className="bg-green-200 h-6 rounded-full w-1/2"></div>
                    <div className="bg-gray-200 h-6 rounded-full w-2/3"></div>
                    <div className="flex gap-4 mt-6">
                      <div className="bg-blue-300 h-14 rounded-2xl flex-1"></div>
                      <div className="bg-green-300 h-14 rounded-2xl flex-1"></div>
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

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto px-4 py-8 max-w-7xl text-center">
          <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-10 max-w-md mx-auto shadow-2xl">
            <div className="text-red-500 text-6xl mb-6">⚠️</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">Unable to Load Doctors</h2>
            <p className="text-red-600 mb-6 text-lg">Please check your connection and try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        {/* Specialty Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-3xl p-10 mb-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20"></div>
          <div className="relative z-10 text-center">
            <div className="text-7xl mb-6 drop-shadow-lg text-white flex justify-center">
              <currentSpecialty.icon />
            </div>
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">{currentSpecialty.name}</h1>
            <p className="text-2xl mb-4 font-medium">{currentSpecialty.desc}</p>
            <div className="inline-flex items-center bg-white/30 backdrop-blur-md rounded-full px-6 py-3 mt-4 shadow-lg">
              <span className="text-xl font-bold">{doctors.length} Expert Doctors Available</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/doctor"
          className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 font-bold text-lg transition-all duration-200 group bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Specialties
        </Link>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => {
            const slug = slugify(doctor.name, { lower: true, strict: true, trim: true });
            
            return (
            <div
              key={doctor._id || doctor.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-2"
            >
              {/* Doctor Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={doctor.profileImage || "/images/doctordemo.jpg"}
                  unoptimized
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                {(doctor.rating || doctor.rating === 0) && (
                  <div className="absolute top-4 right-4 flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 rounded-full shadow-lg">
                    <FaStar className="text-white mr-1" />
                    <span className="font-bold">{doctor.rating}</span>
                  </div>
                )}
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{doctor.name}</h4>
                <p className="text-blue-600 font-bold text-lg mb-3">{doctor.specialization || currentSpecialty.name}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <FaGraduationCap className="mr-3 text-blue-500 text-xl" />
                    <span className="text-lg">{doctor.degree || 'Medical Professional'}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaClock className="mr-3 text-green-500 text-xl" />
                    <span className="text-lg">{doctor.experience || 'N/A'} years experience</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border-l-4 border-blue-500">
                    <div className="flex items-center">
                      <FaRupeeSign className="text-green-600 mr-2 text-xl" />
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        {doctor.consultationFee || 'N/A'}
                      </p>
                    </div>
                    <p className="text-gray-600 font-medium">Consultation Fee</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    href={`/doctor/book-appointment/${specialty}/${slug}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Book Now
                  </Link>
                  <Link
                    href={`/doctor/doctor-profile/${specialty}/${slug}-${doctor._id || doctor.id}`}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                  >
                    <FaEye className="mr-2" />
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
