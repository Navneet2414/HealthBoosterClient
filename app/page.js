import Image from "next/image";
import HomeDashboard from "./home/homedashboard";
import HealthServices from "./home/healthservices";
import FeaturedDoctors from "./home/featureddoctor";

export default function Home() {
  return (
    <div>
<HomeDashboard />
<HealthServices />
<FeaturedDoctors />


    </div>
  );
}
