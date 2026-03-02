import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import ParticlesBackground from "../components/ParticlesBackground";

const Contact = () => (
  <div className="relative">
    <ParticlesBackground />
    <Navbar />
    <main className="relative z-10">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
