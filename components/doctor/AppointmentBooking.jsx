"use client";

export default function AppointmentBooking({ doctor, city }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
      <p className="text-gray-600 mb-4">
        Available for consultation {city ? `in ${city}` : ''}
      </p>
      <div className="space-y-2 mb-4">
        {doctor?.consultationFee && (
          <p><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
        )}
        {doctor?.experience && (
          <p><strong>Experience:</strong> {doctor.experience}</p>
        )}
      </div>
      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Book Appointment
      </button>
    </div>
  );
}