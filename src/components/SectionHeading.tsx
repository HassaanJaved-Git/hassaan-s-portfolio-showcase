import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  /** render for dark (ink) sections */
  dark?: boolean;
}

const SectionHeading = ({ number, title, dark = false }: SectionHeadingProps) => (
  <ScrollReveal>
    <div className="flex items-center gap-5 mb-14">
      <span className="font-mono text-sm text-ember-deep font-semibold">
        {number}.
      </span>
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "flex-1 h-px max-w-xs",
          dark ? "bg-paper/20" : "bg-ink/15"
        )}
      />
    </div>
  </ScrollReveal>
);

export default SectionHeading;
