import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import ParticlesBackground from "../components/ParticlesBackground";

const Projects = () => (
  <div className="relative">
    <ParticlesBackground />
    <Navbar />
    <main className="relative z-10">
      <ProjectsSection />
    </main>
    <Footer />
  </div>
);

export default Projects;
