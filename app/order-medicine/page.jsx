// app/components/Homepage.tsx
import { FiSearch, FiUpload, FiShield, FiTruck, FiClock, FiPercent } from "react-icons/fi";

export default function Homepage() {
  return (
    <main className="w-full ">
      {/* ========== Order Medicines Online Section ========== */}
      <section className="bg-gradient-to-r from-blue-400 to-teal-400 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Order Medicines Online
          </h2>
          <p className="text-white mt-2">
            Genuine medicines delivered to your doorstep
          </p>

          <div className="mt-8 bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Medicines */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Search Medicines
              </h3>
              <div className="flex items-center border rounded-md overflow-hidden">
                <FiSearch className="ml-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search medicines, brands..."
                  className="flex-1 px-3 py-2 outline-none text-sm"
                />
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition">
                Search Medicines
              </button>
            </div>

            {/* Upload Prescription */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Upload Prescription
              </h3>
              <label
                htmlFor="fileUpload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:bg-gray-50 transition"
              >
                <FiUpload className="text-blue-500 mb-2" size={28} />
                <p className="text-gray-600 text-sm text-center">
                  Upload your prescription for prescription medicines
                </p>
                <span className="mt-3 inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-md">
                  Choose File
                </span>
                <input type="file" id="fileUpload" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Special Offers Section ========== */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Flat 20% Off</h3>
            <p className="text-sm mt-2">On all first orders</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Free Delivery</h3>
            <p className="text-sm mt-2">On orders above ₹499</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Daily Discounts</h3>
            <p className="text-sm mt-2">Save more with regular deals</p>
          </div>
        </div>
      </section>

      {/* ========== Shop by Categories Section ========== */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Shop by Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["Diabetes", "Heart Care", "Skin Care", "Vitamins"].map((cat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
              >
                <p className="font-medium text-gray-700">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Popular Medicines Section ========== */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Popular Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Paracetamol", "Vitamin C", "Amoxicillin", "Cough Syrup"].map((med, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
            >
              <p className="font-medium text-gray-700">{med}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Why Choose Us Section ========== */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">
            Trusted by millions for safe and genuine medicines
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                <FiShield size={24} />
              </div>
              <h3 className="font-semibold mt-3">100% Genuine</h3>
              <p className="text-gray-600 text-sm">
                All medicines are sourced from licensed vendors
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                <FiTruck size={24} />
              </div>
              <h3 className="font-semibold mt-3">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Same day delivery in major cities
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
                <FiClock size={24} />
              </div>
              <h3 className="font-semibold mt-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round the clock customer assistance
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 flex items-center justify-center rounded-full">
                <FiPercent size={24} />
              </div>
              <h3 className="font-semibold mt-3">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing with regular discounts
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
