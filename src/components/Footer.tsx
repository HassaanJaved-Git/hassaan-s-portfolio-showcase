import { Github, Linkedin } from "lucide-react";
import { t, useLanguage } from "../i18n";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/HassaanJaved-Git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/m-hassaan-javed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            {t("footer.designedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
