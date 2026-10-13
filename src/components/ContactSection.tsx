import ScrollReveal from "./ScrollReveal";
import { Mail, ArrowRight } from "lucide-react";
import { t, useLanguage } from "../i18n";

const ContactSection = () => {
  useLanguage();
  return (
    <section id="contact" className="py-32 md:py-40">
      <div className="section-container text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-sm text-primary mb-4">{t("contact.heading1")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t("contact.heading2")}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            {t("contact.paragraph")}
          </p>
          <a
            href="mailto:hassaanjaved@example.com?subject=Free%2020-minute%20call"
            className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-10 py-4 rounded transition-all duration-300 hover:shadow-[0_0_28px_-6px_hsl(165_80%_48%/0.7)] hover:-translate-y-0.5 mb-8"
          >
            {t("contact.sayHello")}
            <ArrowRight size={15} />
          </a>
          <p className="text-muted-foreground text-sm">
            {t("contact.emailMe")}{" "}
            <a
              href="mailto:hassaanjaved@example.com"
              className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1.5"
            >
              <Mail size={14} />
              hassaanjaved@example.com
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
