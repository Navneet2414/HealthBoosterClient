"use client";
import { useState } from "react";
import RazorpayPayment from "./RazorpayPayment";

export default function PaymentTest() {
  const [paymentResult, setPaymentResult] = useState(null);

  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    setPaymentResult({ success: true, data: response });
  };

  const handlePaymentError = (error) => {
    console.error("Payment failed:", error);
    setPaymentResult({ success: false, error: error.message });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Test Razorpay Payment</h2>
      
      {paymentResult && (
        <div className={`mb-4 p-3 rounded-lg ${
          paymentResult.success 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <p className={`text-sm ${
            paymentResult.success ? 'text-green-600' : 'text-red-600'
          }`}>
            {paymentResult.success 
              ? `Payment successful! ID: ${paymentResult.data.razorpay_payment_id}`
              : `Payment failed: ${paymentResult.error}`
            }
          </p>
        </div>
      )}

      <RazorpayPayment
        amount={500}
        description="Test Payment"
        userId="507f1f77bcf86cd799439011"
        serviceType="consultation"
        serviceId="507f1f77bcf86cd799439012"
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
      />
    </div>
  );
}