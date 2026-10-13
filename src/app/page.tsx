import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TracksSection } from "@/components/tracks-section";
import { ServicesSection } from "@/components/services-section";
import { CollectiveSection } from "@/components/collective-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <ServicesSection />
        <CollectiveSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
