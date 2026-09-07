import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesBento } from "@/components/services-bento";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-architectural-wood selection:text-black">
      <ScrollProgress />
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
