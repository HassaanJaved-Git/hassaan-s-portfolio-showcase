interface BrowserMockupProps {
  variant: "dentment" | "easyturf" | "oxygym" | "onestop";
  url: string;
  className?: string;
}

/**
 * A CSS-crafted browser mockup card with a miniature UI skeleton built
 * entirely from divs — no external images. Each variant sketches the
 * project's real interface in abstract.
 */
const BrowserMockup = ({ variant, url, className = "" }: BrowserMockupProps) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-ink/10 bg-cream shadow-[0_32px_64px_-24px_rgba(26,22,17,0.35)] ${className}`}
      aria-hidden
    >
      {/* browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-sand/70 border-b border-ink/10">
        <span className="w-2.5 h-2.5 rounded-full bg-ember/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
        <div className="ml-3 flex-1 max-w-[220px] rounded-full bg-paper border border-ink/10 px-3 py-1">
          <p className="font-mono text-[10px] text-ink/50 truncate">{url}</p>
        </div>
      </div>

      {/* miniature UI skeleton */}
      <div className="p-4 md:p-5 bg-cream">
        {variant === "dentment" && <DentMentSkeleton />}
        {variant === "easyturf" && <EasyTurfSkeleton />}
        {variant === "oxygym" && <OxygymSkeleton />}
        {variant === "onestop" && <OneStopSkeleton />}
      </div>
    </div>
  );
};

/* ——— miniature skeletons ——— */

const Bar = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full ${className}`} />
);

const DentMentSkeleton = () => (
  <div className="space-y-3">
    {/* hero strip */}
    <div className="rounded-xl bg-olive p-4">
      <Bar className="h-2.5 w-2/3 bg-paper/90" />
      <Bar className="h-2 w-1/2 bg-paper/50 mt-2" />
      <div className="mt-3 flex gap-2">
        <div className="rounded-full bg-ember px-3 py-1.5">
          <Bar className="h-1.5 w-12 bg-ink/70" />
        </div>
        <div className="rounded-full border border-paper/40 px-3 py-1.5">
          <Bar className="h-1.5 w-12 bg-paper/60" />
        </div>
      </div>
    </div>
    {/* course cards */}
    <div className="grid grid-cols-3 gap-2.5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-lg border border-ink/10 bg-paper p-2.5">
          <div
            className={`h-10 rounded-md mb-2 ${
              i === 0 ? "bg-ember/25" : i === 1 ? "bg-olive/20" : "bg-sand"
            }`}
          />
          <Bar className="h-1.5 w-4/5 bg-ink/30" />
          <Bar className="h-1.5 w-3/5 bg-ink/15 mt-1.5" />
        </div>
      ))}
    </div>
    {/* mentors row */}
    <div className="flex items-center gap-2 rounded-lg bg-paper border border-ink/10 p-2.5">
      <div className="flex -space-x-1.5">
        {["bg-ember/60", "bg-olive/50", "bg-ink/30", "bg-sand"].map((c, i) => (
          <div key={i} className={`w-6 h-6 rounded-full border-2 border-paper ${c}`} />
        ))}
      </div>
      <Bar className="h-1.5 w-24 bg-ink/25" />
    </div>
  </div>
);

const EasyTurfSkeleton = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <Bar className="h-2.5 w-24 bg-ink/40" />
      <div className="rounded-full bg-ember px-3 py-1.5">
        <Bar className="h-1.5 w-14 bg-ink/70" />
      </div>
    </div>
    {/* calendar grid */}
    <div className="grid grid-cols-7 gap-1.5">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className={`aspect-square rounded-md ${
            i === 9 || i === 16
              ? "bg-ember"
              : i === 12
                ? "bg-olive"
                : "bg-ink/[0.07]"
          }`}
        />
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {["9:00 AM", "2:30 PM", "6:00 PM"].map((slot, i) => (
        <div
          key={slot}
          className={`rounded-lg border px-2 py-1.5 text-center ${
            i === 1 ? "border-ember bg-ember/10" : "border-ink/10 bg-paper"
          }`}
        >
          <p className="font-mono text-[9px] text-ink/60">{slot}</p>
        </div>
      ))}
    </div>
  </div>
);

const OxygymSkeleton = () => (
  <div className="space-y-2.5">
    {[
      { name: "Morning HIIT", pct: "w-4/5", tone: "bg-ember" },
      { name: "Yoga Flow", pct: "w-3/5", tone: "bg-olive" },
      { name: "Spin Class", pct: "w-11/12", tone: "bg-ink/60" },
      { name: "Pilates", pct: "w-2/5", tone: "bg-ember/60" },
    ].map((row) => (
      <div key={row.name} className="rounded-lg border border-ink/10 bg-paper p-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-semibold text-ink/70">{row.name}</p>
          <p className="font-mono text-[9px] text-ink/40">Booked</p>
        </div>
        <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
          <div className={`h-full rounded-full ${row.pct} ${row.tone}`} />
        </div>
      </div>
    ))}
    <div className="rounded-xl bg-olive p-3 flex items-center justify-between">
      <Bar className="h-2 w-20 bg-paper/70" />
      <Bar className="h-2 w-10 bg-ember" />
    </div>
  </div>
);

const OneStopSkeleton = () => (
  <div className="space-y-3">
    <div className="flex gap-2">
      <Bar className="h-2.5 w-20 bg-ink/40" />
      <Bar className="h-2.5 w-14 bg-ink/20" />
      <Bar className="h-2.5 w-16 bg-ink/20" />
    </div>
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={`rounded-lg border border-ink/10 p-2 ${
            i % 3 === 0 ? "bg-ember/15" : i % 3 === 1 ? "bg-olive/10" : "bg-paper"
          }`}
        >
          <div className="h-6 rounded bg-ink/10 mb-1.5" />
          <Bar className="h-1.5 w-4/5 bg-ink/25" />
        </div>
      ))}
    </div>
    <div className="flex gap-2">
      <div className="h-8 flex-1 rounded-lg bg-ink" />
      <div className="h-8 flex-1 rounded-lg bg-ember" />
      <div className="h-8 flex-1 rounded-lg border border-ink/15 bg-paper" />
    </div>
  </div>
);

export default BrowserMockup;
