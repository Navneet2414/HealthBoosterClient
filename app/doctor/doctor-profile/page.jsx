import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";


export default function DoctorProfile() {


  const doctors = [
    {
      id: 1,
      name: "Dr.Rajesh Kumar",
      specialization: "Cardiologist",
      degree: "MBBS, MD (Cardiology)",
      rating: 4.8,
      reviews: 120,
      experience: "15+ years",
      hospital: "City General Hospital",
      languages: ["English", "Hindi"],
      fee: 2000,
      nextAvailable: "Tomorrow",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Dr.Priya Sharma",
      specialization: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      rating: 4.7,
      reviews: 90,
      experience: "12+ years",
      hospital: "Fortis Hospital",
      languages: ["English", "Hindi"],
      fee: 1500,
      nextAvailable: "Today",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Dr.Priya Sharma",
      specialization: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      rating: 4.7,
      reviews: 90,
      experience: "12+ years",
      hospital: "Fortis Hospital",
      languages: ["English", "Hindi"],
      fee: 1500,
      nextAvailable: "Today",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      rating: 4.7,
      reviews: 90,
      experience: "12+ years",
      hospital: "Fortis Hospital",
      languages: ["English", "Hindi"],
      fee: 1500,
      nextAvailable: "Today",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ8ZW58MHx8MHx8fDA%3D",
    },
    // Add more doctors here
  ];
  return (
    <div className="space-y-4 p-6 ">

      <h1 className="text-2xl font-bold text-gray-800"> Doctor's For Your Health Consultation </h1>
      {doctors.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          {/* Doctor Info */}
          <div className="flex gap-4">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-30 h-35 rounded-md object-cover border border-green-300"
            />
            <div>
              <h3 className="font-semibold text-lg">{doc.name}</h3>
              <p className="text-blue-600 font-medium">{doc.specialization}</p>
              <p className="text-gray-600 text-sm">{doc.degree}</p>
              <div className="flex items-center text-sm mt-1">
                <FaStar className="text-yellow-400 mr-1" />
                <span>
                  {doc.rating} ({doc.reviews} reviews) • {doc.experience}
                </span>
              </div>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                <MdLocationOn className="text-green-500 mr-1" />
                {doc.hospital}
              </p>
              <div className="flex gap-2 mt-1">
                {doc.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fee + Buttons */}
          <div className="flex flex-col items-start md:items-end mt-3 md:mt-0">
            <p className="text-green-600 font-semibold text-lg">₹{doc.fee}</p>
            <p className="text-sm text-gray-600">
              Next Available: {doc.nextAvailable}
            </p>
            <div className="flex gap-2 mt-2">
              <Link href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${doc.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="border px-4 py-1 rounded-md text-blue-500">
                  View Profile
                </span>
              </Link>
              <Link href={`/doctor/doctor-profile/${doc.specialization.toLowerCase()}/${doc.name.toLowerCase().replace(/\s+/g, '-')}/appointment`}>
                <span className="bg-green-500 text-white px-4 py-1 rounded-md">
                  Book Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}