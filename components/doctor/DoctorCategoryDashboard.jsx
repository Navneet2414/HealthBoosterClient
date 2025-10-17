"use client";
import Link from "next/link";
import Image from "next/image";
import slugify from "slugify";
import { FaStar, FaHeart, FaBrain, FaEye, FaBone, FaChild, FaUserMd, FaStethoscope, FaTooth, FaLungs, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa";
import { useGetDoctorSpecialitiesQuery, useGetAllDoctorsQuery } from "@/lib/store/api/doctorApi";

// Specialty icon mapping
const getSpecialtyIcon = (specialtyName) => {
  const name = specialtyName?.toLowerCase();
  if (name?.includes('cardio')) return FaHeart;
  if (name?.includes('neuro')) return FaBrain;
  if (name?.includes('eye') || name?.includes('ophthal')) return FaEye;
  if (name?.includes('ortho') || name?.includes('bone')) return FaBone;
  if (name?.includes('pediatr') || name?.includes('child')) return FaChild;
  if (name?.includes('dent') || name?.includes('oral')) return FaTooth;
  if (name?.includes('pulmo') || name?.includes('lung')) return FaLungs;
  if (name?.includes('general')) return FaStethoscope;
  return FaUserMd; 
};

export default function SpecialityCards({ selectedSpecialty }) {
  // Fetch Specialties and Doctors from API
  const { data: specialtiesData, error: specialtiesError, isLoading: specialtiesLoading } = useGetDoctorSpecialitiesQuery();
  const { data: doctorsData, error: doctorsError, isLoading: doctorsLoading } = useGetAllDoctorsQuery();

  const specialties = specialtiesData?.specializations || [];
  const doctors = doctorsData?.doctors || doctorsData || [];

  console.log('Specialties Data:', specialtiesData);
  console.log('Specialties Array:', specialties);
  console.log('Doctors Data:', doctorsData);
  console.log('Doctors Array:', doctors);

  if (specialtiesLoading || doctorsLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (specialtiesError || doctorsError) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-red-500">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-200/20 to-blue-200/20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className=" mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Top Medical Specialties
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of medical specializations with expert doctors
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialties.length > 0 ? (
            specialties.map((specialty, index) => {
              const IconComponent = getSpecialtyIcon(specialty);
              return (
                <Link
                  key={index}
                  href={`/doctor/${specialty?.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 p-6 flex flex-col items-center text-center relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-full -translate-y-10 translate-x-10"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Specialty Name */}
                  <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {specialty}
                  </h3>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <FaUserMd className="text-4xl text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-600">
                  No specialties available at the moment.
                </p>
                <p className="text-gray-500 mt-2">
                  Please check back later for updates.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Doctors Near You Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-8">
          Doctors Near You
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 max-w-7xl mx-auto">
          {doctors.length > 0 ? (
            doctors.map((doctor) => {
              const slug = slugify(doctor.name, {
                lower: true,
                strict: true,
                trim: true,
              });
              
              return (
                <div
                  key={doctor._id || doctor.id}
                  className="group bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative w-full max-w-sm mx-auto"
                >
                  {/* Doctor Image Section */}
                  <div className="relative h-64 sm:h-72 lg:h-64 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="w-full h-full overflow-hidden rounded-t-3xl">
                      {doctor.profileImage ? (
                        <img
                          src={doctor.profileImage.startsWith('http') ? doctor.profileImage : `/images/${doctor.profileImage}`}
                          alt={doctor.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      
                      {/* Fallback when no image or image fails to load */}
                      <div className={`w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center ${doctor.profileImage ? 'hidden' : 'flex'}`}>
                        <FaUserMd className="text-4xl sm:text-5xl lg:text-6xl text-blue-600" />
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-t-3xl"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm font-bold text-gray-800">
                          {doctor.rating || "4.8"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                      Available
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1 space-y-3 sm:space-y-4">
                    {/* Header */}
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2 leading-tight">
                        {doctor.name}
                      </h4>
                      <p className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full inline-block text-xs sm:text-sm">
                        {doctor.specialization || "General Physician"}
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                        <FaGraduationCap className="text-blue-600 text-sm sm:text-lg mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="font-bold text-gray-800 text-xs sm:text-sm">{doctor.experience || "5"}+ years</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                        <FaMapMarkerAlt className="text-green-600 text-sm sm:text-lg mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-bold text-gray-800 text-xs sm:text-sm">{doctor.address?.city || "Delhi"}</p>
                      </div>
                    </div>

                    {/* Degree */}
                    {doctor.degree && (
                      <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                        <p className="text-xs sm:text-sm font-medium text-gray-700">{doctor.degree}</p>
                      </div>
                    )}

                    {/* Fee Highlight */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-100">
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
                        <FaMoneyBillWave className="text-green-600 text-sm" />
                        <p className="text-xs sm:text-sm text-gray-600">Consultation Fee</p>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        ₹{doctor.consultationFee || "500"}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 sm:gap-3 pt-2">
                      <Link
                        href={`/doctor/book-appointment/${doctor.specialization.toLowerCase()}/${doctor.address?.city || 'india'}/${slug}/${doctor._id}`}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl text-center font-bold hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                      >
                        <FaCalendarAlt className="text-xs sm:text-sm" />
                        Book
                      </Link>
                      <Link
                        href={`/doctor/doctor-profile/${(selectedSpecialty || doctor.specialization)?.toLowerCase()}/${slug}-${doctor._id}`}
                        className="flex-1 border-2 border-blue-500 text-blue-600 py-2 sm:py-3 rounded-lg sm:rounded-xl text-center font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                      >
                        <FaUserMd className="text-xs sm:text-sm" />
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No doctors found nearby.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
