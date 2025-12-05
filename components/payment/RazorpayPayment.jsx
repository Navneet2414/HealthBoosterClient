"use client";
import { useState, useEffect } from "react";
import Script from 'next/script';

export default function RazorpayPayment({
  amount,
  description,
  userId,
  serviceType,
  serviceId,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess,
  onError,
}) {
  const [loading, setLoading] = useState(false);
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMounted(true);
    
    // Check if Razorpay is already loaded
    if (typeof window !== 'undefined' && window.Razorpay) {
      setRazorpayReady(true);
    }
    
    // Fallback check after 3 seconds
    const fallbackTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.Razorpay) {
        setRazorpayReady(true);
      } else {
        setError('Razorpay failed to load. Please refresh the page.');
      }
    }, 3000);
    
    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleRazorpayPayment = async () => {
    if (loading || !razorpayReady) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Step 1: Create order on backend
      const orderData = {
        amount,
        currency: 'INR',
        userId,
        serviceType,
        serviceId
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const orderResponse = await response.json();
      
      if (!orderResponse.success) {
        throw new Error(orderResponse.message || 'Failed to create order');
      }
      
      // Step 2: Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderResponse.order.amount,
        currency: orderResponse.order.currency,
        name: 'HealthBooster',
        description: description || 'Payment for HealthBooster services',
        order_id: orderResponse.order.id,
        handler: async function(response) {
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
            console.error('Payment verification failed:', verifyError);
            setError('Payment verification failed. Please contact support.');
            onError && onError(verifyError);
          }
        },
        prefill: {
          name: customerName || '',
          email: customerEmail || '',
          contact: customerPhone ? customerPhone.toString().replace(/^\+?91/, '') : ''
        },
        theme: {
          color: '#3B82F6'
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            console.log('Payment modal closed');
          }
        }
      };
      
      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (error) {
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
        <button
          disabled
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 opacity-50 cursor-not-allowed"
        >
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
          console.log('Razorpay script loaded');
          setRazorpayReady(true);
        }}
        onError={(e) => {
          console.error('Razorpay script failed to load:', e);
          setError('Failed to load payment gateway. Please refresh the page.');
        }}
        strategy="afterInteractive"
      />
      <div className="w-full">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 mb-2">{error}</p>
            <button 
              onClick={() => {
                setError(null);
                window.location.reload();
              }}
              className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded transition"
            >
              Retry
            </button>
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
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Loading Razorpay...
            </div>
          ) : (
            `Pay ₹${amount}`
          )}
        </button>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          Secure payment powered by Razorpay
        </p>
      </div>
    </>
  );
}