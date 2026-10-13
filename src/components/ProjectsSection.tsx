import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import BrowserMockup from "./BrowserMockup";
import { t, useLanguage } from "../i18n";

const easeOut = [0.22, 1, 0.36, 1] as const;
const springy = { type: "spring", stiffness: 280, damping: 22 } as const;

interface Project {
  title: string;
  descriptionKey: string;
  tech: string[];
  github?: string;
  live?: string;
  mockup: "dentment" | "easyturf" | "oxygym" | "onestop";
  mockupUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "DentMent",
    descriptionKey: "projects.descriptions.dentment",
    tech: ["React", "Node.js", "Video Courses", "Community"],
    live: "https://dent-ment.com",
    mockup: "dentment",
    mockupUrl: "dent-ment.com",
    featured: true,
  },
  {
    title: "EasyTurf",
    descriptionKey: "projects.descriptions.easyturf",
    tech: ["React", "Online Booking", "Tailwind"],
    github: "https://github.com/HassaanJaved-Git/EasyTurf",
    live: "https://easyturf.onrender.com",
    mockup: "easyturf",
    mockupUrl: "easyturf.onrender.com",
    featured: false,
  },
  {
    title: "Oxygym",
    descriptionKey: "projects.descriptions.oxygym",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Muhammad-Shehroz046/oxygym",
    mockup: "oxygym",
    mockupUrl: "oxygym.app",
    featured: false,
  },
  {
    title: "One Stop Frontend",
    descriptionKey: "projects.descriptions.oneStopFrontend",
    tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    github: "https://github.com/HassaanJaved-Git/one-stop-frontend",
    live: "https://one-stop-frontend.onrender.com/",
    mockup: "onestop",
    mockupUrl: "one-stop-frontend.onrender.com",
    featured: false,
  },
];

/** Featured project: editorial split with a large mockup that drifts on scroll and floats idly. */
const FeaturedProject = ({ project }: { project: Project }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // mockup drifts slower than the text — layered parallax
  const yMockup = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <motion.div
        style={reduceMotion ? undefined : { y: yText }}
        className="will-change-transform"
      >
        <p className="font-mono text-xs text-ember mb-4 tracking-[0.2em] uppercase">
          {t("projects.featuredLabel")}
        </p>
        <h3 className="font-display text-4xl md:text-5xl text-paper mb-5">
          {project.title}
        </h3>
        <p className="text-paper/70 text-lg mb-7 leading-relaxed max-w-md">
          {t(project.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-paper/80 border border-paper/20 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm bg-ember text-ink font-semibold px-6 py-3 rounded-full transition-shadow duration-300 hover:shadow-[0_16px_36px_-10px_rgba(232,93,42,0.6)]"
            >
              {t("projects.visitLive")}
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-paper/60 hover:text-ember transition-colors duration-200"
            >
              <Github size={22} />
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { y: yMockup }}
        className="will-change-transform"
      >
        <div className={reduceMotion ? "" : "animate-floaty"}>
          <BrowserMockup
            variant={project.mockup}
            url={project.mockupUrl}
            className="rotate-1"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // cards drift in from alternating sides as you scroll
  const xDrift = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? 0 : index % 2 === 0 ? -40 : 40, 0]
  );

  return (
    <div ref={ref}>
      <motion.div
        style={reduceMotion ? undefined : { x: xDrift }}
        whileHover={reduceMotion ? undefined : { y: -10 }}
        transition={reduceMotion ? undefined : springy}
        className="rounded-2xl bg-paper text-ink overflow-hidden h-full flex flex-col shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)] will-change-transform"
      >
        <div className="p-5 pb-0">
          <BrowserMockup
            variant={project.mockup}
            url={project.mockupUrl}
            className="shadow-[0_16px_32px_-16px_rgba(26,22,17,0.3)]"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-2xl mb-3">{project.title}</h3>
          <p className="text-ink/65 text-sm mb-5 leading-relaxed flex-1">
            {t(project.descriptionKey)}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-ember-deep bg-ember/10 px-2.5 py-1 rounded-full"
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
                className="text-ink/50 hover:text-ember-deep transition-colors duration-200"
              >
                <Github size={19} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ember-deep hover:underline underline-offset-4"
              >
                <ExternalLink size={14} />
                {t("projects.visitLive")}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  useLanguage();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 bg-ink text-paper texture-dots-light relative overflow-hidden">
      <div className="section-container relative">
        <SectionHeading number="02" title={t("projects.heading")} dark />

        <div className="space-y-6 mb-20">
          {featured.map((project) => (
            <ScrollReveal key={project.title}>
              <FeaturedProject project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 className="font-display text-2xl text-paper mb-8">
            {t("projects.otherHeading")}
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.08 * i} className="h-full">
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
