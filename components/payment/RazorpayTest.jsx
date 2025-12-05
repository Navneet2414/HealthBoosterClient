"use client";
import { useState, useEffect } from "react";

export default function RazorpayTest() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const checkRazorpay = () => {
      if (typeof window !== 'undefined' && window.Razorpay) {
        setScriptLoaded(true);
        console.log('Razorpay loaded successfully');
      } else {
        console.log('Razorpay not loaded yet');
        setTimeout(checkRazorpay, 100);
      }
    };
    checkRazorpay();
  }, []);

  const testPayment = () => {
    if (!window.Razorpay) {
      alert('Razorpay not loaded');
      return;
    }

    const options = {
      key: "rzp_test_Rj7f3PQmNAa4MT",
      amount: 50000, // 500 INR in paise
      currency: "INR",
      name: "HealthBooster Test",
      description: "Test Payment",
      handler: function(response) {
        alert('Payment Success: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3B82F6"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-4">
      <h3>Razorpay Test</h3>
      <p>Script Loaded: {scriptLoaded ? 'Yes' : 'No'}</p>
      <button 
        onClick={testPayment}
        disabled={!scriptLoaded}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Test Payment ₹500
      </button>
    </div>
  );
}