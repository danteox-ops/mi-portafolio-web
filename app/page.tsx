import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesBento } from "@/components/services-bento";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-architectural-wood selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesBento />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
