"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useGetLatestDoctorsQuery } from "@/lib/store/api/doctorApi";
import slugify from "slugify";
import { FaStar, FaMapMarkerAlt, FaGraduationCap, FaHospital, FaCalendarAlt, FaVideo, FaPhone, FaEnvelope, FaArrowLeft, FaMoneyBillWave, FaCheckCircle, FaClock, FaUserMd } from "react-icons/fa";

export default function DoctorProfile() {
  const params = useParams();
  const { specialization, doctorname } = params;
  const { data: latestDoctors, isLoading } = useGetLatestDoctorsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-600">Loading doctor profile...</p>
        </div>
      </div>
    );
  }

  // Find the doctor by matching the slug
  const doctorData = latestDoctors?.data?.find((item) => {
    const slug = slugify(item.doctor.name, {
      lower: true,
      strict: true,
      trim: true,
    });
    return slug === doctorname && item.doctor.specialization.toLowerCase() === specialization.toLowerCase();
  });

  if (!doctorData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8">
          <FaUserMd className="text-6xl text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-6">The doctor profile you're looking for doesn't exist.</p>
          <Link href="/doctor" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all">
            <FaArrowLeft /> Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  const doctor = doctorData.doctor;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/doctor"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium hover:bg-white/30 transition-all duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Back to Doctors
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
              {/* Doctor Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-200 to-green-200 p-1">
                  <Image
                    src={doctor.profileImage ? (doctor.profileImage.startsWith('http') ? doctor.profileImage : `/images/${doctor.profileImage}`) : "https://randomuser.me/api/portraits/men/32.jpg"}
                    alt={doctor.name}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                  <FaCheckCircle className="text-xs" />
                  {doctor.status === 'active' ? 'Available' : 'Busy'}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                <p className="text-xl font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full inline-block mb-4">
                  {doctor.specialization}
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white rounded-xl p-4 shadow-md text-center">
                    <FaStar className="text-yellow-500 text-xl mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-bold text-gray-800">4.8</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md text-center">
                    <FaMapMarkerAlt className="text-red-500 text-xl mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-bold text-gray-800 text-xs">{doctor.address?.city || "Delhi"}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md text-center">
                    <FaGraduationCap className="text-blue-500 text-xl mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-bold text-gray-800">{doctor.experience}+ years</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md text-center">
                    <FaMoneyBillWave className="text-green-500 text-xl mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Fee</p>
                    <p className="font-bold text-gray-800">₹{doctor.consultationFee}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* About Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-1">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full">
                        <FaUserMd className="text-white text-xl" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">About Doctor</h2>
                        <p className="text-blue-600 font-medium">Professional Details</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaUserMd className="text-blue-600" />
                          <h3 className="font-semibold text-gray-800">Specialization</h3>
                        </div>
                        <p className="text-gray-700 ml-6">{doctor.specialization}</p>
                      </div>

                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaGraduationCap className="text-green-600" />
                          <h3 className="font-semibold text-gray-800">Experience</h3>
                        </div>
                        <p className="text-gray-700 ml-6">{doctor.experience}+ years of practice</p>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaHospital className="text-purple-600" />
                          <h3 className="font-semibold text-gray-800">Clinic</h3>
                        </div>
                        <p className="text-gray-700 ml-6">{doctor.clinic || 'HealthBooster Clinic'}</p>
                      </div>

                      {doctor.availableDays && (
                        <div className="bg-yellow-50 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <FaCalendarAlt className="text-yellow-600" />
                            <h3 className="font-semibold text-gray-800">Available Days</h3>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-6">
                            {doctor.availableDays.map((day, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 rounded-full text-sm font-medium">
                                {day}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaPhone className="text-blue-600" />
                          <h3 className="font-semibold text-gray-800">Contact</h3>
                        </div>
                        <div className="ml-6 space-y-1">
                          <p className="text-gray-700 flex items-center gap-2">
                            <FaPhone className="text-sm text-blue-500" /> {doctor.phone || '+91 98765 43210'}
                          </p>
                          <p className="text-gray-700 flex items-center gap-2">
                            <FaEnvelope className="text-sm text-green-500" /> {doctor.email || 'doctor@healthbooster.com'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-1">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                        <FaCalendarAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
                        <p className="text-green-600 font-medium">Schedule Your Visit</p>
                      </div>
                    </div>

                    {/* Fee Highlight */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center mb-6 border border-green-100">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <FaMoneyBillWave className="text-green-600 text-xl" />
                        <h3 className="font-bold text-gray-800">Consultation Fee</h3>
                      </div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        ₹{doctor.consultationFee}
                      </p>
                      <p className="text-sm text-gray-500">Per consultation</p>
                    </div>

                    {/* Available Slots */}
                    <div className="bg-blue-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FaClock className="text-blue-600" />
                        <h4 className="font-semibold text-gray-800">Available Today</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="bg-white text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center border border-blue-200">
                          10:00 AM
                        </span>
                        <span className="bg-white text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center border border-blue-200">
                          2:00 PM
                        </span>
                        <span className="bg-white text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center border border-blue-200">
                          4:00 PM
                        </span>
                        <span className="bg-white text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center border border-blue-200">
                          6:00 PM
                        </span>
                      </div>
                    </div>

                    {/* Booking Buttons */}
                    <div className="space-y-3">
                      <Link href={`/doctor/book-appointment?doctor=${encodeURIComponent(doctor.name)}&fee=${doctor.consultationFee}&specialization=${doctor.specialization}&clinic=${encodeURIComponent(doctor.clinic)}`} className="w-full">
                        <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-semibold">
                          <FaCalendarAlt className="text-lg" />
                          Book In-Person Appointment
                        </button>
                      </Link>
                      
                      <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-semibold">
                        <FaVideo className="text-lg" />
                        Video Consultation
                      </button>
                      
                      <button className="w-full border-2 border-blue-500 text-blue-600 py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold">
                        <FaPhone className="text-lg" />
                        Call Now
                      </button>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-blue-50 rounded-xl p-4 mt-6 border border-blue-100">
                      <p className="text-sm text-blue-800 font-medium mb-2">💡 Quick Info:</p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Same day appointments available</li>
                        <li>• Video consultations for follow-ups</li>
                        <li>• Bring your medical history</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}