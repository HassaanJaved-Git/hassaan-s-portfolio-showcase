import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { t, useLanguage } from "../i18n";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface Project {
  title: string;
  descriptionKey: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "DentMent",
    descriptionKey: "projects.descriptions.dentment",
    tech: ["React", "Node.js", "Video Courses", "Community"],
    live: "https://dent-ment.com",
    featured: true,
  },
  {
    title: "EasyTurf",
    descriptionKey: "projects.descriptions.easyturf",
    tech: ["React", "Online Booking", "Tailwind"],
    github: "https://github.com/HassaanJaved-Git/EasyTurf",
    live: "https://easyturf.onrender.com",
    featured: false,
  },
  {
    title: "Oxygym",
    descriptionKey: "projects.descriptions.oxygym",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Muhammad-Shehroz046/oxygym",
    featured: false,
  },
  {
    title: "One Stop Frontend",
    descriptionKey: "projects.descriptions.oneStopFrontend",
    tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/one-stop-frontend",
    live: "https://one-stop-frontend.onrender.com/",
    featured: false,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.35, ease: easeOut }}
      className={`glass-card p-8 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_24px_60px_-18px_hsl(165_80%_48%/0.28)] ${
        project.featured ? "border-primary/50" : ""
      }`}
    >
      {project.featured && (
        <p className="font-mono text-xs text-primary mb-3 tracking-wider uppercase">
          {t("projects.featuredLabel")}
        </p>
      )}
      <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
        {t(project.descriptionKey)}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={20} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline underline-offset-4 transition-colors duration-200"
          >
            <ExternalLink size={16} />
            {t("projects.visitLive")}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  useLanguage();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading number="02" title={t("projects.heading")} />

        <div className="space-y-6">
          {featured.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <h3 className="text-lg font-semibold text-foreground mt-16 mb-8">
            {t("projects.otherHeading")}
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i} className="h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
