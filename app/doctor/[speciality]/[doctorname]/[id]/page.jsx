"use client";
import Link from "next/link";
import { useGetDoctorByIdQuery } from "@/lib/store/api/doctorApi";
import AboutTab from "@/components/doctor/Dashboard/AboutTab";
import AppointmentBooking from "@/components/doctor/Dashboard/AppointmentBooking";



function extractDoctorId(doctorname) {
  const parts = doctorname.split('-');
  return parts[parts.length - 1];
}

function StructuredData({ doctor, city, speciality }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "jobTitle": doctor.specialization,
    "worksFor": {
      "@type": "Organization",
      "name": "HealthBooster"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": doctor.city || city
    },
    "description": doctor.about,
    "aggregateRating": doctor.rating ? {
      "@type": "AggregateRating",
      "ratingValue": doctor.rating,
      "ratingCount": "1"
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function DoctorProfile({ params }) {
  const { speciality, doctorname, city } = params;
  const doctorId = extractDoctorId(doctorname);
  
  const { data: doctor, isLoading, error } = useGetDoctorByIdQuery(doctorId);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-64 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found  At this page in side /doctor/{speciality}/{doctorname}/{city} pageprofile </h1>
        <Link href="/doctor" className="text-blue-600 hover:text-blue-800">
          ← Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <>
      <StructuredData doctor={doctor} city={city} speciality={speciality} />
      <div className=" w-full px-4 py-8">
      <Link 
        href={`/doctor/${speciality}`}
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to {speciality} Specialists
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="text-6xl mr-6">{doctor.profilePicture ? <img src={doctor.profilePicture} alt={doctor.name} className="w-24 h-24 rounded-full object-cover" /> : '👨⚕️'}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
            <p className="text-xl text-blue-600 font-medium mb-2">{doctor.specialization}</p>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>⭐ {doctor.rating || 'N/A'}</span>
              <span>📍 {doctor.city || city}</span>
              <span>🎓 {doctor.education || 'Medical Professional'}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <AboutTab doctor={doctor} doctorname={doctor.name} />
          </div>
          <div>
            <AppointmentBooking doctor={doctor} city={doctor.city || city} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}