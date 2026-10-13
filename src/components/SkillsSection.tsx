import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";
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

const springy = { type: "spring", stiffness: 260, damping: 21 } as const;

const SkillsSection = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  return (
    <section id="skills" className="py-24 md:py-32 bg-sand/60">
      <div className="section-container">
        <SectionHeading number="04" title={t("skills.heading")} />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={reduceMotion ? undefined : springy}
                className="card-warm p-7 h-full will-change-transform"
              >
                <h3 className="font-display italic text-xl text-ink mb-5">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-ink/65 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
