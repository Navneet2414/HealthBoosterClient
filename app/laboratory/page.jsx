

// "use client";
// import React from "react";
// import IndividualTests from "./individuallabtest/page";
// import CertifiedPartnerLabs from "./certifiedpartnerlab/page";
// import { useRouter } from "next/navigation";

// export default function BookLabTests() {
//   const router = useRouter();

//   const packages = [
//     {
//       title: "Basic Health Checkup",
//       price: 899,
//       originalPrice: 1200,
//       discount: "25% OFF",
//       popular: true,
//       includes: ["CBC", "Lipid Profile", "Blood Sugar", "Urine Analysis"],
//     },
//     {
//       title: "Comprehensive Package",
//       price: 1899,
//       originalPrice: 2500,
//       discount: "24% OFF",
//       popular: true,
//       includes: [
//         "CBC",
//         "Lipid Profile",
//         "Thyroid",
//         "Liver Function",
//         "Kidney Function",
//         "Vitamin D",
//       ],
//     },
//     {
//       title: "Women's Health Package",
//       price: 2299,
//       originalPrice: 3000,
//       discount: "23% OFF",
//       popular: false,
//       includes: [
//         "CBC",
//         "Thyroid",
//         "Iron Studies",
//         "Vitamin B12",
//         "Pap Smear",
//         "Mammography",
//       ],
//     },
//   ];

//   // ✅ corrected to accept pkg title
//   const handleRedirect = (title) => {
//     const slug = title.toLowerCase().replace(/\s+/g, "-"); // create slug
//     router.push(`/laboratory/${slug}`); // navigate to dynamic route
//   };

//   return (
//     <div className=" bg-white">
//       {/* HERO SECTION */}
//       <div className="bg-gradient-to-r from-blue-500 to-green-500 py-16 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//           Book Lab Tests
//         </h1>
//         <p className="text-white text-lg">
//           Get accurate diagnostic tests from certified labs
//         </p>

//         {/* Search Box */}
//         <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-3 p-4">
//           <input
//             type="text"
//             placeholder="Search tests, health packages..."
//             className="flex-1 p-3 border rounded-lg outline-none"
//           />
//           <select className="p-3 border rounded-lg w-full sm:w-auto">
//             <option>Select location</option>
//             <option>Delhi</option>
//             <option>Mumbai</option>
//             <option>Bangalore</option>
//           </select>
//           <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
//             Search Tests
//           </button>
//         </div>
//       </div>

//       {/* PACKAGES SECTION */}
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-center mb-2">
//           Popular Health Packages
//         </h2>
//         <p className="text-gray-600 text-center mb-12">
//           Comprehensive packages at discounted rates
//         </p>

//         {/* Package Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {packages.map((pkg, idx) => (
//             <div
//               key={idx}
//               className="border rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-xl font-semibold">{pkg.title}</h3>
//                 {pkg.popular && (
//                   <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                     Popular
//                   </span>
//                 )}
//               </div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-2xl font-bold">
//                   ₹{pkg.price}
//                 </span>
//                 <span className="line-through text-gray-500">
//                   ₹{pkg.originalPrice}
//                 </span>
//                 <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
//                   {pkg.discount}
//                 </span>
//               </div>

//               <p className="font-semibold mb-2">Includes:</p>
//               <ul className="space-y-1 text-gray-700 mb-6">
//                 {pkg.includes.map((item, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-bold">●</span> {item}
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 onClick={() => handleRedirect(pkg.title)} // ✅ dynamic redirect
//                 className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:opacity-90"
//               >
//                 Book Package
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Individual Lab test */}
//         <div>
//           <IndividualTests />
//         </div>

//         {/* Certified Partner Labs */}
//         <CertifiedPartnerLabs />
//       </div>
//     </div>
//   );
// }


import Laboratory from "@/components/Laboratory/Laboratory";

export default function LaboratoryPage() {
  return (
    <div>
      <Laboratory />
    </div>
  );
}