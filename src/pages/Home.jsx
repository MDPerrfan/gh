import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ServicesMarquee from "../components/home/ServicesMarquee";
import About from "../components/home/About";
import FounderSpotlight from "../components/home/FounderSpotlight";
import Services from "../components/home/Services";
import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";
import LocationHours from "../components/home/LocationHours";
import Footer from "../components/layout/Footer";
import ProductShowcase from "../components/home/Product";

export default function Home() {
  return (
    <div className="bg-ivory font-body">
      <Navbar />
      <Hero />
      <ServicesMarquee />
      <About />
      <FounderSpotlight />
      <Services />
      <Team />
      <ProductShowcase />
      <Testimonials />
      <LocationHours />
      <Footer />
    </div>
  );
}