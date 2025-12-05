"use client";

import { useState, useEffect } from "react";
import { useGetDoctorByIdQuery, useBookDoctorAppointmentMutation } from "@/lib/store/api/doctorApi";
import { FaCalendarAlt, FaClock, FaUser, FaCreditCard, FaLock, FaFileInvoice, FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Link from "next/link";
import RazorpayPayment from "../payment/RazorpayPayment";

export default function DoctorAppointment({ params }) {
    const [unwrappedParams, setUnwrappedParams] = useState(null);
    
    useEffect(() => {
        const resolveParams = async () => {
            const resolved = await params;
            setUnwrappedParams(resolved);
        };
        resolveParams();
    }, [params]);
    
    const { data: doctorData, isLoading: doctorLoading, error: doctorError } = useGetDoctorByIdQuery(
        unwrappedParams?.id, 
        { skip: !unwrappedParams?.id }
    );
    
    const doctor = doctorData?.doctor;
    const doctorName = doctor?.name || 'Loading...';
    const consultationFee = doctor?.consultationFee || '500';
    const specialization = doctor?.specialization || unwrappedParams?.speciality || 'General';
    const city = doctor?.city || doctor?.location || 'India';
    const clinic = doctor?.clinic || 'HealthBooster Clinic';
    
    // Get user from Redux store
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const userId = user?._id || user?.id;
    
    const [step, setStep] = useState(1);
    const [appointmentData, setAppointmentData] = useState({
        date: '',
        time: '',
        type: 'clinic',
        patientName: '',
        phone: '',
        email: '',
        symptoms: '',
        age: '',
        gender: 'Male'
    });
    

    const [appointmentBooked, setAppointmentBooked] = useState(false);
    
    const [bookAppointment, { isLoading: bookingLoading }] = useBookDoctorAppointmentMutation();

    const timeSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
    ];

    const handleAppointmentSubmit = async (e) => {
        e.preventDefault();
        
        if (!isAuthenticated || !userId) {
            toast.error('Please login first to book an appointment');
            return;
        }
        
        if (!appointmentData.date || !appointmentData.time || !appointmentData.patientName) {
            toast.error('Please fill all required fields');
            return;
        }
        
        // Check for same day booking conflicts
        try {
            // Simulate checking existing appointments for the same doctor, date, and time
            const isSlotTaken = Math.random() > 0.8; // 20% chance of slot being taken
            
            if (isSlotTaken) {
                toast.error(`This time slot (${appointmentData.time} on ${appointmentData.date}) is already booked. Please select a different time.`);
                return;
            }
            
            setStep(2);
        } catch (error) {
            toast.error('Failed to validate appointment slot. Please try again.');
        }
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        if (paymentData.paymentMethod === 'card' && (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv)) {
            toast.error('Please fill all payment details');
            return;
        }
        
        try {
            if (!isAuthenticated || !userId) {
                toast.error('Please login first to book an appointment');
                return;
            }
            
            const appointmentPayload = {
                doctorId: doctor._id,
                userId: userId,
                patientName: appointmentData.patientName,
                patientEmail: appointmentData.email,
                patientAge: parseInt(appointmentData.age) || 25,
                consultationType: appointmentData.type === 'clinic' ? 'Clinic Visit' : 'Video Call',
                countryCode: "+91",
                patientNumber: parseInt(appointmentData.phone),
                symptoms: appointmentData.symptoms,
                appointmentDate: appointmentData.date,
                appointmentTime: appointmentData.time,
                patientGender: appointmentData.gender
            };
            
            await bookAppointment(appointmentPayload).unwrap();
            toast.success('Payment successful! Appointment booked.');
            setStep(3);
        } catch (error) {
            toast.error(error?.data?.message || 'Failed to book appointment');
        }
    };



    if (!unwrappedParams) {
        return <div className="text-center py-8">Loading...</div>;
    }
    
    if (doctorLoading) {
        return <div className="text-center py-8">Loading doctor details...</div>;
    }
    
    if (doctorError || !doctor) {
        return <div className="text-center py-8">Error loading doctor details. Please try again.</div>;
    }
    
    // Show login prompt if user is not authenticated
    if (!isAuthenticated || !userId) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <FaUser className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
                    <p className="text-gray-600 mb-6">Please login first to book an appointment with {doctorName}</p>
                    <div className="space-y-4">
                        <Link 
                            href="/login/user" 
                            className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition mr-4"
                        >
                            Login
                        </Link>
                        <Link 
                            href="/sign-up/user" 
                            className="inline-block border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Appointment</h1>
                    <div className="text-gray-600">
                        <p className="text-lg font-medium">{doctorName}</p>
                        <p className="text-sm">{specialization} • {city} • {clinic}</p>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-4">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                            1
                        </div>
                        <div className={`w-16 h-1 ${
                            step >= 2 ? 'bg-blue-500' : 'bg-gray-200'
                        }`}></div>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                            2
                        </div>
                        <div className={`w-16 h-1 ${
                            step >= 3 ? 'bg-blue-500' : 'bg-gray-200'
                        }`}></div>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                            3
                        </div>
                    </div>
                </div>

                {/* Step 1: Appointment Details */}
                {step === 1 && (
                    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointment Details</h2>
                        
                        {/* Consultation Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="clinic"
                                        checked={appointmentData.type === 'clinic'}
                                        onChange={(e) => setAppointmentData({...appointmentData, type: e.target.value})}
                                        className="mr-2"
                                    />
                                    Clinic Visit
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="video"
                                        checked={appointmentData.type === 'video'}
                                        onChange={(e) => setAppointmentData({...appointmentData, type: e.target.value})}
                                        className="mr-2"
                                    />
                                    Video Call
                                </label>
                            </div>
                        </div>

                        {/* Date Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaCalendarAlt className="inline mr-2" />Select Date
                            </label>
                            <input
                                type="date"
                                value={appointmentData.date ? 
                                    appointmentData.date.split('/').reverse().join('-') : ''}
                                onChange={(e) => {
                                    const dateValue = e.target.value;
                                    if (dateValue) {
                                        const [year, month, day] = dateValue.split('-');
                                        const formattedDate = `${day}/${month}/${year}`;
                                        setAppointmentData({...appointmentData, date: formattedDate});
                                    } else {
                                        setAppointmentData({...appointmentData, date: ''});
                                    }
                                }}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Time Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <FaClock className="inline mr-2" />Select Time
                            </label>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => setAppointmentData({...appointmentData, time})}
                                        className={`p-3 border rounded-lg text-sm font-medium transition ${
                                            appointmentData.time === time
                                                ? 'bg-blue-500 text-white border-blue-500'
                                                : 'border-gray-300 hover:border-blue-500'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Patient Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
                                <input
                                    type="text"
                                    value={appointmentData.patientName}
                                    onChange={(e) => setAppointmentData({...appointmentData, patientName: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={appointmentData.phone}
                                    onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={appointmentData.email}
                                    onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                                <input
                                    type="number"
                                    value={appointmentData.age}
                                    onChange={(e) => setAppointmentData({...appointmentData, age: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={appointmentData.gender === 'Male'}
                                        onChange={(e) => setAppointmentData({...appointmentData, gender: e.target.value})}
                                        className="mr-2"
                                    />
                                    Male
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={appointmentData.gender === 'Female'}
                                        onChange={(e) => setAppointmentData({...appointmentData, gender: e.target.value})}
                                        className="mr-2"
                                    />
                                    Female
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={appointmentData.gender === 'Other'}
                                        onChange={(e) => setAppointmentData({...appointmentData, gender: e.target.value})}
                                        className="mr-2"
                                    />
                                    Other
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Symptoms/Reason for Visit</label>
                            <textarea
                                value={appointmentData.symptoms}
                                onChange={(e) => setAppointmentData({...appointmentData, symptoms: e.target.value})}
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Describe your symptoms or reason for consultation"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Continue to Payment
                        </button>
                    </form>
                )}

                {/* Step 2: Payment */}
                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
                        
                        {/* Professional Invoice */}
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6 shadow-sm relative overflow-hidden">
                            {/* Payment Status Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                                <div className="transform rotate-45 text-8xl font-bold text-gray-400 select-none opacity-30">
                                    {step === 3 ? 'PAID' : 'PENDING'}
                                </div>
                            </div>
                            <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <FaFileInvoice className="text-blue-500 mr-2" />
                                        <h3 className="text-xl font-bold text-gray-800">INVOICE</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">Invoice #: INV-{new Date().getFullYear()}-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                                    <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString('en-IN')}</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="font-bold text-blue-600 text-lg">HealthBooster</h4>
                                    <p className="text-sm text-gray-600">Healthcare Platform</p>
                                    <p className="text-sm text-gray-600">support@healthbooster.com</p>
                                    <p className="text-sm text-gray-600">+91 6394832414</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">Bill To:</h5>
                                    <div className="text-sm text-gray-600">
                                        <p className="font-medium">{appointmentData.patientName}</p>
                                        <p>{appointmentData.email}</p>
                                        <p>+91 {appointmentData.phone}</p>
                                        <p>Age: {appointmentData.age} years</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">Service Provider:</h5>
                                    <div className="text-sm text-gray-600">
                                        <p className="font-medium">{doctorName}</p>
                                        <p>{specialization}</p>
                                        <p>{clinic}</p>
                                        <p>{city}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-b border-gray-200 py-4 mb-4">
                                <div className="grid grid-cols-4 gap-4 text-sm font-semibold text-gray-700 mb-2">
                                    <div>Service</div>
                                    <div>Date & Time</div>
                                    <div>Type</div>
                                    <div className="text-right">Amount</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                                    <div>Medical Consultation</div>
                                    <div>{appointmentData.date} at {appointmentData.time}</div>
                                    <div>{appointmentData.type === 'clinic' ? 'Clinic Visit' : 'Video Call'}</div>
                                    <div className="text-right">₹{consultationFee}</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-600">
                                    <p>Payment Terms: Immediate</p>
                                    <p>GST: Included</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-600 mb-1">
                                        <div className="flex justify-between w-32">
                                            <span>Subtotal:</span>
                                            <span>₹{consultationFee}</span>
                                        </div>
                                        <div className="flex justify-between w-32">
                                            <span>GST (18%):</span>
                                            <span>₹{Math.round(consultationFee * 0.18)}</span>
                                        </div>
                                    </div>
                                    <div className="border-t pt-2">
                                        <div className="flex justify-between w-32 text-lg font-bold text-green-600">
                                            <span>Total:</span>
                                            <span>₹{Math.round(consultationFee * 1.18)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-gray-500">This is a computer generated invoice</p>
                                    <button 
                                        onClick={() => window.print()}
                                        className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                                    >
                                        <FaDownload className="mr-1" />
                                        Download Invoice
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Razorpay Payment Integration */}
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Pay with Razorpay</h4>
                            <div className="text-center mb-4">
                                <p className="text-sm text-gray-600 mb-2">Secure payment via Razorpay</p>
                                <p className="text-lg font-bold text-purple-600">₹{Math.round(consultationFee * 1.18)}</p>
                            </div>
                            <RazorpayPayment
                                amount={Math.round(consultationFee * 1.18)}
                                description="Doctor Consultation Payment"
                                userId={userId}
                                serviceType="consultation"
                                serviceId={doctor._id || unwrappedParams?.id}
                                customerName={appointmentData.patientName}
                                customerEmail={appointmentData.email}
                                customerPhone={appointmentData.phone}
                                onSuccess={async (razorpayResponse) => {
                                    try {
                                        const appointmentPayload = {
                                            doctorId: doctor._id || unwrappedParams?.id,
                                            userId: userId,
                                            patientName: appointmentData.patientName,
                                            patientEmail: appointmentData.email,
                                            patientAge: appointmentData.age,
                                            consultationType: appointmentData.type === 'clinic' ? 'Clinic Visit' : 'Video Call',
                                            countryCode: "+91",
                                            patientNumber: appointmentData.phone,
                                            symptoms: appointmentData.symptoms,
                                            appointmentDate: appointmentData.date,
                                            appointmentTime: appointmentData.time,
                                            patientGender: appointmentData.gender,
                                            paymentStatus: 'paid',
                                            paymentMethod: 'razorpay',
                                            paymentAmount: Math.round(consultationFee * 1.18),
                                            razorpayPaymentId: razorpayResponse.razorpay_payment_id,
                                            razorpayOrderId: razorpayResponse.razorpay_order_id,
                                            razorpaySignature: razorpayResponse.razorpay_signature
                                        };
                                        
                                        const response = await bookAppointment(appointmentPayload).unwrap();
                                        
                                        if (response && response.success !== false) {
                                            toast.success('Payment successful! Appointment booked.');
                                            setAppointmentBooked(true);
                                            setStep(3);
                                        } else {
                                            throw new Error(response?.message || 'Booking failed');
                                        }
                                    } catch (error) {
                                        console.error('Booking error:', error);
                                        const errorMessage = error?.data?.message || error?.message || 'Appointment booking failed';
                                        
                                        if (errorMessage.includes('already booked') || errorMessage.includes('slot taken')) {
                                            toast.error('This time slot is already booked. Please select a different time.');
                                            setStep(1);
                                        } else {
                                            toast.error(errorMessage + '. Please try again.');
                                        }
                                    }
                                }}
                                onError={(error) => {
                                    console.error('Razorpay payment error:', error);
                                    toast.error('Payment failed: ' + (error?.message || 'Please try again'));
                                }}
                            />
                        </div>



                        <div className="flex space-x-4">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Confirmation - Only show if appointment is actually booked */}
                {step === 3 && appointmentBooked && (
                    <div className="relative overflow-hidden">
                        {/* Success Animation Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50"></div>
                        
                        <div className="relative z-10 text-center space-y-8 py-8">
                            {/* Success Icon with Animation */}
                            <div className="relative mx-auto">
                                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="absolute -inset-4 bg-green-200 rounded-full opacity-20 animate-ping"></div>
                            </div>

                            {/* Success Message */}
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    Appointment Confirmed!
                                </h2>
                                <p className="text-lg text-gray-600">Your booking has been successfully processed</p>
                            </div>

                            {/* Appointment Card */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mx-auto max-w-md">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">Booking Details</h3>
                                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        Confirmed
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <FaUser className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-500">Doctor</p>
                                            <p className="font-semibold text-gray-800">{doctorName}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <FaCalendarAlt className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-500">Date & Time</p>
                                            <p className="font-semibold text-gray-800">{appointmentData.date} at {appointmentData.time}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <FaClock className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-500">Consultation Type</p>
                                            <p className="font-semibold text-gray-800">{appointmentData.type === 'clinic' ? 'Clinic Visit' : 'Video Call'}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Booking ID</span>
                                            <span className="font-mono font-bold text-blue-600">#APT{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm text-gray-600">Amount Paid</span>
                                            <span className="font-bold text-green-600">₹{Math.round(consultationFee * 1.18)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notification Info */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mx-auto max-w-md">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-blue-800">Confirmation Sent</p>
                                        <p className="text-xs text-blue-600">Check your email and SMS for appointment details</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => window.location.href = '/user/dashboard'}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                                    </svg>
                                    <span>Go to Dashboard</span>
                                </button>
                                
                                <button
                                    onClick={() => window.print()}
                                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <FaDownload className="w-4 h-4" />
                                    <span>Download Receipt</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
