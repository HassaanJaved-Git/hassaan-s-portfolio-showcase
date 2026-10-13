import { Asterisk } from "lucide-react";
import { useLanguage } from "../i18n";
import en from "../locales/en.json";
import ur from "../locales/ur.json";

interface MarqueeProps {
  className?: string;
}

/** Seamless infinite ticker strip. CSS-driven (transform only); disabled under reduced motion via global CSS. */
const Marquee = ({ className = "" }: MarqueeProps) => {
  const { language } = useLanguage();
  const dict = language === "ur" ? ur : en;
  const items: string[] = dict.services.marquee ?? [];
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden bg-ink text-paper py-4 border-y border-ink ${className}`}
      aria-label="Services ticker"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {doubled.map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center gap-6 pr-6 whitespace-nowrap"
            >
              <span className="font-display text-lg md:text-xl italic">{item}</span>
              <Asterisk size={20} className="text-ember shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
