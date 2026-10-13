import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";
import { t, useLanguage } from "../i18n";
import en from "../locales/en.json";
import ur from "../locales/ur.json";
import { cn } from "@/lib/utils";

const packageMeta = [{ popular: false }, { popular: true }, { popular: false }];

const springy = { type: "spring", stiffness: 260, damping: 21 } as const;

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
          <p className="font-display italic text-xl md:text-2xl text-ink/70 mb-14 max-w-2xl leading-relaxed">
            {t("services.sub")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => {
            const popular = packageMeta[i].popular;
            return (
              <ScrollReveal key={pkg.name} delay={i * 0.12} className="h-full">
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -10, scale: 1.015 }}
                  transition={reduceMotion ? undefined : springy}
                  className={cn(
                    "p-8 h-full flex flex-col relative overflow-hidden rounded-2xl border will-change-transform",
                    popular
                      ? "card-ink border-ink"
                      : "card-warm"
                  )}
                >
                  {popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-ember text-ink font-mono text-[11px] font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-1.5 uppercase tracking-wider">
                        <Sparkles size={12} />
                        {t("services.popularLabel")}
                      </div>
                    </div>
                  )}

                  <h3
                    className={cn(
                      "font-display text-2xl mb-3",
                      popular ? "text-paper" : "text-ink"
                    )}
                  >
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className={cn(
                        "font-display text-5xl",
                        popular ? "text-ember" : "text-ink"
                      )}
                    >
                      {pkg.price}
                    </span>
                    {"per" in pkg && pkg.per && (
                      <span
                        className={cn(
                          "text-sm",
                          popular ? "text-paper/60" : "text-muted-foreground"
                        )}
                      >
                        {pkg.per}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-ember-deep font-semibold mb-4 uppercase tracking-wider">
                    {pkg.timeline}
                  </p>
                  <p
                    className={cn(
                      "text-sm mb-6 leading-relaxed",
                      popular ? "text-paper/70" : "text-muted-foreground"
                    )}
                  >
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-start gap-3 text-sm",
                          popular ? "text-paper/75" : "text-ink/70"
                        )}
                      >
                        <span
                          className={cn(
                            "rounded-full p-0.5 mt-0.5 shrink-0",
                            popular ? "bg-ember/20" : "bg-ember/15"
                          )}
                        >
                          <Check size={13} className="text-ember-deep" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Magnetic strength={0.22} className="w-full">
                    <a
                      href="mailto:hassaanjaved@example.com?subject=Project%20enquiry"
                      className={cn(
                        "block text-center font-mono text-sm font-semibold px-6 py-3.5 rounded-full transition-shadow duration-300",
                        popular
                          ? "bg-ember text-ink hover:shadow-[0_16px_36px_-10px_rgba(232,93,42,0.6)]"
                          : "border-2 border-ink/15 text-ink hover:border-ember hover:text-ember-deep"
                      )}
                    >
                      {t("services.cta")}
                    </a>
                  </Magnetic>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-muted-foreground text-sm mt-12 font-mono">
            {t("services.note")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
