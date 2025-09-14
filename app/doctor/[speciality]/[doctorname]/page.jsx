import Link from "next/link";

const doctorProfiles = {
  "dr-sarah-johnson": {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    image: "👩⚕️",
    location: "New York",
    education: "Harvard Medical School",
    about: "Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience in treating heart conditions.",
    consultationFee: "$150"
  },
  "dr-david-smith": {
    name: "Dr. David Smith",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "20 years",
    image: "👨⚕️",
    location: "California",
    education: "Stanford Medical School",
    about: "Dr. David Smith specializes in interventional cardiology and has performed over 5000 procedures.",
    consultationFee: "$200"
  }
};

export default function DoctorProfile({ params }) {
  const doctorKey = params.doctorname;
  const doctor = doctorProfiles[doctorKey];

  if (!doctor) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
        <Link href="/doctor" className="text-blue-600 hover:text-blue-800">
          ← Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href={`/doctor/${params.speciality}`}
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to {params.speciality} Specialists
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="text-6xl mr-6">{doctor.image}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
            <p className="text-xl text-blue-600 font-medium mb-2">{doctor.specialty}</p>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>⭐ {doctor.rating}</span>
              <span>📍 {doctor.location}</span>
              <span>🎓 {doctor.education}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-700 mb-4">{doctor.about}</p>
            <div className="space-y-2">
              <p><strong>Experience:</strong> {doctor.experience}</p>
              <p><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">Available for consultation</p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}