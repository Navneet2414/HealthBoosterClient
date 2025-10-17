import { FiSearch, FiUpload, FiShield, FiTruck, FiClock, FiPercent } from "react-icons/fi";
import { FaPills, FaHeartbeat, FaUserMd, FaStar } from "react-icons/fa";

export default function Homepage() {
  return (
    <main className="w-full bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      {/* ========== Order Medicines Online Section ========== */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Order Medicines Online
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Genuine medicines delivered to your doorstep with care and precision
            </p>
            <div className="mt-4 w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100">
            {/* Search Medicines */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-3 rounded-full">
                  <FiSearch className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Search Medicines</h3>
                  <p className="text-gray-600 text-sm">Find your medicines instantly</p>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 transition-colors">
                  <FiSearch className="ml-4 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search medicines, brands, health conditions..."
                    className="flex-1 px-4 py-4 outline-none text-base"
                  />
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-xl font-bold hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Search Medicines
              </button>
            </div>

            {/* Upload Prescription */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-full">
                  <FiUpload className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Upload Prescription</h3>
                  <p className="text-gray-600 text-sm">Quick prescription upload</p>
                </div>
              </div>
              <label
                htmlFor="fileUpload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-8 cursor-pointer hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FiUpload className="text-blue-600" size={32} />
                </div>
                <p className="text-gray-700 text-base text-center font-medium mb-2">
                  Upload your prescription
                </p>
                <p className="text-gray-500 text-sm text-center mb-4">
                  Supports JPG, PNG, PDF files
                </p>
                <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all">
                  Choose File
                </span>
                <input type="file" id="fileUpload" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Special Offers Section ========== */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">Special Offers</h2>
          <p className="text-gray-600 text-lg">Exclusive deals and discounts just for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <FiPercent className="text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Flat 20% Off</h3>
              <p className="text-white/90">On all first orders above ₹299</p>
              <div className="mt-4 text-xs bg-white/20 px-3 py-1 rounded-full inline-block">LIMITED TIME</div>
            </div>
          </div>
          <div className="group bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <FiTruck className="text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
              <p className="text-white/90">On orders above ₹499 nationwide</p>
              <div className="mt-4 text-xs bg-white/20 px-3 py-1 rounded-full inline-block">ALWAYS ON</div>
            </div>
          </div>
          <div className="group bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <FaStar className="text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Daily Discounts</h3>
              <p className="text-white/90">Save more with regular deals</p>
              <div className="mt-4 text-xs bg-white/20 px-3 py-1 rounded-full inline-block">UPDATED DAILY</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Shop by Categories Section ========== */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Categories</h2>
            <p className="text-gray-600 text-lg">Find medicines by health condition</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "Diabetes", icon: "🩺", color: "from-blue-500 to-blue-600" },
              { name: "Heart Care", icon: "❤️", color: "from-red-500 to-pink-500" },
              { name: "Skin Care", icon: "✨", color: "from-green-500 to-green-600" },
              { name: "Vitamins", icon: "💊", color: "from-orange-500 to-yellow-500" }
            ].map((cat, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${cat.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <p className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">{cat.name}</p>
                <p className="text-gray-500 text-sm mt-1">Shop Now</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Popular Medicines Section ========== */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">Popular Medicines</h2>
          <p className="text-gray-600 text-lg">Most trusted and frequently ordered medicines</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Paracetamol", price: "₹25", rating: "4.8" },
            { name: "Vitamin C", price: "₹180", rating: "4.7" },
            { name: "Amoxicillin", price: "₹95", rating: "4.9" },
            { name: "Cough Syrup", price: "₹65", rating: "4.6" }
          ].map((med, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaPills className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">{med.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaStar className="text-yellow-500 text-sm" />
                <span className="text-gray-600 text-sm">{med.rating}</span>
              </div>
              <p className="text-green-600 font-bold text-xl mb-4">{med.price}</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Why Choose Us Section ========== */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose HealthBooster?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by millions for safe and genuine medicines with exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-green-100 text-blue-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <FiShield size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">100% Genuine</h3>
              <p className="text-gray-600 leading-relaxed">
                All medicines are sourced from licensed vendors and verified for authenticity
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-100 to-blue-100 text-green-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <FiTruck size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Same day delivery in major cities with temperature-controlled packaging
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-green-100 text-blue-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <FiClock size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round the clock customer assistance with expert pharmacist consultation
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-100 to-blue-100 text-green-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <FiPercent size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing with regular discounts and cashback offers
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
