"use client";
import { FaUserMd, FaGraduationCap, FaTrophy, FaStethoscope, FaHeart, FaAward } from "react-icons/fa";

export default function AboutTab({ doctor, doctorname }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full">
          <FaUserMd className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">About {doctorname}</h3>
          <p className="text-blue-600 font-medium">Professional Profile</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start gap-3">
          <FaStethoscope className="text-blue-600 text-xl mt-1 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">
            {doctor.about || `${doctorname} is a highly experienced ${doctor.specialization || 'medical professional'} with over ${doctor.experience || '15'}+ years of practice. 
            Specializing in comprehensive patient care, preventive medicine, and advanced treatment protocols. 
            Known for a patient-centric approach and commitment to excellence in healthcare delivery.`}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Education Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaGraduationCap className="text-blue-600 text-lg" />
            </div>
            <h4 className="font-bold text-gray-800">Education & Qualifications</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">{doctor.degree || 'MBBS'}</p>
                <p className="text-sm text-gray-600">{doctor.education || 'Medical University (2008)'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">Specialization</p>
                <p className="text-sm text-gray-600">{doctor.specialization} - Advanced Training</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">Experience</p>
                <p className="text-sm text-gray-600">{doctor.experience}+ years of clinical practice</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <FaTrophy className="text-yellow-600 text-lg" />
            </div>
            <h4 className="font-bold text-gray-800">Awards & Recognition</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <FaAward className="text-yellow-600 text-sm mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Excellence in Patient Care</p>
                <p className="text-sm text-gray-600">Healthcare Excellence Award (2023)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <FaHeart className="text-red-500 text-sm mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Patient Satisfaction</p>
                <p className="text-sm text-gray-600">Top Rated Doctor - {doctor.rating || '4.8'}/5 Rating</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <FaStethoscope className="text-blue-600 text-sm mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Professional Recognition</p>
                <p className="text-sm text-gray-600">Medical Board Certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}