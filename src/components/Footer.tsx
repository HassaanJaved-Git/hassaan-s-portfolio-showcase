import { Github, Linkedin } from "lucide-react";
import { t, useLanguage } from "../i18n";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="py-10 bg-ink text-paper border-t border-paper/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="font-display italic text-xl">
            Hassaan Javed
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/HassaanJaved-Git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-paper/50 hover:text-ember transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/m-hassaan-javed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-paper/50 hover:text-ember transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <p className="font-mono text-xs text-paper/45">
            {t("footer.designedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
