// components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1c2b36] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="relative w-32 h-16 bg-white rounded-md overflow-hidden">
                            <Image
                                src="/images/logoedited.png"
                                alt="HealthBooster logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <h1 className="text-2xl font-bold text-white">HealthBooster</h1>
                    </div>

                    <p className="text-sm">
                        Your trusted healthcare partner providing easy access to doctors,
                        diagnostic tests, and medicines.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-4 mt-4 text-lg">
                        <FaFacebook className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h2 className="font-semibold text-white mb-3">Services</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Find Doctors</li>
                        <li>Book Appointments</li>
                        <li>Lab Tests</li>
                        <li>Medicine Delivery</li>
                        <li>Health Checkups</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h2 className="font-semibold text-white mb-3">Support</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="font-semibold text-white mb-3">Contact</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <FiPhone className="text-blue-400" /> +91 6394832414
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMail className="text-blue-400" /> support@healthbooster.com
                        </li>
                        <li className="flex items-start gap-2">
                            <FiMapPin className="text-blue-400 mt-1" />
                            123 Health Street, Medical District, Mumbai 400001
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
                © 2025 <span className="text-white">HealthBooster</span>. All rights reserved. | Designed for your health and convenience.
            </div>
        </footer>
    );
}
