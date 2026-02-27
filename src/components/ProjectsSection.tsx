import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eventify",
    description:
      "A full-stack event management platform where users can create, browse, and manage events. Built with a clean UI and robust backend API.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/Eventify",
    featured: true,
  },
  {
    title: "Shompo",
    description:
      "An e-commerce style web application with product listings, cart functionality, and a responsive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/HassaanJaved-Git/Shompo",
    featured: true,
  },
  {
    title: "One Stop Frontend",
    description:
      "A frontend project showcasing modern UI patterns, responsive layouts, and clean component architecture.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/HassaanJaved-Git/one-stop-frontend",
    featured: false,
  },
  {
    title: "To-Do List (MERN)",
    description:
      "A full-stack MERN to-do application — first MERN stack project with complete CRUD operations and persistent storage.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/to-do-list",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading number="03" title="Things I've Built" />

        {/* Featured */}
        <div className="space-y-20 mb-20">
          {featured.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass-card p-8 hover-glow">
                <p className="font-mono text-xs text-primary mb-2">Featured Project</p>
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
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other */}
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">Other Noteworthy Projects</h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4">
          {other.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="glass-card p-6 hover-glow h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-2xl">📁</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
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
