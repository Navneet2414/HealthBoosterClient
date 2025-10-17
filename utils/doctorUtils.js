// Generate doctor profile URL
export function generateDoctorProfileUrl(doctor) {
  const speciality = doctor.specialization?.toLowerCase().replace(/\s+/g, '-') || 'general';
  const city = doctor.address?.city?.toLowerCase().replace(/\s+/g, '-') || 'unknown';
  const id = doctor._id;
  
  return `/doctor/doctor-profile/${speciality}/${city}/${id}`;
}

// Generate doctor name slug for SEO-friendly URLs (optional)
export function generateDoctorSlug(doctorName) {
  return doctorName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}