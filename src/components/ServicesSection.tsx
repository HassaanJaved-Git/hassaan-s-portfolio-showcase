import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { t, useLanguage } from "../i18n";
import en from "../locales/en.json";
import ur from "../locales/ur.json";

const packageMeta = [{ popular: false }, { popular: true }, { popular: false }];

const easeOut = [0.22, 1, 0.36, 1] as const;

const ServicesSection = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const dict = language === "ur" ? ur : en;
  const packages = dict.services.packages;

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading number="01" title={t("services.heading")} />
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-lg mb-14 max-w-2xl leading-relaxed">
            {t("services.sub")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.12} className="h-full">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className={`glass-card p-8 h-full flex flex-col relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_24px_60px_-18px_hsl(165_80%_48%/0.28)] ${
                  packageMeta[i].popular ? "border-primary/50" : ""
                }`}
              >
                {packageMeta[i].popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground font-mono text-[11px] font-semibold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                      <Sparkles size={12} />
                      {t("services.popularLabel")}
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                  {"per" in pkg && pkg.per && (
                    <span className="text-muted-foreground text-sm">{pkg.per}</span>
                  )}
                </div>
                <p className="font-mono text-xs text-primary mb-4">{pkg.timeline}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`inline-block text-center font-mono text-sm px-6 py-3 rounded transition-all duration-300 ${
                    packageMeta[i].popular
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_24px_-4px_hsl(165_80%_48%/0.6)]"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  {t("services.cta")}
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-muted-foreground text-sm mt-10 font-mono">
            {t("services.note")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
