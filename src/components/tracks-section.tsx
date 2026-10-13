"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Track = {
  id: string;
  title: string;
  artist: string;
  tag: string;
  span: string;
};

const TRACKS: Track[] = [
  {
    id: "sMpBrxrlz6g",
    title: "Sixth Sense",
    artist: "Edge Of Heaven",
    tag: "Original",
    span: "lg:col-span-4",
  },
  {
    id: "JkjShwTVEh0",
    title: "Teri Yaadon Me",
    artist: "Edge Of Heaven",
    tag: "Remake",
    span: "lg:col-span-2",
  },
  {
    id: "0rQjDJ6h1Nc",
    title: "Change",
    artist: "Edge Of Heaven",
    tag: "Original",
    span: "lg:col-span-2",
  },
  {
    id: "ebNgHu3i_C0",
    title: "Hard Beat",
    artist: "Edge Of Heaven",
    tag: "AI Remake",
    span: "lg:col-span-2",
  },
  {
    id: "w477PaHx_fQ",
    title: "Delhi NCR",
    artist: "Electrap",
    tag: "Feature",
    span: "lg:col-span-2",
  },
];

export function TracksSection() {
  const [active, setActive] = useState<Track | null>(null);

  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Latest drops"
          copy="A handful of recent releases and collaborations — press play to listen."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {TRACKS.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              featured={i === 0}
              onPlay={() => setActive(track)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-white/10 bg-black p-0 sm:max-w-3xl" showCloseButton={false}>
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Playing {active?.title} by {active?.artist}
          </DialogDescription>
          {active && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                key={active.id}
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&color=white`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-black/90"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function TrackCard({
  track,
  featured,
  onPlay,
}: {
  track: Track;
  featured?: boolean;
  onPlay: () => void;
}) {
  return (
    <button
      onClick={onPlay}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-card text-left outline-none ring-rose-500/40 transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2",
        featured ? "aspect-[16/10]" : "aspect-[4/3]",
        track.span
      )}
    >
      <Image
        src={`https://i.ytimg.com/vi/${track.id}/hqdefault.jpg`}
        alt={track.title}
        fill
        unoptimized
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10 transition-opacity duration-300 group-hover:from-black/90" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <Badge className="absolute left-4 top-4 border-0 bg-white/10 text-[11px] font-medium text-white backdrop-blur">
        {track.tag}
      </Badge>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 scale-90 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <Play className="ml-0.5 size-6 fill-current" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <h3
            className={cn(
              "font-bold text-white",
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            )}
          >
            {track.title}
          </h3>
          <p className="text-sm text-white/60">{track.artist}</p>
        </div>
        <Waveform />
      </div>
    </button>
  );
}

function Waveform() {
  const bars = [6, 14, 9, 18, 11, 5, 15];
  return (
    <div className="flex items-end gap-0.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-0.5 rounded-full bg-rose-400/80"
          style={{
            height: h,
            animation: `pulse-bar 1.1s ease-in-out ${i * 0.08}s infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pulse-bar {
          from {
            opacity: 0.35;
            transform: scaleY(0.5);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {copy}
        </p>
      )}
    </div>
  );
}
