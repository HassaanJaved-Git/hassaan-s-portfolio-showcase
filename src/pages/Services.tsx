import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import ParticlesBackground from "../components/ParticlesBackground";

const Services = () => (
  <div className="relative">
    <ParticlesBackground />
    <Navbar />
    <main className="relative z-10 pt-16">
      <ServicesSection />
    </main>
    <Footer />
  </div>
);

export default Services;
