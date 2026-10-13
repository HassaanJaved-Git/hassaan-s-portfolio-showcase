import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { t, useLanguage } from "../i18n";
import { Link } from "react-router-dom";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const HeroSection = () => {
  useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="hero">
      {/* soft animated gradient accent */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(165 80% 48% / 0.12) 0%, transparent 65%)",
          }}
          animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="section-container py-32 relative">
        <motion.div
          variants={container}
          initial={reduceMotion ? undefined : "hidden"}
          animate="show"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-primary mb-5"
          >
            {t("hero.intro")}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold text-foreground mb-3 leading-tight"
          >
            {t("hero.heading1")}
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="text-gradient">{t("hero.heading2")}</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-muted-foreground max-w-xl text-lg mb-12 leading-relaxed"
          >
            {t("hero.paragraph")}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hassaanjaved@example.com?subject=Free%2020-minute%20call"
              className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-8 py-3.5 rounded transition-all duration-300 hover:shadow-[0_0_28px_-6px_hsl(165_80%_48%/0.7)] hover:-translate-y-0.5"
            >
              {t("hero.bookCall")}
              <ArrowRight size={15} />
            </a>
            <Link
              to="/projects"
              className="font-mono text-sm border border-primary text-primary px-8 py-3.5 rounded hover:bg-primary/10 transition-colors duration-300"
            >
              {t("hero.viewWork")}
            </Link>
            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://github.com/HassaanJaved-Git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/m-hassaan-javed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hassaanjaved@example.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
