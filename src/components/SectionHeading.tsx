import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => (
  <ScrollReveal>
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border max-w-xs" />
    </div>
  </ScrollReveal>
);

export default SectionHeading;
