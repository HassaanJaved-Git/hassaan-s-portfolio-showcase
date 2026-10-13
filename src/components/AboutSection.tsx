import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import StatCounter from "./StatCounter";
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

const stats = [
  { value: 14, suffix: "", label: "days — fastest launch" },
  { value: 3, suffix: "", label: "fixed-price packages" },
  { value: 2500, suffix: "+", label: "dental pros on DentMent" },
];

const AboutSection = () => {
  const { language } = useLanguage();
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading number="03" title={t("about.heading")} />

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <ScrollReveal className="md:col-span-2 space-y-5" delay={0.1}>
            <p className="text-lg text-ink/75 leading-relaxed font-display">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
            <ul className="grid grid-cols-2 gap-2.5 font-mono text-sm pt-2">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2.5 text-ink/65">
                  <span className="text-ember-deep text-xs font-bold">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative group max-w-xs">
              <div className="rounded-2xl overflow-hidden border border-ink/10 bg-sand aspect-square flex items-center justify-center transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.02]">
                <img
                  src="/favicon.ico"
                  alt="Hassaan Javed logo"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-ember/80 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </ScrollReveal>
        </div>

        {/* animated stats band */}
        <ScrollReveal delay={0.1}>
          <div className="card-ink px-8 py-10 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl md:text-6xl text-ember mb-2">
                  <StatCounter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-mono text-xs text-paper/60 uppercase tracking-[0.18em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
