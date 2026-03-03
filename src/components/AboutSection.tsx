import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { t, useLanguage } from "../i18n";

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
];

const AboutSection = () => {
  const { language } = useLanguage();
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading number="01" title={t("about.heading")} />

        <div className="grid md:grid-cols-3 gap-12">
          <ScrollReveal className="md:col-span-2 space-y-4" delay={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary text-xs">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative group">
              <div className="rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  {/* use the project's favicon as the avatar image */}
                  <img
                    src="/favicon.ico"
                    alt="logo"
                    className="w-100 h-100 object-contain"
                  />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
