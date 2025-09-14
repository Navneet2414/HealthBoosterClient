"use client";

export default function CurrentMedications() {
  const medications = [
    {
      id: 1,
      name: "Paracetamol 650mg",
      dosage: "1 tablet twice daily",
      duration: "5 days",
      prescribedBy: "Dr. Rajesh Kumar",
      daysLeft: 3,
    },
    {
      id: 2,
      name: "Omeprazole 20mg",
      dosage: "1 tablet before breakfast",
      duration: "15 days",
      prescribedBy: "Dr. Priya Sharma",
      daysLeft: 8,
    },
  ];

  return (
    <div className=" bg-gray-50 flex flex-col items-center px-4 py-6">
      <div className="w-full ">
        <h2 className="text-xl font-semibold mb-4">Current Medications</h2>
        <div className="space-y-3">
          {medications.map((med) => (
            <MedicationCard key={med.id} medication={med} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MedicationCard({ medication }) {
  const { name, dosage, duration, prescribedBy, daysLeft } = medication;

  return (
    <div className="bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center border rounded-lg p-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-green-600 text-lg">💊</span>
        </div>

        {/* Medication Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 text-sm">{dosage}</p>
          <p className="text-gray-500 text-sm">Duration: {duration}</p>
          <p className="text-gray-500 text-sm">Prescribed by: {prescribedBy}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 mt-3 sm:mt-0">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          {daysLeft} days left
        </span>
        <button className="border border-blue-400 text-blue-500 px-3 py-1 rounded-md text-sm hover:bg-blue-50">
          Reorder
        </button>
      </div>
    </div>
  );
}
