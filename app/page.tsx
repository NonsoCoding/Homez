import FeaturedList from "@/components/Featured";
import HowCanWehelp from "@/components/Help";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import PropertiesByCities from "@/components/PropertiesByCities";
import Reasons from "@/components/Reasons";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="pb-5">
      <Hero />
      <FeaturedList />
      <Reasons />
      <PropertiesByCities />
      <TrustedBy />
      <HowCanWehelp />
    </div>
  );
}
