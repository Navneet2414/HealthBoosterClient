// components/DoctorProfile.tsx
"use client";
import { useState } from "react";
import { FaStar, FaUserMd, FaHeartbeat, FaCheckCircle } from "react-icons/fa";
import { MdLocationOn, MdVideoCall, MdPhone, MdEventAvailable } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import AboutTab from "./about/page";
import { useParams } from "next/navigation";
import Link from "next/link";


const DoctorProfile = ({doctors}) => {

  // console.log("doctorsProfile page",doctors);
  const [activeTab, setActiveTab] = useState("about");
      const params = useParams();
  const { speciality, doctorname } = params;

  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400  p-6 ">


      {/* <h1 className="text-2xl font-bold text-gray-800">Inside Doctor speciality doctor Name Page </h1> */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Doctor Info */}
        <div className="flex gap-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Doctor"
            className="w-28 h-28 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{params.doctorname.toUpperCase()}</h2>

            <p className="text-blue-500 font-medium">{params.speciality}</p>
            <p className="text-gray-600">MBBS, MD (Cardiology)</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center w-28">
                <FaStar className="text-yellow-500 text-xl" />
                <p className="font-bold">4.9</p>
                <span className="text-xs text-gray-500">234 Reviews</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center w-28">
                <BsFillPersonLinesFill className="text-blue-500 text-xl" />
                <p className="font-bold">15+ years</p>
                <span className="text-xs text-gray-500">Experience</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center w-28">
                <FaUserMd className="text-green-500 text-xl" />
                <p className="font-bold">1000+</p>
                <span className="text-xs text-gray-500">Patients</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center w-28">
                <FaCheckCircle className="text-red-500 text-xl" />
                <p className="font-bold">98%</p>
                <span className="text-xs text-gray-500">Success Rate</span>
              </div>
            </div>

            {/* Hospital & Languages */}
            <p className="mt-4 flex items-center text-gray-600">
              <MdLocationOn className="mr-2 text-gray-500" /> Apollo Hospital, Mumbai
            </p>
            <div className="flex gap-2 mt-1">
              <span className="px-2 py-1 border rounded text-xs">English</span>
              <span className="px-2 py-1 border rounded text-xs">Hindi</span>
            </div>

            {/* Consultation Options */}
            <div className="flex gap-6 mt-4 text-sm text-gray-600">
              <span className="flex items-center gap-1"><MdVideoCall /> Video Consultation</span>
              <span className="flex items-center gap-1"><MdPhone /> Phone Consultation</span>
              <span className="flex items-center gap-1"><FaHeartbeat /> In-person Visit</span>
            </div>
          </div>
        </div>

        {/* Right Section (Fee & Booking) */}
        <div className="bg-white border rounded-lg shadow-sm p-5 mt-6 md:mt-0 md:w-72 flex flex-col items-center">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
            Available Today
          </span>
          <h3 className="text-2xl font-bold text-green-600">₹800</h3>
          <p className="text-sm text-gray-500 mb-4">Consultation Fee</p>
          <Link href={`/doctor/doctor-profile/${params.speciality}/${params.doctorname}/appointment`} className="w-full h-full flex items-center justify-center mb-2">
            <span className="p-2 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-md font-medium text-center">
              Book Appointment
            </span>
          </Link>
          <button className="w-full border border-gray-300 py-2 rounded-md font-medium mt-2 flex items-center justify-center gap-2">
            <MdVideoCall /> Video Consult
          </button>
          <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
            <MdEventAvailable /> Next available: Today 2:30 PM
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="shadow mt-6 rounded-lg">
        <div className="flex border-b bg-gray-200 border rounded-lg mb-2">
          {["about", "services", "reviews", "schedule"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-6 py-3 text-sm font-medium ${
                activeTab === tab ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Render tab content dynamically */}
        {activeTab === "about" && <AboutTab />}
        {activeTab === "services" && <div className="p-6">Services content here...</div>}
        {activeTab === "reviews" && <div className="p-6">Reviews content here...</div>}
        {activeTab === "schedule" && <div className="p-6">Schedule content here...</div>}
      </div>
    </div>
  );
};

// const AboutTab = () => {
//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-semibold mb-2">About Dr. Rajesh Kumar</h3>
//       <p className="text-gray-600 mb-4">
//         Dr. Rajesh Kumar is a highly experienced cardiologist with over 15 years of practice.
//         He specializes in interventional cardiology, heart disease prevention, and cardiac
//         rehabilitation. He has performed over 1000+ successful cardiac procedures and is known
//         for his patient-centric approach.
//       </p>

//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Education */}
//         <div>
//           <h4 className="font-semibold mb-2">Education & Qualifications</h4>
//           <ul className="list-disc pl-5 text-gray-600 space-y-1">
//             <li>MBBS - King George Medical University, Lucknow (2008)</li>
//             <li>MD Cardiology - AIIMS, Delhi (2012)</li>
//             <li>Fellowship - Cleveland Clinic, USA (2014)</li>
//           </ul>
//         </div>

//         {/* Awards */}
//         <div>
//           <h4 className="font-semibold mb-2">Awards & Recognition</h4>
//           <ul className="list-disc pl-5 text-gray-600 space-y-1">
//             <li>Best Cardiologist Award - Mumbai Medical Association (2022)</li>
//             <li>Excellence in Patient Care - Apollo Hospitals (2021)</li>
//             <li>Research Excellence Award - Indian Medical Council (2020)</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

export default DoctorProfile;
