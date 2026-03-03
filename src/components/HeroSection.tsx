import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { t, useLanguage } from "../i18n";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { language } = useLanguage();
  return (
    <section className="min-h-screen flex items-center relative" id="hero">
      <div className="section-container py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-mono text-sm text-primary mb-5"
        >
          {t("hero.intro")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-3 leading-tight"
        >
          {t("hero.heading1")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-muted-foreground mb-8 leading-tight"
        >
          {t("hero.heading2")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="text-muted-foreground max-w-lg text-lg mb-12 leading-relaxed"
        >
          {t("hero.paragraph")}        
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-5"
        >
          <Link
            to="/projects"
            className="font-mono text-sm border border-primary text-primary px-8 py-3 rounded hover:bg-primary/10 transition-colors duration-200"
          >
            {t("hero.viewWork")}
          </Link>
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com/HassaanJaved-Git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/m-hassaan-javed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hassaanjaved@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
