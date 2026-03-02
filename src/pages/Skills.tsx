import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillsSection";
import ParticlesBackground from "../components/ParticlesBackground";

const Skills = () => (
  <div className="relative">
    <ParticlesBackground />
    <Navbar />
    <main className="relative z-10">
      <SkillsSection />
    </main>
    <Footer />
  </div>
);

export default Skills;
