import { FaStethoscope, FaFlask, FaPills, FaCalendarAlt, FaTruck, FaClock } from "react-icons/fa";
import Link from "next/link";
export default function HealthServices() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-200/20 to-blue-200/20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Complete Healthcare Solutions
          </h2>
          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need for your health in one platform - from consultations to medicines
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Doctor Appointments */}
          <Link href="/doctor" className="group bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between h-[480px] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-3xl p-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaStethoscope size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Doctor Appointments
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Book consultations with top doctors across specializations
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 mb-6">
                <ul className="text-sm text-gray-700 space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="font-medium">500+ Verified Doctors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="font-medium">Video Consultations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="font-medium">Instant Booking</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-4 rounded-2xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg group-hover:shadow-xl text-center">
              Book Appointment →
            </div>
          </Link>
          {/* Lab Tests */}
          <Link href="/laboratory" className="group bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between h-[480px] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl p-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaFlask size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Lab Tests
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Schedule diagnostic tests at certified labs near you
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 mb-6">
                <ul className="text-sm text-gray-700 space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                    <span className="font-medium">Home Sample Collection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                    <span className="font-medium">Digital Reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                    <span className="font-medium">Expert Analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 rounded-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-xl text-center">
              Book Test →
            </div>
          </Link>
          {/* Medicine Delivery */}
          <Link href="/order-medicine" className="group bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between h-[480px] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-3xl p-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPills size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Medicine Delivery
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Order prescribed medicines with doorstep delivery
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 mb-6">
                <ul className="text-sm text-gray-700 space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="font-medium">Prescription Upload</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="font-medium">Quick Delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="font-medium">Genuine Medicines</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-4 rounded-2xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg group-hover:shadow-xl text-center">
              Order Medicine →
            </div>
          </Link>
        </div>

        {/* Extra Features Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose HealthBooster?</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Experience healthcare like never before with our premium features</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Easy Scheduling */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaCalendarAlt className="text-blue-600 w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Easy Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Book appointments in just a few clicks with our intuitive interface
              </p>
            </div>

            {/* Home Delivery */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaTruck className="text-green-600 w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Home Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Medicines and reports delivered safely to your doorstep
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaClock className="text-blue-600 w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock customer assistance for all your healthcare needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
