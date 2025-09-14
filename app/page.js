import Image from "next/image";
import HomeDashboard from "./home/homedashboard";
import HealthServices from "./home/healthservices";
import FeaturedDoctors from "./home/featureddoctor";

export const metadata = {
  title: "HealthBooster - India's Leading Healthcare Platform | Book Doctors Online",
  description: "Book doctor appointments, lab tests, and order medicines online with HealthBooster. India's most trusted healthcare platform with certified doctors, instant lab reports, and home delivery.",
  keywords: "healthcare India, online doctor consultation, book appointment, lab tests online, medicine delivery, health checkup, telemedicine, online pharmacy",
  openGraph: {
    title: "HealthBooster - India's Leading Healthcare Platform",
    description: "Book doctor appointments, lab tests, and order medicines online. Trusted by millions of Indians for quality healthcare services.",
    images: ["/images/homepage.png"],
  },
};

export default function Home() {
  return (
    <div>
      <HomeDashboard />
      <HealthServices />
      <FeaturedDoctors />
    </div>
  );
}
