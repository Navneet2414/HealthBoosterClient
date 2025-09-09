// // import { FaStethoscope, FaFlask, FaPills } from "lucide-react";
// import { FaStethoscope, FaFlask, FaPills  } from "react-icons/fa";


// export default function HealthServices() {
//   return (
//     <section className="bg-[#f8fbff] py-20">
//       <div className="container mx-auto px-4 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Complete Healthcare Solutions
//         </h2>
//         <p className="mt-3 text-gray-600 text-base md:text-lg">
//           Everything you need for your health in one platform - from consultations to medicines
//         </p>

//         {/* Cards */}
//         <div className="mt-12 grid gap-8 md:grid-cols-3">
//           {/* Doctor Appointments */}
//           <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[420px]">
//             <div>
//               <div className="flex justify-center">
//                 <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl p-4 shadow-md">
//                   <FaStethoscope size={32} />
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-semibold text-gray-900">
//                 Doctor Appointments
//               </h3>
//               <p className="mt-2 text-gray-600 text-sm">
//                 Book consultations with top doctors across specializations
//               </p>
//               <ul className="mt-4 text-sm text-gray-700 space-y-2">
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> 500+ Verified Doctors
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Video Consultations
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Instant Booking
//                 </li>
//               </ul>
//             </div>
//             <button className="mt-6 w-full border-2 border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50">
//               Book Appointment →
//             </button>
//           </div>

//           {/* Lab Tests */}
//           <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[420px]">
//             <div>
//               <div className="flex justify-center">
//                 <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl p-4 shadow-md">
//                   <FaFlask size={32} />
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-semibold text-gray-900">
//                 Lab Tests
//               </h3>
//               <p className="mt-2 text-gray-600 text-sm">
//                 Schedule diagnostic tests at certified labs near you
//               </p>
//               <ul className="mt-4 text-sm text-gray-700 space-y-2">
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Home Sample Collection
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Digital Reports
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Expert Analysis
//                 </li>
//               </ul>
//             </div>
//             <button className="mt-6 w-full border-2 border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50">
//               Book Test →
//             </button>
//           </div>

//           {/* Medicine Delivery */}
//           <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[420px]">
//             <div>
//               <div className="flex justify-center">
//                 <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl p-4 shadow-md">
//                   <FaPills size={32} />
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-semibold text-gray-900">
//                 Medicine Delivery
//               </h3>
//               <p className="mt-2 text-gray-600 text-sm">
//                 Order prescribed medicines with doorstep delivery
//               </p>
//               <ul className="mt-4 text-sm text-gray-700 space-y-2">
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Prescription Upload
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Quick Delivery
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-green-500">●</span> Genuine Medicines
//                 </li>
//               </ul>
//             </div>
//             <button className="mt-6 w-full border-2 border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50">
//               Order Medicine →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { FaStethoscope, FaFlask, FaPills, FaCalendarAlt, FaTruck, FaClock } from "react-icons/fa";

export default function HealthServices() {
  return (
    <section className="bg-[#f8fbff] py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Complete Healthcare Solutions
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Everything you need for your health in one platform - from consultations to medicines
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Doctor Appointments */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[420px]">
            <div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl p-4 shadow-md">
                  <FaStethoscope size={32} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Doctor Appointments
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Book consultations with top doctors across specializations
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> 500+ Verified Doctors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Video Consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Instant Booking
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full border-2 border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50">
              Book Appointment →
            </button>
          </div>

          {/* Lab Tests */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[420px]">
            <div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl p-4 shadow-md">
                  <FaFlask size={32} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Lab Tests
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Schedule diagnostic tests at certified labs near you
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Home Sample Collection
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Digital Reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Expert Analysis
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full border-2 border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50">
              Book Test →
            </button>
          </div>

          {/* Medicine Delivery */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[420px]">
            <div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl p-4 shadow-md">
                  <FaPills size={32} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Medicine Delivery
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Order prescribed medicines with doorstep delivery
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Prescription Upload
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Quick Delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span> Genuine Medicines
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full border-2 border-blue-500 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50">
              Order Medicine →
            </button>
          </div>
        </div>

        {/* Extra Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">
          {/* Easy Scheduling */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full">
              <FaCalendarAlt className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Easy Scheduling</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Book appointments in just a few clicks
            </p>
          </div>

          {/* Home Delivery */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full">
              <FaTruck className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Home Delivery</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Medicines and reports delivered to your door
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full">
              <FaClock className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Round-the-clock customer assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
