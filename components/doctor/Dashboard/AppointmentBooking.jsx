"use client";
import { useRouter } from "next/navigation";
import { FaCalendarAlt, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaVideo, FaPhone, FaCheckCircle } from "react-icons/fa";

export default function AppointmentBooking({ doctor, city }) {
  const router = useRouter();

  const handleBookAppointment = () => {
    const doctorSlug = doctor?.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'doctor';
    const specialitySlug = doctor?.specialization?.toLowerCase() || 'general';
    const doctorId = doctor?.id || doctor?._id;
    
    if (!doctorId) {
      console.error('Doctor ID is missing:', doctor);
      return;
    }
    
    const location = city?.toLowerCase() || 'india';
    const url = `/doctor/book-appointment/${specialitySlug}/${location}/${doctorSlug}/${doctorId}`;
    console.log('Navigating to:', url);
    router.push(url);
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
          <FaCalendarAlt className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
          <p className="text-green-600 font-medium">Schedule Your Consultation</p>
        </div>
      </div>

      {/* Availability Status */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-lg" />
          <div>
            <p className="font-semibold text-gray-800">Available for consultation</p>
            <p className="text-sm text-gray-600">
              {city ? `in ${city}` : 'Online & In-person consultations'}
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Details */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <FaMoneyBillWave className="text-green-500 text-lg" />
            <h4 className="font-bold text-gray-800">Consultation Fee</h4>
          </div>
          <p className="text-2xl font-bold text-green-600">₹{doctor?.consultationFee || '500'}</p>
          <p className="text-sm text-gray-500">Per consultation</p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <FaClock className="text-blue-500 text-lg" />
            <h4 className="font-bold text-gray-800">Available Slots</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
              9:00 AM
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
              2:00 PM
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
              4:00 PM
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
              6:00 PM
            </span>
          </div>
        </div>

        {city && (
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-red-500 text-lg" />
              <h4 className="font-bold text-gray-800">Location</h4>
            </div>
            <p className="text-gray-700">{doctor.clinic || 'HealthBooster Clinic'}</p>
            <p className="text-sm text-gray-500">{city}</p>
          </div>
        )}
      </div>

      {/* Consultation Options */}
      <div className="space-y-3">
        <button 
          onClick={handleBookAppointment}
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-semibold"
        >
          <FaCalendarAlt className="text-lg" />
          Book  Doctor Appointment
        </button>
        
        {/* <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-semibold">
          <FaVideo className="text-lg" />
          Book Video Consultation
        </button> */}
        
        <button className="w-full border-2 border-blue-500 text-blue-600 py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold">
          <FaPhone className="text-lg" />
          Call Now
        </button>
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <p className="text-sm text-blue-800 font-medium mb-2">💡 Quick Tips:</p>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Arrive 15 minutes early for your appointment</li>
          <li>• Bring your medical history and current medications</li>
          <li>• Video consultations available for follow-ups</li>
        </ul>
      </div>
    </div>
  );
}