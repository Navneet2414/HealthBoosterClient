"use client";

import { useState } from "react";
import { FaStethoscope, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../lib/store/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push('/');
    };

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50  ">
            <div className=" mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    {/* <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl"> */}
                    {/* <FaStethoscope className="text-white text-xl" /> */}
                    <Link href="/" className="relative w-20 h-12 bg-white rounded-md overflow-hidden">
                        <Image
                            src="/images/logoedited.png"
                            alt="HealthBooster logo"
                            fill
                            className="rounded-full object-cover"
                            priority
                        />
                    </Link>
                    {/* </div> */}
                    {/* <span className="text-xl font-bold text-gray-800">HealthBooster</span> */}
                    <Link href="/">
                        <span
                            className="text-xl font-bold 
             bg-gradient-to-r from-green-400 via-green-500 to-blue-600 
             bg-clip-text text-transparent 
             animate-text"
                        >
                            HealthBooster
                        </span>
                    </Link>


                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
                    <li>
                        <Link href="/" className="text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/doctor">Find Doctors</Link>
                    </li>
                    <li>
                        <Link href="/laboratory">Book Tests</Link>
                    </li>
                    <li>
                        <Link href="/order-medicine">Order Medicine</Link>
                    </li>
                    <li>
                        <Link href="/about-us">About</Link>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                    {isAuthenticated ? (
                        <>
                            <Link
                                href={`/${user?.role || 'user'}/dashboard`}
                                className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-green-100 hover:text-green-600 font-medium rounded-lg"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 font-medium rounded-lg"
                            >
                                Logout
                            </button>
                            {/* Profile Image */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400">
                                <img
                                    src={user?.profileImage || `https://ui-avatars.com/api/?name=${user?.name}&background=3b82f6&color=fff&size=40`}
                                    alt={user?.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-green-100 hover:text-green-600 font-medium rounded-lg"
                            >
                                Login
                            </Link>
                            <Link
                                href="/sign-up"
                                className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                SignUp
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-gray-700"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-lg">
                    <Link href="/" className="block text-blue-500 font-medium">
                        Home
                    </Link>
                    <Link href="/doctor" className="block">
                        Find Doctors
                    </Link>
                    <Link href="/laboratory" className="block">
                        Book Tests
                    </Link>
                    <Link href="/order-medicine" className="block">
                        Order Medicine
                    </Link>
                    <Link href="/about-us" className="block">
                        About
                    </Link>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-2">
                        {isAuthenticated ? (
                            <>
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400">
                                        <img
                                            src={user?.profileImage || `https://ui-avatars.com/api/?name=${user?.name}&background=3b82f6&color=fff&size=40`}
                                            alt={user?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{user?.name}</p>
                                        <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
                                    </div>
                                </div>
                                <Link
                                    href={`/${user?.role || 'user'}/dashboard`}
                                    className="w-full text-center px-4 py-2 bg-green-100 text-green-600 font-medium rounded-lg"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-center px-4 py-2 bg-red-500 text-white font-medium rounded-lg"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="w-full text-center px-4 py-2 bg-green-100 text-green-600 font-medium rounded-lg"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="w-full text-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg"
                                >
                                    SignUp
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
