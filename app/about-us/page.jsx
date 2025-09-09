// components/AboutSection.jsx
"use client";
import { FaUserFriends, FaUserMd, FaShieldAlt, FaHeart } from "react-icons/fa";
import { FaUserShield, FaHeartbeat, FaClock, FaMedal, FaUserCircle } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 text-center ">
        <h2 className="text-4xl font-bold">About HealthBooker</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Revolutionizing healthcare access with technology, compassion, and a
          commitment to better health outcomes for everyone.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        <div>
          <FaUserFriends className="mx-auto text-4xl text-blue-500" />
          <h3 className="text-2xl font-bold mt-2">50,000+</h3>
          <p className="text-gray-600">Happy Patients</p>
        </div>
        <div>
          <FaUserMd className="mx-auto text-4xl text-green-500" />
          <h3 className="text-2xl font-bold mt-2">500+</h3>
          <p className="text-gray-600">Expert Doctors</p>
        </div>
        <div>
          <FaShieldAlt className="mx-auto text-4xl text-purple-500" />
          <h3 className="text-2xl font-bold mt-2">10+</h3>
          <p className="text-gray-600">Years of Trust</p>
        </div>
        <div>
          <FaHeart className="mx-auto text-4xl text-red-500" />
          <h3 className="text-2xl font-bold mt-2">98%</h3>
          <p className="text-gray-600">Success Rate</p>
        </div>
      </div>

      {/* Mission & Innovation Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Mission */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            At HealthBooker, we believe that quality healthcare should be
            accessible, affordable, and convenient for everyone. Our mission is
            to bridge the gap between patients and healthcare providers through
            innovative technology.
          </p>
          <p className="text-gray-700">
            We're committed to making healthcare more human by removing
            barriers, reducing wait times, and ensuring that every interaction
            is meaningful and beneficial for patients and providers alike.
          </p>
        </div>

        {/* Innovation Card */}
        <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Healthcare Innovation</h3>
          <p>
            "Technology should enhance the human touch in healthcare, not
            replace it. We're building platforms that bring out the best in
            both."
          </p>
        </div>
      </div>

   
      {/* Our Values */}
      <div className="mx-auto px-6 bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <p className="text-gray-600 text-center mt-2 mb-10">
          The principles that guide everything we do in delivering exceptional healthcare experiences
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaHeartbeat className="text-4xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-center">Patient-Centric Care</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              We put patients first in everything we do, ensuring compassionate and personalized healthcare.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaUserShield className="text-4xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-center">Trust & Safety</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              Your health data is secure with us. We maintain the highest standards of privacy and security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaClock className="text-4xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-center">24/7 Availability</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              Healthcare emergencies don’t wait. Our support team is available round the clock.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaMedal className="text-4xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-center">Excellence in Service</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              We continuously strive for excellence in healthcare delivery and patient satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <p className="text-gray-600 text-center mt-2 mb-10">
          Healthcare experts and technology innovators working together to transform healthcare
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <FaUserCircle className="text-5xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-bold">Dr. Sarah Johnson</h3>
            <p className="text-blue-600 text-sm font-semibold">Chief Medical Officer</p>
            <p className="text-gray-600 text-sm mt-2">
              20+ years in healthcare technology and patient care innovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <FaUserCircle className="text-5xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-bold">Raj Patel</h3>
            <p className="text-blue-600 text-sm font-semibold">CEO & Founder</p>
            <p className="text-gray-600 text-sm mt-2">
              Healthcare entrepreneur with a vision to make quality healthcare accessible to all.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <FaUserCircle className="text-5xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-bold">Dr. Michael Chen</h3>
            <p className="text-blue-600 text-sm font-semibold">Head of Quality Assurance</p>
            <p className="text-gray-600 text-sm mt-2">
              Ensuring the highest standards of medical care and safety protocols.
            </p>
          </div>
        </div>
      </div>


       <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-2 text-gray-600">
            The principles that guide everything we do in delivering exceptional healthcare experiences
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Patient-Centric Care",
                desc: "We put patients first in everything we do, ensuring compassionate and personalized healthcare.",
                icon: "💚",
              },
              {
                title: "Trust & Safety",
                desc: "Your health data is secure with us. We maintain the highest standards of privacy and security.",
                icon: "🔒",
              },
              {
                title: "24/7 Availability",
                desc: "Healthcare emergencies don’t wait. Our support team is available round the clock.",
                icon: "⏰",
              },
              {
                title: "Excellence in Service",
                desc: "We continuously strive for excellence in healthcare delivery and patient satisfaction.",
                icon: "🏅",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-2 text-gray-600">
            Healthcare experts and technology innovators working together to transform healthcare
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                desc: "20+ years in healthcare technology and patient care innovation.",
              },
              {
                name: "Raj Patel",
                role: "CEO & Founder",
                desc: "Healthcare entrepreneur with a vision to make quality healthcare accessible to all.",
              },
              {
                name: "Dr. Michael Chen",
                role: "Head of Quality Assurance",
                desc: "Ensuring the highest standards of medical care and safety protocols.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 rounded-full text-white text-2xl">
                  👤
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      
        <div className="mx-auto text-center py-16 bg-gray-900 text-white mb-5">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 text-gray-300 text-center mx-auto max-w-md">
            Founded in 2020 during the global pandemic, HealthBooker was born from the urgent
            need to make healthcare accessible when traditional systems were overwhelmed.
            What started as a simple appointment booking platform has evolved into a
            comprehensive healthcare ecosystem.
          </p>
          <p className="mt-4 text-gray-400 text-center mx-auto max-w-md">
            Today, we’re proud to serve thousands of patients daily, partnering with hundreds of
            healthcare providers across the country. Our journey continues as we work towards a
            future where quality healthcare is truly accessible to everyone, everywhere.
          </p>
        </div>
      

      {/* Get in Touch */}
      
        <div className="py-16 mx-auto bg-blue-50 border border-blue-200 rounded-lg shadow p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Have questions about our services? Want to partner with us? We’d love to hear from you.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <FaPhoneAlt className="mx-auto text-blue-500 text-2xl" />
              <h3 className="mt-2 font-medium">Call Us</h3>
              <p className="text-gray-600 text-sm mt-1">+91 98765 43210</p>
            </div>
            <div>
              <FaEnvelope className="mx-auto text-green-500 text-2xl" />
              <h3 className="mt-2 font-medium">Email Us</h3>
              <p className="text-gray-600 text-sm mt-1">support@healthbooker.com</p>
            </div>
            <div>
              <FaMapMarkerAlt className="mx-auto text-purple-500 text-2xl" />
              <h3 className="mt-2 font-medium">Visit Us</h3>
              <p className="text-gray-600 text-sm mt-1">Mumbai, Delhi, Bangalore</p>
            </div>
          </div>
        </div>
    


    </section>
  );
}
