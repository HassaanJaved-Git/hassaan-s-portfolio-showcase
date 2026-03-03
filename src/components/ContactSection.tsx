import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";
import { t, useLanguage } from "../i18n";

const ContactSection = () => {
  const { language } = useLanguage();
  return (
    <section id="contact" className="py-32">
      <div className="section-container text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-sm text-primary mb-4">{t("contact.heading1")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("contact.heading2")}</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            {t("contact.paragraph")}
          </p>
          <a
            href="mailto:hassaanjaved@example.com"
            className="inline-block font-mono text-sm border border-primary text-primary px-10 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
          >
            {t("contact.sayHello")}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
