import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, CalendarCheck, Star } from "lucide-react";
import { t, useLanguage } from "../i18n";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Splits a headline into words that rise into view one by one. */
const WordReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className="inline">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-1 -mb-1 align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={reduceMotion ? undefined : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.7,
              ease: easeOut,
              delay: delay + i * 0.055,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  useLanguage();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Layered parallax — each layer drifts at its own scroll speed (transform only)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yCtas = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yBlobA = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yBlobB = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, 190]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden texture-dots"
      id="hero"
    >
      {/* floating gradient blobs — parallax layer 1 (slowest) */}
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden
            style={{ y: yBlobA }}
            className="absolute -top-40 -right-40 w-[42rem] h-[42rem] rounded-full pointer-events-none will-change-transform"
          >
            <div
              className="w-full h-full rounded-full animate-floaty-slow"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,93,42,0.16) 0%, transparent 62%)",
              }}
            />
          </motion.div>
          <motion.div
            aria-hidden
            style={{ y: yBlobB }}
            className="absolute top-1/2 -left-52 w-[34rem] h-[34rem] rounded-full pointer-events-none will-change-transform"
          >
            <div
              className="w-full h-full rounded-full animate-floaty"
              style={{
                background:
                  "radial-gradient(circle, rgba(41,58,38,0.10) 0%, transparent 62%)",
              }}
            />
          </motion.div>
        </>
      )}

      <div className="section-container py-32 relative w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* ——— copy column ——— */}
          <div>
            <motion.div style={reduceMotion ? undefined : { y: yHeadline }} className="will-change-transform">
              <motion.p
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
                className="font-mono text-sm text-ember-deep mb-6 flex items-center gap-3"
              >
                <span className="inline-block w-8 h-px bg-ember" />
                {t("hero.intro")}
              </motion.p>

              <h1 className="font-display text-5xl md:text-7xl text-ink mb-4 leading-[1.05]">
                <WordReveal text={t("hero.heading1")} delay={0.35} />
              </h1>

              <h2 className="font-display text-3xl md:text-5xl leading-[1.12] mb-8 text-ink">
                <WordReveal text={t("hero.heading2")} delay={0.55} />
              </h2>
            </motion.div>

            <motion.div style={reduceMotion ? undefined : { y: ySub }} className="will-change-transform">
              <motion.p
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut, delay: 1.0 }}
                className="text-muted-foreground max-w-xl text-lg mb-10 leading-relaxed"
              >
                {t("hero.paragraph")}
              </motion.p>
            </motion.div>

            <motion.div style={reduceMotion ? undefined : { y: yCtas }} className="will-change-transform">
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut, delay: 1.15 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Magnetic>
                  <a
                    href="mailto:hassaanjaved@example.com?subject=Free%2020-minute%20call"
                    className="inline-flex items-center gap-2 font-mono text-sm bg-ember text-ink font-semibold px-8 py-3.5 rounded-full transition-shadow duration-300 hover:shadow-[0_16px_36px_-10px_rgba(232,93,42,0.55)]"
                  >
                    <CalendarCheck size={15} />
                    {t("hero.bookCall")}
                    <ArrowRight size={15} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/projects"
                    className="inline-flex items-center font-mono text-sm border-2 border-ink/15 text-ink px-8 py-3.5 rounded-full hover:border-ember hover:text-ember-deep transition-colors duration-300"
                  >
                    {t("hero.viewWork")}
                  </Link>
                </Magnetic>
                <div className="flex items-center gap-4 ml-2">
                  {[
                    { href: "https://github.com/HassaanJaved-Git", label: "GitHub", Icon: Github },
                    { href: "https://www.linkedin.com/in/m-hassaan-javed/", label: "LinkedIn", Icon: Linkedin },
                    { href: "mailto:hassaanjaved@example.com", label: "Email", Icon: Mail },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-muted-foreground hover:text-ember-deep hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ——— floating proof card column ——— */}
          <motion.div
            style={reduceMotion ? undefined : { y: yCard }}
            className="hidden lg:block will-change-transform"
          >
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 1.2 }}
            >
              <div className={reduceMotion ? "" : "animate-floaty-slow"}>
                <div className="card-warm p-6 max-w-sm ml-auto rotate-2">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-ember text-ember" />
                    ))}
                  </div>
                  <p className="font-display italic text-lg text-ink leading-snug mb-4">
                    “DentMent has transformed how I connect with mentors and grow
                    my practice.”
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Dr. Sarah Chen — Practice Owner
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-[11px] text-ember-deep font-semibold uppercase tracking-wider">
                      DentMent · Live
                    </span>
                    <a
                      href="https://dent-ment.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-muted-foreground hover:text-ember-deep transition-colors"
                    >
                      dent-ment.com →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
