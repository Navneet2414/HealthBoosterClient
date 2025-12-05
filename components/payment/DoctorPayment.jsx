"use client";
import { useState } from "react";
import RazorpayPayment from "./RazorpayPayment";
import { FaUserMd, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function DoctorPayment({ doctor, appointmentData, userId }) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    setPaymentSuccess(true);
    // You can add additional logic here like:
    // - Save appointment to database
    // - Send confirmation email
    // - Redirect to success page
  };

  const handlePaymentError = (error) => {
    console.error("Payment failed:", error);
    alert(`Payment failed: ${error.message || 'Please try again.'}`);
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Payment Successful!</h3>
        <p className="text-green-600">Your appointment has been booked successfully.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Book Appointment</h3>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaUserMd className="text-blue-600" />
            <span className="font-medium">{doctor?.name || "Dr. Smith"}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-blue-600" />
            <span className="text-sm">{appointmentData?.date || "Today"}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-blue-600" />
            <span className="text-sm">{appointmentData?.time || "10:00 AM"}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-blue-600 mb-4">
          ₹{appointmentData?.fee || 500}
        </div>
      </div>

      <RazorpayPayment
        amount={appointmentData?.fee || 500}
        description="Doctor Consultation"
        userId={userId}
        serviceType="consultation"
        serviceId={doctor?.id || "507f1f77bcf86cd799439012"}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
      />
    </div>
  );
}