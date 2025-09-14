"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaUserMd, FaFlask, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

// Optional: tweak routes here
const routes = {
  doctor: { login: "/login/doctor", signup: "/sign-up/doctor" },
  lab: { login: "/login/laboratory", signup: "/sign-up/laboratory" },
  user: { login: "/login/user", signup: "/sign-up/user" },
};

const cards = [
  {
    title: "Doctor Login",
    Icon: FaUserMd,
    loginHref: routes.doctor.login,
    signupHref: routes.doctor.signup,
  },
  {
    title: "User Login",
    Icon: FaUser,
    loginHref: routes.user.login,
    signupHref: routes.user.signup,
  },
  {
    title: "Laboratory Login",
    Icon: FaFlask,
    loginHref: routes.lab.login,
    signupHref: routes.lab.signup,
  },
];

export default function AuthPortal() {
  return (
    <main className="min-h-[85vh] w-full bg-gray-50 px-4 py-10 md:py-16 ">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Welcome to the HealthBooster Portal
          </h1>
          <p className="mt-2 text-gray-600">Choose your role to continue.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map(({ title, Icon, loginHref, signupHref }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl focus-within:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-full flex flex-col items-center justify-between p-6 md:p-8 text-white">
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
                  {title}
                </h2>

                {/* Center Icon */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <Icon className="h-20 w-20" aria-hidden="true" />
                </div>

                {/* Login Button */}
                <Link
                  href={loginHref}
                  aria-label={`${title} – Login`}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-white/20 hover:bg-white/30 backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-white/60 mb-4"
                  onClick={(e) => {
                    // Handle login navigation
                  }}
                >
                  Login
                </Link>

                {/* Signup Link */}
                <span className="text-white/80 text-sm text-center">
                  Not registered? {" "}
                  <Link
                    href={signupHref}
                    className="underline underline-offset-4 hover:no-underline font-medium"
                    aria-label={`${title} – Sign up`}
                    onClick={(e) => {
                      // Handle signup navigation
                    }}
                  >
                    Sign up
                  </Link>
                </span>
              </div>

              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 rounded-3xl bg-white/10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
