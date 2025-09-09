"use client";
import React from "react";
// import { FaStar, FaClock } from "lucide-react";
import { FaStar, FaClock } from "react-icons/fa";

export default function IndividualTests() {
  const tests = [
    {
      title: "Complete Blood Count (CBC)",
      category: "Blood Tests",
      description: "Comprehensive blood analysis including RBC, WBC, platelets",
      price: 350,
      rating: 4.8,
      resultsTime: "4-6 hours",
      preparations: ["12-hour fasting required", "Avoid alcohol 24hrs before"],
      popular: true,
    },
    {
      title: "Lipid Profile",
      category: "Blood Tests",
      description: "Cholesterol and triglyceride levels assessment",
      price: 450,
      rating: 4.7,
      resultsTime: "6-8 hours",
      preparations: ["12-hour fasting required", "Normal water intake allowed"],
      popular: true,
    },
    {
      title: "Thyroid Function Test",
      category: "Hormone Tests",
      description: "TSH, T3, T4 levels to check thyroid function",
      price: 600,
      rating: 4.9,
      resultsTime: "24 hours",
      preparations: ["No special preparation required"],
      popular: false,
    },
    {
      title: "Diabetes Panel",
      category: "Blood Tests",
      description: "HbA1c, fasting glucose, post-meal glucose",
      price: 400,
      rating: 4.8,
      resultsTime: "4-6 hours",
      preparations: ["12-hour fasting required", "Bring recent meal details"],
      popular: true,
    },
    {
      title: "Vitamin D Test",
      category: "Vitamin Tests",
      description: "25-hydroxy vitamin D levels assessment",
      price: 800,
      rating: 4.6,
      resultsTime: "24-48 hours",
      preparations: ["No special preparation required"],
      popular: false,
    },
    {
      title: "Liver Function Test",
      category: "Blood Tests",
      description: "SGPT, SGOT, bilirubin, protein levels",
      price: 500,
      rating: 4.7,
      resultsTime: "6-8 hours",
      preparations: ["12-hour fasting required", "Avoid alcohol 48hrs before"],
      popular: false,
    },
  ];

  return (
    <div className=" mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Individual Tests</h2>
      <p className="text-gray-600 text-center mb-12">
        Book specific tests as per your requirement
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tests.map((test, idx) => (
          <div
            key={idx}
            className="border rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                {test.category}
              </span>
              {test.popular && (
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold">{test.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{test.description}</p>

            <div className="flex items-center justify-between mb-2">
              <span className="text-green-600 text-2xl font-bold">
                ₹{test.price}
              </span>
              <span className="flex items-center text-yellow-500">
                <FaStar className="w-4 h-4 fill-yellow-500" /> {test.rating}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
              <FaClock className="w-4 h-4" />
              Results in {test.resultsTime}
            </div>

            <p className="font-semibold">Preparations:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {test.preparations.map((prep, i) => (
                <li key={i}>{prep}</li>
              ))}
            </ul>

            <button className="w-full py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
              Book Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
