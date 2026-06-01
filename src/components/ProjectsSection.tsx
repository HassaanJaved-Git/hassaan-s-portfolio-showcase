import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { Github, ExternalLink } from "lucide-react";
import { t, useLanguage } from "../i18n";

const projects = [
    {
    title: "Oxygym",
    descriptionKey: "projects.descriptions.oxygym",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Muhammad-Shehroz046/oxygym",
    featured: true,
    live: "https://oxygym.onrender.com", 
  },
  {
    title: "One Stop Frontend",
    descriptionKey: "projects.descriptions.oneStopFrontend",
    tech: ["REACT", "Tailwind", "node", "express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/one-stop-frontend",
    featured: false,
    live: "https://one-stop-frontend.onrender.com/",
  },
  {
    title: "EasyTurf",
    descriptionKey: "projects.descriptions.easyturf",
    tech: ["React", "tailwind"],
    github: "https://github.com/HassaanJaved-Git/EasyTurf",
    featured: false,
    live: "https://easyturf.onrender.com",
  },

];

const ProjectsSection = () => {
  const { language } = useLanguage();
  // no separate sections needed; render all projects

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading number="03" title={t("projects.heading")} />

        <div className="space-y-20">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass-card p-8 hover-glow">
                {project.featured && (
                  <p className="font-mono text-xs text-primary mb-2">{t("projects.featuredLabel")}</p>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t(project.descriptionKey)}</p>
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
