"use client";

import Image from "next/image";
import { ArrowDown, Disc3, Headphones, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ROLES = ["Production", "Mixing", "Mastering", "Sound Design"];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-grid pt-28 pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.3 0.12 15 / 0.35), transparent 70%)",
        }}
      />
      <BackgroundBeams className="opacity-70" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 order-2 lg:order-1">
          <Badge
            variant="outline"
            className="gap-1.5 rounded-full border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="size-3.5 text-rose-400" />
            Independent Music Production Studio
          </Badge>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            <span className="text-brand-gradient">EDGE</span>
            <br />
            <span className="text-foreground">OF HEAVEN</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span>Crafting</span>
            <FlipWords
              words={ROLES}
              className="!text-rose-400 !px-0 text-xl sm:text-2xl font-bold"
            />
            <span>that moves people.</span>
          </div>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            EOH is a one-producer studio turning raw ideas into fully realised
            records — original songs, remakes, scores and sound design,
            engineered from first sketch to final master.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              render={<a href="#work" />}
              size="lg"
              className="h-12 gap-2 rounded-full px-7 text-base shadow-[0_0_40px_-8px_var(--brand-glow)]"
            >
              <Headphones className="size-4" />
              Listen to the work
            </Button>
            <Button
              render={<a href="#contact" />}
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-base backdrop-blur hover:bg-white/10"
            >
              Start a project
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <Stat value="25K+" label="Monthly listeners" />
            <Divider />
            <Stat value="50+" label="Tracks produced" />
            <Divider />
            <Stat value="5+" label="Genres explored" />
          </div>
        </div>

        <div className="relative order-1 z-10 mx-auto lg:order-2">
          <div
            className="absolute -inset-10 -z-10 rounded-full blur-3xl"
            style={{
              background:
                "conic-gradient(from 180deg, oklch(0.6 0.22 15 / 0.45), oklch(0.5 0.2 320 / 0.35), transparent 70%)",
            }}
          />
          <div className="relative aspect-[4/5] w-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-card glow-ring sm:w-[320px] md:w-[380px]">
            <Image
              src="/me.png"
              alt="EOH — producer portrait"
              fill
              priority
              sizes="(min-width: 768px) 380px, 260px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-6 bottom-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-popover/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10">
            <Disc3 className="size-5 animate-[spin_4s_linear_infinite] text-rose-400" />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-foreground">Now mastering</p>
              <p className="text-[11px] text-muted-foreground">Original Session #07</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        Scroll
        <ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-8 w-px bg-white/10" />;
}
