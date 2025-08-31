import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation  from "../component/navigation.jsx";
import Footer from "@/component/footer";
import ReduxProvider from "@/components/providers/ReduxProvider";
import AuthInitializer from "@/components/auth/AuthInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HealthBooster || Navneet Yadav",
  description:
    "HealthBooster website is platform for patients to book Appointments for Doctors, Diagnostic Tests and Medicines",
  icons: {
    icon: "/images/logoedited.png",       // main favicon
    shortcut: "/images/logoedited.png",   // for older browsers
    apple: "/images/logoedited.png",      // for iOS
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <AuthInitializer>
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
