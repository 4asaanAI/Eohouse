import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/tracks-section";

const SERVICES = [
  {
    title: "Music Production",
    image: "/produce.webp",
    points: [
      "Composition in any genre of choice",
      "Vocalist & session musician sourcing",
      "Sound design and arrangement",
      "Full project file handed over",
    ],
    accent: "from-rose-500/25",
  },
  {
    title: "Mixing & Mastering",
    image: "/mix.jpeg",
    points: [
      "Vocal and instrument mixing",
      "Loudness-matched mastering for streaming",
      "Reference-track matched tonal balance",
      "Unlimited revision rounds",
    ],
    accent: "from-fuchsia-500/25",
  },
  {
    title: "Production Mentorship",
    image: "/course.jpeg",
    points: [
      "Fundamentals through advanced workflow",
      "DAW, VSTs, beat making & effects",
      "1:1 feedback on your own sessions",
      "Build a release-ready portfolio",
    ],
    accent: "from-orange-500/25",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="What I do"
          title="Services"
          copy="From a blank session to a mastered, release-ready record."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-500/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.accent} via-black/40 to-black/70`}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-rose-400" />
                </div>

                <ul className="mt-4 flex-1 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-rose-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 text-sm font-medium text-rose-400">
                  Enquire about this →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
