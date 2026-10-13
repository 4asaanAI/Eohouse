import Image from "next/image";
import {
  InstagramIcon,
  DiscordIcon,
  YoutubeIcon,
  SpotifyIcon,
} from "@/components/social-icons";

const SOCIALS = [
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/eohofficial/" },
  { label: "Discord", icon: DiscordIcon, href: "https://discord.com/invite/Cdmzst5CcY" },
  { label: "YouTube", icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCB1_CmHFVGTeo6PIh9Xderw" },
  { label: "Spotify", icon: SpotifyIcon, href: "https://open.spotify.com/artist/6IuimoWY5soB0Qrj4mt90J" },
];

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image src="/eoh.png" alt="EOH" width={38} height={38} className="rounded-full" />
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-foreground">
                EDGE OF HEAVEN
              </p>
              <p className="text-xs text-muted-foreground">Music production studio</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-rose-500/30 hover:text-rose-400"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Edge Of Heaven. All rights reserved.</p>
          <p>Produced, mixed & mastered by EOH.</p>
        </div>
      </div>
    </footer>
  );
}
