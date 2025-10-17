"use client";
import { useParams } from "next/navigation";
import { FaStar, FaCheckCircle, FaExclamationCircle, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

// Mock data
const packages = [
  {
    title: "Basic Health Checkup",
    slug: "basic-health-checkup",
    description: "Essential health screening package for general wellness assessment",
    price: 899,
    originalPrice: 1200,
    discount: "25% OFF",
    rating: "4.8 (1245 reviews)",
    resultsIn: "4-6 hours",
    save: "₹301",
    includes: [
      "Complete Blood Count (CBC)",
      "Lipid Profile",
      "Blood Sugar (Fasting & PP)",
      "Urine Analysis Complete",
      "Liver Function Test",
    ],
    preparations: [
      "12-hour fasting required before blood sample collection",
      "Avoid alcohol 24 hours before the test",
      "Wear comfortable clothing for easy blood collection",
      "Bring previous medical reports if any",
    ],
    benefits: [
      "Early detection of diabetes and heart diseases",
      "Comprehensive liver and kidney function assessment",
      "Complete blood profile analysis",
      "Urine infection screening",
    ],
  },
  {
     title: "Comprehensive Package",
      price: 1899,
      originalPrice: 2500,
      discount: "24% OFF",
      popular: true,
      includes: [
        "CBC",
        "Lipid Profile",
        "Thyroid",
        "Liver Function",
        "Kidney Function",
        "Vitamin D",
      ],

    preparations: [
      "Avoid caffeine and heavy meals 4 hours before ECG and TMT",
      "Wear comfortable clothing and shoes for TMT",
      "Inform the technician of any chest pain or discomfort during tests",
      "Bring previous cardiac reports if any",
    ],
    benefits: [
      "Detailed assessment of heart function and structure",
      "Early detection of coronary artery disease",
      "Evaluation of heart rhythm and electrical activity",
      "Risk stratification for future cardiac events",
    ],
  },
];

export default function PackageDetails() {
 const params = useParams();
const currentSlug = params.slug ; // handle both cases
const pkg = packages.find((p) => p.slug === currentSlug);

// Selected package: params.slug
  if (!pkg) {
    return <div className="mt-20 text-center text-red-500">Package not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2BC0E4] to-[#2BC0A4] p-6 text-white">
        <p className="text-sm opacity-90">Lab Tests / Health Package Details</p>
        <h1 className="text-3xl font-bold mt-1">{pkg.title}</h1>
        <p className="text-base mt-2 opacity-95">{pkg.description}</p>
      </div>

      {/* Main Content */}
      <div className=" mx-auto mt-6 p-4 flex gap-6">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          {/* Package Overview */}
          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              ✅ Package Overview
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* Results */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <MdAccessTime className="text-blue-500 text-xl mx-auto" />
                <p className="text-sm mt-2">Results in</p>
                <p className="font-semibold text-gray-800">{pkg.resultsIn}</p>
              </div>

              {/* Rating */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <FaStar className="text-yellow-500 text-xl mx-auto" />
                <p className="text-sm mt-2">Rating</p>
                <p className="font-semibold text-gray-800">{pkg.rating}</p>
              </div>

              {/* Discount */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {pkg.discount}
                </span>
                <p className="text-sm mt-2">You Save</p>
                <p className="font-semibold text-gray-800">{pkg.save}</p>
              </div>
            </div>
          </div>

          {/* Tests Included */}
          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Tests Included ({pkg.includes.length})
            </h2>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {pkg.includes.map((test, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">{test}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Test Preparations */}
          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="text-lg font-semibold text-orange-600 flex items-center gap-2">
              <FaExclamationCircle className="text-orange-500" /> Test Preparations
            </h2>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
              {pkg.preparations.map((prep, i) => (
                <li key={i}>{prep}</li>
              ))}
            </ul>
          </div>

          {/* Health Benefits */}
          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-800">Health Benefits</h2>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {pkg.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Pricing & Help */}
        <div className="w-[300px] space-y-6">
          {/* Price Box */}
          <div className="bg-white shadow rounded-xl p-5 h-fit border border-blue-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                ₹{pkg.price}{" "}
                <span className="line-through text-gray-400 text-lg">
                  ₹{pkg.originalPrice}
                </span>
              </p>
              <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full mt-2 inline-block">
                {pkg.discount}
              </span>
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-[#2BC0E4] to-[#2BC0A4] text-white py-2 rounded-lg font-semibold hover:opacity-90">
              Book Package
            </button>

            <button className="w-full mt-3 border border-blue-400 text-blue-500 py-2 rounded-lg font-semibold hover:bg-blue-50">
              📞 Call to Book
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Home collection available • NABL certified labs • Free report consultation
            </p>
          </div>

          {/* Help Section */}
          <div className="bg-white shadow rounded-xl p-5 border">
            <h2 className="text-lg font-semibold text-gray-800">Need Help?</h2>
            <div className="mt-3 space-y-2">
              <p className="flex items-center gap-2 text-blue-500">
                <FaPhone /> Call Us: <span className="text-gray-700">1800-123-4567</span>
              </p>
              <p className="flex items-center gap-2 text-green-600">
                <FaCalendarAlt /> Available: <span className="text-gray-700">24/7 Support</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
