"use client";

import { FiDownload } from "react-icons/fi";

export default function LabReports() {
  const labReports = [
    {
      id: 1,
      title: "Complete Blood Count",
      lab: "Apollo Diagnostics",
      date: "Dec 12, 2024",
      status: "Ready",
      downloadable: true,
    },
    {
      id: 2,
      title: "Lipid Profile",
      lab: "Dr. Lal PathLabs",
      date: "Dec 8, 2024",
      status: "Ready",
      downloadable: true,
    },
    {
      id: 3,
      title: "Thyroid Function Test",
      lab: "SRL Diagnostics",
      date: "Dec 15, 2024",
      status: "Processing",
      downloadable: false,
    },
  ];

  return (
    <div className=" bg-gray-50 flex flex-col items-center px-4 py-6">
      <div className="w-full ">
        <h2 className="text-xl font-semibold mb-4">Lab Reports</h2>
        <div className="space-y-3">
          {labReports.map((report) => (
            <LabReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LabReportCard({ report }) {
  const { title, lab, date, status, downloadable } = report;

  return (
    <div className="bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center border rounded-lg p-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-green-600 text-lg">🧪</span>
        </div>

        {/* Report Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600 text-sm">{lab}</p>
          <p className="text-gray-500 text-sm">Date: {date}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 mt-3 sm:mt-0">
        <StatusBadge status={status} />
        {downloadable && (
          <button className="border border-blue-400 text-blue-500 flex items-center gap-2 px-3 py-1 rounded-md text-sm hover:bg-blue-50">
            <FiDownload /> Download Report
          </button>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles =
    status === "Ready"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles}`}>
      {status}
    </span>
  );
}
