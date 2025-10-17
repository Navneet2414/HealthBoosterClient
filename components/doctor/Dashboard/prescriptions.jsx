"use client";

import React from "react";

export default function Prescriptions() {
  const data = [
    {
      patient: "John Doe",
      date: "Jan 15, 2024",
      medications: ["Lisinopril 10mg - 1x daily", "Aspirin 81mg - 1x daily"],
      status: "Approved",
      followUp: "Jan 29, 2024",
      actions: ["Edit", "Print"],
    },
    {
      patient: "Jane Smith",
      date: "Jan 12, 2024",
      medications: ["Metformin 500mg - 2x daily", "Insulin Glargine - as needed"],
      status: "Pending",
      followUp: "Jan 26, 2024",
      actions: ["Edit", "Approve"],
    },
    {
      patient: "Mike Johnson",
      date: "Jan 10, 2024",
      medications: ["Sertraline 50mg - 1x daily", "Lorazepam 0.5mg - as needed"],
      status: "Dispensed",
      followUp: "Feb 10, 2024",
      actions: ["View", "Refill"],
    },
  ];

  const summary = [
    { number: 45, label: "This Month" },
    { number: 8, label: "Pending Approval" },
    { number: 37, label: "Approved" },
    { number: 32, label: "Dispensed" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium";
      case "Dispensed":
        return "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium";
      default:
        return "px-3 py-1 rounded-full text-sm font-medium";
    }
  };

  const getActionClass = (action) => {
    switch (action) {
      case "Edit":
      case "View":
        return "px-3 py-1 rounded-md text-sm font-medium border border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200";
      case "Print":
        return "px-3 py-1 rounded-md text-sm font-medium bg-green-500 text-white hover:bg-green-600";
      case "Approve":
        return "px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600";
      case "Refill":
        return "px-3 py-1 rounded-md text-sm font-medium bg-purple-500 text-white hover:bg-purple-600";
      default:
        return "px-3 py-1 rounded-md text-sm font-medium";
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold">Prescriptions</h2>
            <p className="text-gray-500 text-sm">
              Manage patient prescriptions and medical notes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-green-500">
              Create Prescription
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium">
              Generate Report
            </button>
            <select className="ml-2 border rounded px-3 py-2 text-sm">
              <option>All Prescriptions</option>
            </select>
          </div>
        </div>

        {/* Summary cards at top */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4 text-center text-white bg-gradient-to-r from-blue-500 to-green-500"
            >
              <p className="text-2xl font-bold">{item.number}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-600 border-b">
              <tr>
                <th className="px-4 py-2">Patient</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Medications</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Follow-up</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{row.patient}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">
                    {row.medications.map((med, idx) => (
                      <div key={idx}>{med}</div>
                    ))}
                  </td>
                  <td className="px-4 py-3">
                    <span className={getStatusClass(row.status)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{row.followUp}</td>
                  <td className="px-4 py-3 flex gap-2">
                    {row.actions.map((action, idx) => (
                      <button key={idx} className={getActionClass(action)}>
                        {action}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
