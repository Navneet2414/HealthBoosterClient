"use client";
import { useState, useEffect } from "react";
import Script from 'next/script';

export default function RazorpayPaymentDebug({
  amount,
  description,
  userId,
  serviceType,
  serviceId,
  onSuccess,
  onError,
}) {
  const [loading, setLoading] = useState(false);
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState([]);

  useEffect(() => {
    setMounted(true);
    addDebugInfo("Component mounted");
    addDebugInfo(`Environment: ${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ? 'Key found' : 'Key missing'}`);
    addDebugInfo(`API URL: ${process.env.NEXT_PUBLIC_API_URL}`);
  }, []);

  const addDebugInfo = (info) => {
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  const handleRazorpayPayment = async () => {
    if (loading || !razorpayReady) {
      addDebugInfo("Payment blocked - loading or Razorpay not ready");
      return;
    }
    
    setLoading(true);
    setError(null);
    addDebugInfo("Starting payment process...");
    
    try {
      // Step 1: Create order on backend
      addDebugInfo("Creating order...");
      const orderData = {
        amount,
        currency: 'INR',
        userId,
        serviceType,
        serviceId
      };
      addDebugInfo(`Order data: ${JSON.stringify(orderData)}`);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      addDebugInfo(`Response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        addDebugInfo(`Response error: ${errorText}`);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const orderResponse = await response.json();
      addDebugInfo(`Order response: ${JSON.stringify(orderResponse)}`);
      
      if (!orderResponse.success) {
        throw new Error(orderResponse.message || 'Failed to create order');
      }
      
      // Step 2: Open Razorpay checkout
      addDebugInfo("Opening Razorpay checkout...");
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderResponse.order.amount,
        currency: orderResponse.order.currency,
        name: 'HealthBooster',
        description: description || 'Payment for HealthBooster services',
        order_id: orderResponse.order.id,
        handler: async function(response) {
          addDebugInfo(`Payment success: ${JSON.stringify(response)}`);
          try {
            // Step 3: Verify payment on backend
            const verifyResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/verify`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });
            
            const verifyData = await verifyResponse.json();
            addDebugInfo(`Verify response: ${JSON.stringify(verifyData)}`);
            
            if (verifyData.success) {
              onSuccess && onSuccess({
                ...response,
                amount,
                status: 'paid'
              });
            } else {
              throw new Error(verifyData.message || 'Payment verification failed');
            }
          } catch (verifyError) {
            addDebugInfo(`Verification error: ${verifyError.message}`);
            setError('Payment verification failed. Please contact support.');
            onError && onError(verifyError);
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        theme: {
          color: '#3B82F6'
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            addDebugInfo('Payment modal closed');
          }
        }
      };
      
      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (error) {
      addDebugInfo(`Payment error: ${error.message}`);
      console.error('Payment initiation failed:', error);
      setError(error.message || 'Payment initiation failed');
      onError && onError(error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="w-full">
        <button disabled className="w-full bg-gray-400 text-white py-3 px-6 rounded-lg">
          Loading Payment...
        </button>
      </div>
    );
  }

  return (
    <>
      <Script 
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => {
          setRazorpayReady(true);
          addDebugInfo("Razorpay script loaded");
        }}
        onError={() => {
          setRazorpayReady(false);
          addDebugInfo("Razorpay script failed to load");
        }}
      />
      <div className="w-full">
        {/* Debug Info */}
        <div className="mb-4 p-3 bg-gray-50 border rounded-lg text-xs">
          <h4 className="font-bold mb-2">Debug Info:</h4>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {debugInfo.map((info, index) => (
              <div key={index} className="text-gray-600">{info}</div>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        
        <button
          onClick={handleRazorpayPayment}
          disabled={loading || !razorpayReady}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : !razorpayReady ? (
            'Loading Razorpay...'
          ) : (
            `Pay ₹${amount} (Debug Mode)`
          )}
        </button>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          Debug version - Check console for details
        </p>
      </div>
    </>
  );
}