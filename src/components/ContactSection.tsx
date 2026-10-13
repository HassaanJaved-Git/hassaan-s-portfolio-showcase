import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";
import { Mail, ArrowRight } from "lucide-react";
import { t, useLanguage } from "../i18n";

const ContactSection = () => {
  useLanguage();
  return (
    <section id="contact" className="py-28 md:py-40 bg-olive text-paper texture-dots-light relative overflow-hidden">
      <div className="section-container text-center max-w-2xl mx-auto relative">
        <ScrollReveal>
          <p className="font-mono text-sm text-ember mb-5 tracking-[0.2em] uppercase">
            {t("contact.heading1")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-paper mb-6 leading-[1.08]">
            {t("contact.heading2")}
          </h2>
          <p className="text-paper/70 text-lg mb-12 leading-relaxed">
            {t("contact.paragraph")}
          </p>
          <Magnetic>
            <a
              href="mailto:hassaanjaved@example.com?subject=Free%2020-minute%20call"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold bg-ember text-ink px-10 py-4 rounded-full transition-shadow duration-300 hover:shadow-[0_20px_44px_-12px_rgba(232,93,42,0.65)] mb-10"
            >
              {t("contact.sayHello")}
              <ArrowRight size={15} />
            </a>
          </Magnetic>
          <p className="text-paper/60 text-sm">
            {t("contact.emailMe")}{" "}
            <a
              href="mailto:hassaanjaved@example.com"
              className="text-ember hover:underline underline-offset-4 inline-flex items-center gap-1.5 font-medium"
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
