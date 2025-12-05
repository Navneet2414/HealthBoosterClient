import Link from "next/link";
import AboutTab from "@/components/doctor/Dashboard/AboutTab";
import AppointmentBooking from "@/components/doctor/Dashboard/AppointmentBooking";
import { notFound } from "next/navigation";
import { FaStar, FaMapMarkerAlt, FaHospital, FaMoneyBillWave, FaArrowLeft, FaUserMd, FaCheckCircle } from "react-icons/fa";

// Extract doctor ID from doctorname parameter
function extractDoctorId(doctorname) {
  const parts = doctorname.split('-');
  return parts[parts.length - 1];
}

// Fetch doctor data server-side
async function fetchDoctorById(doctorId) {
  try {
    console.log("FETCHING DOCTOR BY ID:", doctorId);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getDoctorById/${doctorId}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return data.doctor || data;
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { speciality, doctorname } = await params;
  const doctorId = extractDoctorId(doctorname);
  const doctor = await fetchDoctorById(doctorId);

  if (!doctor) {
    return {
      title: 'Doctor Not Found | HealthBooster',
      description: 'The requested doctor profile could not be found.'
    };
  }

  return {
    title: `${doctor.name} - ${doctor.specialization || speciality} | HealthBooster`,
    description: `Book appointment with ${doctor.name}, experienced ${doctor.specialization || speciality} in ${doctor.address?.city}. ${doctor.about || ''}`.slice(0, 160),
    keywords: `${doctor.name}, ${doctor.specialization}, ${speciality}, doctor, ${doctor?.city}, appointment, healthcare`,
    openGraph: {
      title: `${doctor.name} - ${doctor.specialization || speciality}`,
      description: doctor.about || `Experienced ${doctor.specialization || speciality} in ${doctor.address?.city}`,
      type: 'profile',
      images: doctor.profileImage ? [{ url: doctor.profileImage }] : [],
    },
    alternates: {
      canonical: `/doctor/doctor-profile/${speciality}/${doctorname}`
    }
  };
}

export default async function DoctorProfile({ params }) {
  const { speciality, doctorname } = await params;
  const doctorId = extractDoctorId(doctorname);
  const doctor = await fetchDoctorById(doctorId);

  if (!doctor) {
    notFound();
  }

  // Structured data for SEO
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
      "addressLocality": doctor?.city
    },
    "description": doctor.about,
    "aggregateRating": doctor.rating ? {
      "@type": "AggregateRating",
      "ratingValue": doctor.rating,
      "ratingCount": "1"
    } : undefined
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <Link 
              href={`/doctor/${speciality}`}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium hover:bg-white/30 transition-all duration-300 mb-6"
            >
              <FaArrowLeft className="text-sm" />
              Back to {speciality} Specialists
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
          {/* Doctor Profile Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                {/* Doctor Image */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-200 to-green-200 p-1">
                    {doctor.profileImage ? (
                      <img 
                        src={doctor.profileImage} 
                        alt={doctor.name} 
                        className="w-full h-full rounded-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center">
                        <FaUserMd className="text-4xl text-blue-600" />
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                    <FaCheckCircle className="text-xs" />
                    Available
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                  <p className="text-xl font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full inline-block mb-4">
                    {doctor.specialization}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white rounded-xl p-4 shadow-md text-center">
                      <FaStar className="text-yellow-500 text-xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-bold text-gray-800">{doctor.rating || '4.8'}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md text-center">
                      <FaMapMarkerAlt className="text-red-500 text-xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-bold text-gray-800">{doctor?.city || 'Noida'}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md text-center">
                      <FaHospital className="text-blue-500 text-xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Clinic</p>
                      <p className="font-bold text-gray-800 text-xs">{doctor.clinic || 'HealthBooster'}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md text-center">
                      <FaMoneyBillWave className="text-green-500 text-xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Fee</p>
                      <p className="font-bold text-gray-800">₹{doctor.consultationFee}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-1">
                    <div className="bg-white rounded-2xl p-6">
                      <AboutTab doctor={doctor} doctorname={doctor.name} />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-1">
                    <div className="bg-white rounded-2xl p-6">
                      <AppointmentBooking doctor={doctor} city={doctor.address?.city} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}