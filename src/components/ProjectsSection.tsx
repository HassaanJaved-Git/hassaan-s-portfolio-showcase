import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "One Stop Frontend",
    description:
    "An all‑in‑one frontend toolkit that demonstrates modern UI patterns and responsive layouts. It emphasises clean component architecture, modular styling, and accessibility best practices. The project was built with reusability in mind so new pages can be added with minimal effort.",
    tech: ["REACT", "Tailwind", "node", "express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/one-stop-frontend",
    featured: false,
    live: "https://one-stop-frontend.onrender.com/",
  },
  {
    title: "Eventify",
    description:
      "A full-stack event management platform allowing users to create, browse, register and manage events. The frontend offers a clean, responsive interface while the backend provides a secure REST API with authentication and data persistence. Built using a modern JavaScript stack, it handles real-time updates and scalable data storage.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/Eventify",
    featured: true,
    live: "", 
  },
  {
    title: "Umrahrides",
    description:
    "A transportation service tailored for pilgrims performing Umrah, simplifying the booking of rides and route planning. It features a user-friendly interface and real-time location tracking. The responsive design ensures it works well on both mobile and desktop, helping users coordinate travel during the pilgrimage.",
    tech: ["React", "tailwind"],
    github: "https://github.com/HassaanJaved-Git/umrahrides",
    featured: false,
    live: "https://umrahrides.com/",
  },

];

const ProjectsSection = () => {
  // no separate sections needed; render all projects

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading number="03" title="Things I've Built" />

        <div className="space-y-20">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass-card p-8 hover-glow">
                {project.featured && (
                  <p className="font-mono text-xs text-primary mb-2">Featured Project</p>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
