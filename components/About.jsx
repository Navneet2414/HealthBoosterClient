import { 
  FaUserFriends, FaUserMd, FaShieldAlt, FaHeart, FaStar, 
  FaUserShield, FaHeartbeat, FaClock, FaMedal, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaUsers, FaHandshake, FaHeadset, FaAward,
  FaStethoscope, FaLaptopMedical, FaAmbulance, FaHospital,
  FaLinkedin, FaTwitter, FaGithub, FaQuoteLeft
} from "react-icons/fa";

export const metadata = {
  title: "About Us - HealthBooster | Leading Healthcare Platform in India",
  description: "Learn about HealthBooster's mission to make quality healthcare accessible to everyone. Meet our team of healthcare experts and technology innovators transforming healthcare delivery in India.",
  keywords: "about healthbooster, healthcare mission, medical team, healthcare innovation, patient care, health technology, healthcare platform India",
  openGraph: {
    title: "About HealthBooster - Healthcare Innovation Team",
    description: "Discover how HealthBooster is revolutionizing healthcare access with 500+ expert doctors, 50,000+ happy patients, and 98% success rate.",
    images: ["/images/logoedited.png"],
  },
};

export default function AboutSection() {
  return (
    <section className="min-h-screen overflow-hidden">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 bg-green-400/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <FaStethoscope className="text-2xl sm:text-3xl text-white" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            About HealthBooster
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100">
            Revolutionizing healthcare access with cutting-edge technology, compassionate care, 
            and an unwavering commitment to better health outcomes for everyone.
          </p>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[
            { icon: FaUserFriends, count: "50,000+", label: "Happy Patients", color: "from-blue-500 to-blue-600", bgColor: "from-blue-50 to-blue-100" },
            { icon: FaUserMd, count: "500+", label: "Expert Doctors", color: "from-green-500 to-green-600", bgColor: "from-green-50 to-green-100" },
            { icon: FaShieldAlt, count: "10+", label: "Years of Trust", color: "from-purple-500 to-purple-600", bgColor: "from-purple-50 to-purple-100" },
            { icon: FaHeart, count: "98%", label: "Success Rate", color: "from-red-500 to-red-600", bgColor: "from-red-50 to-red-100" }
          ].map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className={`group bg-gradient-to-br ${stat.bgColor} p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-white/50`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <IconComponent className="text-lg sm:text-xl lg:text-2xl text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.count}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <FaLaptopMedical className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Our Mission</h2>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                At HealthBooster, we believe that quality healthcare should be accessible, affordable, 
                and convenient for everyone. Our mission is to bridge the gap between patients and 
                healthcare providers through innovative technology solutions.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We're committed to making healthcare more human by removing barriers, reducing wait times, 
                and ensuring that every interaction is meaningful and beneficial for both patients and providers.
              </p>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                {[
                  { icon: FaAmbulance, text: "Emergency Care" },
                  { icon: FaHospital, text: "Quality Service" },
                  { icon: FaHeartbeat, text: "Patient First" }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md">
                      <IconComponent className="text-blue-500 text-sm sm:text-base" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 text-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <FaQuoteLeft className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Healthcare Innovation</h3>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                  "Technology should enhance the human touch in healthcare, not replace it. 
                  We're building platforms that bring out the best in both."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Dr. Raj Patel</p>
                    <p className="text-blue-200 text-xs sm:text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Values</h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The fundamental principles that drive our commitment to exceptional healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Patient-Centric Care",
                desc: "Every decision we make prioritizes patient wellbeing, comfort, and satisfaction above all else.",
                icon: FaHeartbeat,
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50"
              },
              {
                title: "Trust & Security",
                desc: "Your health data is protected with enterprise-grade security and complete transparency.",
                icon: FaUserShield,
                color: "from-blue-500 to-indigo-500",
                bgColor: "from-blue-50 to-indigo-50"
              },
              {
                title: "24/7 Availability",
                desc: "Round-the-clock support because healthcare emergencies don't follow business hours.",
                icon: FaClock,
                color: "from-green-500 to-teal-500",
                bgColor: "from-green-50 to-teal-50"
              },
              {
                title: "Excellence & Innovation",
                desc: "Continuously pushing boundaries to deliver the highest standards of medical care.",
                icon: FaMedal,
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-50"
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className={`group p-6 sm:p-8 bg-gradient-to-br ${item.bgColor} rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/50`}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Meet Our Leadership</h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visionary leaders combining healthcare expertise with technological innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                desc: "Leading medical innovation with 20+ years of experience in healthcare technology and patient care excellence.",
                image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff&size=150",
                social: [FaLinkedin, FaTwitter]
              },
              {
                name: "Raj Patel",
                role: "CEO & Founder",
                desc: "Visionary entrepreneur dedicated to making quality healthcare accessible and affordable for everyone, everywhere.",
                image: "https://ui-avatars.com/api/?name=Raj+Patel&background=10b981&color=fff&size=150",
                social: [FaLinkedin, FaTwitter, FaGithub]
              },
              {
                name: "Dr. Michael Chen",
                role: "Head of Quality Assurance",
                desc: "Ensuring the highest standards of medical care through rigorous quality protocols and safety measures.",
                image: "https://ui-avatars.com/api/?name=Michael+Chen&background=8b5cf6&color=fff&size=150",
                social: [FaLinkedin]
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
              >
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-xl sm:rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl sm:rounded-2xl group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all duration-300"></div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-bold mb-4 sm:mb-6 text-center text-base sm:text-lg">{member.role}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center mb-6 sm:mb-8">{member.desc}</p>
                
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  {member.social.map((Social, idx) => (
                    <div key={idx} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <Social className="text-white text-sm sm:text-base" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-30 h-30 sm:w-60 sm:h-60 bg-green-400/20 rounded-full blur-3xl animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Journey</h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Founded in 2020 during the global pandemic, HealthBooster emerged from the critical 
                need to make healthcare accessible when traditional systems faced unprecedented challenges.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                What began as a simple appointment booking platform has transformed into a comprehensive 
                healthcare ecosystem, serving thousands of patients daily and partnering with hundreds 
                of healthcare providers nationwide.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                Our journey continues as we work relentlessly towards a future where quality healthcare 
                is truly accessible to everyone, everywhere, at any time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2">
              {[
                { icon: FaUsers, count: "50K+", label: "Happy Patients", color: "text-blue-400" },
                { icon: FaHandshake, count: "500+", label: "Healthcare Partners", color: "text-green-400" },
                { icon: FaHeadset, count: "24/7", label: "Support Available", color: "text-yellow-400" },
                { icon: FaAward, count: "4.8", label: "Average Rating", color: "text-purple-400", extra: <FaStar className="inline ml-1" /> }
              ].map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={i}
                    className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center group hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <IconComponent className={`text-2xl sm:text-3xl lg:text-4xl ${stat.color} mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2 flex items-center justify-center`}>
                      {stat.count}
                      {stat.extra}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 sm:p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Let's Connect</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Ready to transform healthcare together? We'd love to hear from you.
              </p>
            </div>
            
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: FaPhoneAlt,
                    title: "Call Us",
                    info: "+91 98765 43210",
                    desc: "Available 24/7 for emergencies",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email Us",
                    info: "support@healthbooster.com",
                    desc: "We respond within 2 hours",
                    color: "from-green-500 to-green-600",
                    bgColor: "from-green-50 to-green-100"
                  },
                  {
                    icon: FaMapMarkerAlt,
                    title: "Visit Us",
                    info: "Mumbai, Delhi, Bangalore",
                    desc: "Multiple locations to serve you",
                    color: "from-purple-500 to-purple-600",
                    bgColor: "from-purple-50 to-purple-100"
                  }
                ].map((contact, i) => {
                  const IconComponent = contact.icon;
                  return (
                    <div
                      key={i}
                      className={`group text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${contact.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                    >
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${contact.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="text-white text-xl sm:text-2xl" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{contact.title}</h3>
                      <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2 break-words">{contact.info}</p>
                      <p className="text-sm sm:text-base text-gray-600">{contact.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}