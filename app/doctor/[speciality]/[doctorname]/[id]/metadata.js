// Server-side metadata generation for SEO
export async function generateMetadata({ params }) {
  const { speciality, doctorname, city } = params;
  
  // Extract doctor ID from doctorname
  const doctorId = doctorname.split('-').pop();
  
  try {
    // Fetch doctor data for metadata (server-side)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
    const response = await fetch(`${apiUrl}/doctor/getDoctorById/${doctorId}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Doctor not found');
    }
    
    const doctor = await response.json();
    
    const doctorName = doctor.name || 'Doctor';
    const doctorSpecialty = doctor.specialization || speciality;
    const doctorCity = doctor.city || city;
    
    return {
      title: `${doctorName} - ${doctorSpecialty} in ${doctorCity} | HealthBooster`,
      description: `Book appointment with ${doctorName}, experienced ${doctorSpecialty} in ${doctorCity}. ${doctor.about || `Professional ${doctorSpecialty} with years of experience.`}`,
      keywords: `${doctorName}, ${doctorSpecialty}, doctor in ${doctorCity}, book appointment, healthcare, medical consultation`,
      openGraph: {
        title: `${doctorName} - ${doctorSpecialty}`,
        description: `Book appointment with ${doctorName} in ${doctorCity}`,
        type: 'profile',
        locale: 'en_US',
        siteName: 'HealthBooster',
      },
      twitter: {
        card: 'summary',
        title: `${doctorName} - ${doctorSpecialty}`,
        description: `Book appointment with ${doctorName} in ${doctorCity}`,
      },
      alternates: {
        canonical: `/doctor/${speciality}/${doctorname}/${city}`,
      },
      robots: {
        index: true,
        follow: true,
      }
    };
  } catch (error) {
    // Fallback metadata if API fails
    return {
      title: `Doctor Profile - ${speciality} in ${city} | HealthBooster`,
      description: `Find and book appointments with qualified ${speciality} doctors in ${city}`,
      robots: {
        index: false,
        follow: true,
      }
    };
  }
}