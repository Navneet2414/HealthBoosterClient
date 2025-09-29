import Link from "next/link";
import AboutTab from "@/components/doctor/AboutTab";
import AppointmentBooking from "@/components/doctor/AppointmentBooking";

// const doctorProfiles = {
//   "dr-sarah-johnson": {
//     name: "Dr. Sarah Johnson",
//     specialty: "Cardiologist",
//     rating: 4.9,
//     experience: "15 years",
//     image: "👩⚕️",
//     location: "New York",
//     education: "Harvard Medical School",
//     about: "Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience in treating heart conditions.",
//     consultationFee: "$150"
//   },
//   "dr-david-smith": {
//     name: "Dr. David Smith",
//     specialty: "Cardiologist",
//     rating: 4.8,
//     experience: "20 years",
//     image: "👨⚕️",
//     location: "California",
//     education: "Stanford Medical School",
//     about: "Dr. David Smith specializes in interventional cardiology and has performed over 5000 procedures.",
//     consultationFee: "$200"
//   }
// };

export default function DoctorProfile({ params }) {
  const { speciality, doctorname, city } = params;
  // const doctor = doctorProfiles[doctorname];

  // if (!doctor) {
  //   return (
  //     <div className="max-w-4xl mx-auto px-4 py-8 text-center">
  //       <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
  //       <Link href="/doctor" className="text-blue-600 hover:text-blue-800">
  //         ← Back to Doctors
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div className=" w-full px-4 py-8">
      <Link 
        href={`/doctor/${speciality}`}
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to {speciality} Specialists
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="text-6xl mr-6">{doctor.image}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
            <p className="text-xl text-blue-600 font-medium mb-2">{doctor.specialty}</p>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>⭐ {doctor.rating}</span>
              <span>📍 {city}</span>
              <span>🎓 {doctor.education}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <AboutTab doctor={doctor} doctorname={doctor.name} />
          </div>
          <div>
            <AppointmentBooking doctor={doctor} city={city} />
          </div>
        </div>
      </div>
    </div>
  );
}