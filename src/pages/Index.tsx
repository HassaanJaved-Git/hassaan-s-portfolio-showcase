import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const Index = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <Marquee />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
