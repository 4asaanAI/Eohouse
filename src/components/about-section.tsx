import Image from "next/image";
import { Music2, SlidersHorizontal, Waves, Wand2 } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const SKILLS = [
  {
    icon: Music2,
    title: "Composition",
    copy: "Writing original songs and scores from a bare idea to a finished arrangement.",
  },
  {
    icon: SlidersHorizontal,
    title: "Mixing",
    copy: "Balancing every stem so the record translates on earbuds, cars and club systems alike.",
  },
  {
    icon: Waves,
    title: "Mastering",
    copy: "Final polish and loudness tuned for streaming — competitive, clean, consistent.",
  },
  {
    icon: Wand2,
    title: "Sound Design",
    copy: "Building signature textures and transitions that make a track instantly recognisable.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <BackgroundGradient containerClassName="rounded-[1.75rem]" className="rounded-[1.6rem] bg-card p-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/me.png"
                  alt="EOH in the studio"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </BackgroundGradient>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              About the studio
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              One producer.
              <br />
              <span className="text-brand-gradient">Every stage of the record.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Edge Of Heaven started as a bedroom production channel and grew
              into a full-service studio. Every release — mine or a
              collaborator&apos;s — passes through the same process:
              composition, recording, mixing and mastering, handled end to
              end by one person who treats the track like it&apos;s their own.
            </p>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Whether you&apos;re a label artist with a deadline or a bedroom
              musician with a voice memo, the goal is the same: turn what you
              hear in your head into something that holds up on a real
              sound system.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SKILLS.map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-rose-500/30 hover:bg-white/[0.04]"
                >
                  <Icon className="size-5 text-rose-400" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
