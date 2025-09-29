"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useGetLatestDoctorsQuery } from "@/lib/store/api/doctorApi";
import slugify from "slugify";

export default function DoctorProfile() {
  const params = useParams();
  const { specialization, doctorname } = params;
  const { data: latestDoctors, isLoading } = useGetLatestDoctorsQuery();

  if (isLoading) {
    return (
      <div className="  px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4">Loading doctor profile...</p>
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
      <div className=" px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
        <Link href="/doctor" className="text-blue-600 hover:text-blue-800">
          ← Back to Doctors
        </Link>
      </div>
    );
  }

  const doctor = doctorData.doctor;

  return (
    <div className=" w-full px-4 py-8">
      <Link
        href="/doctor"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Doctors
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <img
            src={doctor.profileImage ? `/images/${doctor.profileImage}` : "https://randomuser.me/api/portraits/men/32.jpg"}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-200 mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
            <p className="text-xl text-blue-600 font-medium mb-2">{doctor.specialization}</p>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>⭐ 4.8</span>
              <span>📍 {doctor.address?.country || "India"}</span>
              <span>📍 {doctor.address?.city || "Delhi"}</span>
              <span>🎓 {doctor.experience}+ years experience</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Specialization</h3>
                <p className="text-gray-600">{doctor.specialization}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Experience</h3>
                <p className="text-gray-600">{doctor.experience}+ years</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Clinic</h3>
                <p className="text-gray-600">{doctor.clinic}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Available Days</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {doctor.availableDays?.map((day, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Status</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${doctor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                  {doctor.status === 'active' ? 'Available' : 'Unavailable'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Appointment</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Consultation Fee</h3>
                <p className="text-2xl font-bold text-green-600">₹{doctor.consultationFee}</p>
              </div>

              <div className="space-y-3">
                <Link href={`/doctor/book-appointment?doctor=${encodeURIComponent(doctor.name)}&fee=${doctor.consultationFee}&specialization=${doctor.specialization}&clinic=${encodeURIComponent(doctor.clinic)}`} className="w-full">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
                    Book Appointment
                  </button>
                </Link>                
                <button className="w-full mt-5 border border-blue-500 text-blue-500 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                  Video Consultation
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>📞 Phone: {doctor.phone}</p>
                <p>📧 Email: {doctor.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}