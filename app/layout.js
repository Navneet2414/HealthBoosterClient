import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation  from "../components/shared/navigation";
import Footer from "@/components/shared/footer";
import ReduxProvider from "@/components/providers/ReduxProvider";
import AuthInitializer from "@/components/auth/AuthInitializer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://healthbooster.com'),
  title: "HealthBooster - Your Trusted Healthcare Partner | Book Doctors, Lab Tests & Medicines",
  description: "HealthBooster is India's leading healthcare platform offering easy online doctor consultations, diagnostic lab tests, and medicine delivery. Book appointments with certified doctors, get lab reports instantly, and order medicines with home delivery.",
  keywords: "healthcare, online doctor consultation, lab tests, medicine delivery, book appointment, health checkup, diagnostic tests, online pharmacy, telemedicine, health services India",
  authors: [{ name: "Navneet Yadav", url: "https://healthbooster.com" }],
  creator: "Navneet Yadav",
  publisher: "HealthBooster",
  robots: "index, follow",
  
  // Favicon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  
  // Open Graph meta tags for social media
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://healthbooster.com",
    siteName: "HealthBooster",
    title: "HealthBooster - Your Trusted Healthcare Partner",
    description: "Book doctor appointments, lab tests, and order medicines online. India's most trusted healthcare platform with certified doctors and instant lab reports.",
    images: [
      {
        url: "/images/logoedited.png",
        width: 1200,
        height: 630,
        alt: "HealthBooster - Healthcare Platform",
      },
    ],
  },
  
  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    site: "@healthbooster",
    creator: "@navneetyadav",
    title: "HealthBooster - Your Trusted Healthcare Partner",
    description: "Book doctor appointments, lab tests, and order medicines online. India's most trusted healthcare platform.",
    images: ["/images/logoedited.png"],
  },
  
  // Additional meta tags
  category: "Healthcare",
  classification: "Healthcare Platform",
  coverage: "Worldwide",
  distribution: "Global",
  rating: "General",
  referrer: "origin-when-cross-origin",
};


export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

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
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                  theme: {
                    primary: 'green',
                    secondary: 'black',
                  },
                },
              }}
            />
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
