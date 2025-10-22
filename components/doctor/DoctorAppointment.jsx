"use client";

import { useState, useEffect } from "react";
import { useGetDoctorByIdQuery, useBookDoctorAppointmentMutation } from "@/lib/store/api/doctorApi";
import { FaCalendarAlt, FaClock, FaUser, FaCreditCard, FaLock, FaFileInvoice, FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Link from "next/link";

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
    
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: '',
        paymentMethod: 'card'
    });
    
    const [bookAppointment, { isLoading: bookingLoading }] = useBookDoctorAppointmentMutation();

    const timeSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
    ];

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        
        if (!isAuthenticated || !userId) {
            toast.error('Please login first to book an appointment');
            return;
        }
        
        if (!appointmentData.date || !appointmentData.time || !appointmentData.patientName) {
            toast.error('Please fill all required fields');
            return;
        }
        setStep(2);
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

                        {/* Payment Method */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                            <div className="flex space-x-4 mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={paymentData.paymentMethod === 'card'}
                                        onChange={(e) => setPaymentData({...paymentData, paymentMethod: e.target.value})}
                                        className="mr-2"
                                    />
                                    <FaCreditCard className="mr-2" />Credit/Debit Card
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="upi"
                                        checked={paymentData.paymentMethod === 'upi'}
                                        onChange={(e) => setPaymentData({...paymentData, paymentMethod: e.target.value})}
                                        className="mr-2"
                                    />
                                    UPI
                                </label>
                            </div>
                        </div>

                        {/* Card Payment Form */}
                        {paymentData.paymentMethod === 'card' && (
                            <form onSubmit={handlePayment} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                    <input
                                        type="text"
                                        value={paymentData.cardNumber}
                                        onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                        <input
                                            type="text"
                                            value={paymentData.expiryDate}
                                            onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                                            placeholder="DD/MM/YY"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                        <input
                                            type="text"
                                            value={paymentData.cvv}
                                            onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                                            placeholder="123"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                                    <input
                                        type="text"
                                        value={paymentData.cardName}
                                        onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={bookingLoading}
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center disabled:opacity-50"
                                >
                                    <FaLock className="mr-2" />
                                    {bookingLoading ? 'Processing...' : `Pay ₹${Math.round(consultationFee * 1.18)}`}
                                </button>
                            </form>
                        )}

                        {/* UPI Payment */}
                        {paymentData.paymentMethod === 'upi' && (
                            <div className="text-center space-y-4">
                                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg border border-blue-200">
                                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 inline-block">
                                        <img 
                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=${doctorName?.toLowerCase().replace(/\s+/g, '')}@paytm&pn=Dr.%20${doctorName}&am=${Math.round(consultationFee * 1.18)}&cu=INR&tn=Medical%20Consultation`}
                                            alt="UPI QR Code"
                                            className="w-32 h-32 mx-auto"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 mx-auto items-center justify-center text-white font-bold text-xs rounded hidden">
                                            QR CODE
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-700 font-medium">Scan QR code with any UPI app</p>
                                        <div className="bg-white p-3 rounded border">
                                            <p className="text-xs text-gray-500 mb-1">UPI ID:</p>
                                            <p className="font-mono text-sm font-medium text-blue-600">{doctorName?.toLowerCase().replace(/\s+/g, '')}@paytm</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                            <p className="text-xs text-gray-500 mb-1">Amount:</p>
                                            <p className="font-bold text-lg text-green-600">₹{Math.round(consultationFee * 1.18)}</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                            <p className="text-xs text-gray-500 mb-1">Payee:</p>
                                            <p className="font-medium text-sm"> {doctorName}</p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handlePayment}
                                    disabled={bookingLoading}
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
                                >
                                    {bookingLoading ? 'Processing...' : `I have paid ₹${Math.round(consultationFee * 1.18)}`}
                                </button>
                            </div>
                        )}

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

                {/* Step 3: Confirmation */}
                {step === 3 && (
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                            <FaUser className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800">Appointment Booked Successfully!</h2>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="font-semibold text-green-800 mb-3">Appointment Details</h3>
                            <div className="space-y-2 text-sm text-green-700">
                                <p><span className="font-medium">Doctor:</span> {doctorName}</p>
                                <p><span className="font-medium">Date:</span> {appointmentData.date}</p>
                                <p><span className="font-medium">Time:</span> {appointmentData.time}</p>
                                <p><span className="font-medium">Type:</span> {appointmentData.type === 'clinic' ? 'Clinic Visit' : 'Video Call'}</p>
                                <p><span className="font-medium">Booking ID:</span> #APT{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                            </div>
                        </div>
                        <p className="text-gray-600">You will receive a confirmation email and SMS shortly.</p>
                        <button
                            onClick={() => window.location.href = '/user/dashboard'}
                            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
