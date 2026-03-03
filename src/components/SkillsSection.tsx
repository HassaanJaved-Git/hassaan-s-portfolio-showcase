import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../i18n";
import { t } from "../i18n";
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Postman", "npm / yarn", "Vercel / Netlify"],
  },
];

const SkillsSection = () => {
  const { language } = useLanguage();
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionHeading number="02" title={t("skills.heading")} />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <div className="glass-card p-6 hover-glow h-full">
                <h3 className="font-mono text-sm text-primary mb-5 tracking-wider uppercase">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
