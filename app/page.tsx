import CopyRight from "@/components/CopyRight";
import FeaturedList from "@/components/Featured";
import Footer from "@/components/Footer";
import HowCanWehelp from "@/components/Help";
import Hero from "@/components/Hero";
import MemberShip from "@/components/Membership";
import NavBar from "@/components/Navbar";
import PropertiesByCities from "@/components/PropertiesByCities";
import Reasons from "@/components/Reasons";
import TestimonialCarousel from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="pb-1">
      <Hero />
      <FeaturedList />
      <Reasons />
      <PropertiesByCities />
      <TrustedBy />
      <HowCanWehelp />
      <TestimonialCarousel />
      <MemberShip />
      <Footer />
      <CopyRight/>
    </div>
  );
}
