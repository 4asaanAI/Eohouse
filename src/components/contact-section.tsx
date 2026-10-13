"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/tracks-section";
import {
  InstagramIcon,
  DiscordIcon,
  LinkedinIcon,
  YoutubeIcon,
  SpotifyIcon,
  AppleMusicIcon,
} from "@/components/social-icons";

const CONTACT_EMAIL = "shubhsmsharma015@gmail.com";

const SOCIALS = [
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/eohofficial/" },
  { label: "Discord", icon: DiscordIcon, href: "https://discord.com/invite/Cdmzst5CcY" },
  { label: "YouTube", icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCB1_CmHFVGTeo6PIh9Xderw" },
  { label: "Spotify", icon: SpotifyIcon, href: "https://open.spotify.com/artist/6IuimoWY5soB0Qrj4mt90J" },
  { label: "Apple Music", icon: AppleMusicIcon, href: "https://open.spotify.com/artist/6IuimoWY5soB0Qrj4mt90J" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/in/shubham-sharma-75b0b41a1" },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Fill in every field before sending.");
      return;
    }
    const subject = encodeURIComponent(`New project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app — send it off!");
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's make something"
          copy="Got a track, a brief, or just an idea? Send it over."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the project..."
                rows={5}
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full gap-2 rounded-full sm:w-auto">
              <Send className="size-4" />
              Send message
            </Button>
          </form>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Find EOH online
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-rose-500/30 hover:bg-white/[0.05]"
                >
                  <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-rose-400" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-rose-500/10 to-fuchsia-500/10 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                For production and mixing enquiries, email directly at
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 inline-block text-sm font-semibold text-rose-400 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
