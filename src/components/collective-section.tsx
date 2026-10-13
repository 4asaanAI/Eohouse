import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SectionHeading } from "@/components/tracks-section";

const PEOPLE = [
  { id: 1, name: "Raging", designation: "Rapper", image: "/raging.jpg" },
  { id: 2, name: "AJMAXX", designation: "Music Producer", image: "/aj.jpg" },
  { id: 3, name: "Nishchint", designation: "Vocalist", image: "/nishu.jpg" },
  { id: 4, name: "Electrap", designation: "Label", image: "/et.jpg" },
  { id: 5, name: "Melody Capture", designation: "Label", image: "/mc.jpg" },
];

export function CollectiveSection() {
  return (
    <section id="collective" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <SectionHeading
          eyebrow="Who I work with"
          title="The collective"
          copy="Artists, vocalists and labels EOH has produced, mixed or collaborated with."
        />

        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-10">
          <AnimatedTooltip items={PEOPLE} />
        </div>
      </div>
    </section>
  );
}
