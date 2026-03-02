import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import ParticlesBackground from "../components/ParticlesBackground";

const About = () => (
  <div className="relative">
    <ParticlesBackground />
    <Navbar />
    <main className="relative z-10">
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default About;
