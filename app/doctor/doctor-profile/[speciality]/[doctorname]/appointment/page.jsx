

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BookAppointment() {
  const [selectedType, setSelectedType] = useState("Not selected");
  const [selectedDate, setSelectedDate] = useState("Not selected");
  const [selectedTime, setSelectedTime] = useState("Not selected");
  const [fee, setFee] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    symptoms: "",
  });

  const consultationOptions = [
    { type: "In Person", price: 800 },
    { type: "Video", price: 700 },
    { type: "Phone", price: 600 },
  ];

  const timeSlots = [
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const handleConfirm = () => {
    alert(`
    ✅ Booking Confirmed!

    Doctor: Dr. Rajesh Kumar
    Specialization: Cardiologist
    Date: ${selectedDate}
    Time: ${selectedTime}
    Type: ${selectedType}
    Consultation Fee: ₹${fee}

    Patient Info:
    Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Age: ${formData.age}
    Gender: ${formData.gender}
    Symptoms: ${formData.symptoms}
    `);
  };

  return (
    <div className=" bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-center py-6 shadow">
        <p className="text-2xl font-semibold">Book Appointment</p>
        <p className="text-md">
          Schedule your consultation with Dr. Rajesh Kumar
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-1 container mx-auto px-6 py-6 gap-6">
        {/* Left scrollable section */}
        <div className="flex-1 space-y-6 overflow-y-auto pr-2 h-[calc(100vh-120px)]">
          {/* Doctor Info */}
          <div className="bg-white shadow rounded-xl p-5 ">
            <div className="flex items-center gap-4">
              <Image
                src="/images/doctordemo.jpg"
                alt="Doctor"
                className="rounded-full w-40 h-40 object-cover border-2 border-green-200"
                width={100}
                height={100}
              />
              <div>
                <h2 className="font-semibold text-xl">Dr. Rajesh Kumar</h2>
                <p className="text-base text-gray-600">Cardiologist</p>
                <p className="text-sm text-gray-500">Apollo Hospital, Mumbai</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">
                Select Consultation Type
              </h3>
              <div className="flex gap-3">
                {consultationOptions.map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => {
                      setSelectedType(opt.type);
                      setFee(opt.price);
                    }}
                    className={`px-4 py-2 rounded-lg border text-lg ${
                      selectedType === opt.type
                        ? "border-teal-500 bg-teal-50 text-teal-600 font-medium"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {opt.type} – ₹{opt.price}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              Select Date & Time
            </h3>
            <div className="mb-4">
              <input
                type="date"
                className="border rounded-lg p-2 w-full"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 py-2 border rounded-lg text-sm ${
                    selectedTime === time
                      ? "bg-teal-50 border-teal-500 text-teal-600 font-medium"
                      : "hover:bg-teal-50"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Patient Info */}
          <div className="bg-white shadow rounded-xl p-5 space-y-4">
            <h3 className="font-medium mb-3">Patient Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border rounded-lg p-2"
              />
              <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="border rounded-lg p-2"
              />
              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="border rounded-lg p-2"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              placeholder="Symptoms / Reason for Visit"
              rows="3"
              value={formData.symptoms}
              onChange={(e) =>
                setFormData({ ...formData, symptoms: e.target.value })
              }
              className="border rounded-lg p-2 w-full"
            ></textarea>
          </div>
        </div>

        {/* Right fixed section */}
        <div className="w-80">
          <div className="sticky top-20 bg-white shadow rounded-xl p-5">
            <h3 className="font-medium mb-4">Booking Summary</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Doctor:</strong> Dr. Rajesh Kumar
              </p>
              <p>
                <strong>Specialization:</strong> Cardiologist
              </p>
              <p>
                <strong>Date:</strong> {selectedDate}
              </p>
              <p>
                <strong>Time:</strong> {selectedTime}
              </p>
              <p>
                <strong>Type:</strong> {selectedType}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-teal-600 font-semibold text-lg">
                Consultation Fee: ₹{fee}
              </p>
              <button
                onClick={handleConfirm}
                className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
              >
                Confirm Booking
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">
                By booking, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
