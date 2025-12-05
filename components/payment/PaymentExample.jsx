"use client";
import { useState } from "react";
import { FaCreditCard, FaSpinner } from "react-icons/fa";

export default function PaymentExample({ amount = 500, description = "Doctor Consultation" }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    const options = {
      key: "rzp_test_your_key_id", // Replace with your Razorpay key
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "HealthBooster",
      description: description,
      image: "/images/logo.png",
      handler: function(response) {
        console.log("Payment Success:", response);
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setLoading(false);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3B82F6"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function(response) {
      console.log("Payment Failed:", response.error);
      alert("Payment failed! Please try again.");
      setLoading(false);
    });
    
    rzp.open();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Gateway</h3>
      <div className="mb-4">
        <p className="text-gray-600">Service: {description}</p>
        <p className="text-2xl font-bold text-blue-600">₹{amount}</p>
      </div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-green-600 disabled:opacity-50"
      >
        {loading ? (
          <FaSpinner className="animate-spin" />
        ) : (
          <FaCreditCard />
        )}
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
}