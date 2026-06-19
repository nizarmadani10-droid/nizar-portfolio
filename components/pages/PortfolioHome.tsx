import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedGrid } from "@/components/motion/AnimatedGrid";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { AIStack } from "@/components/sections/AIStack";
import { Contact } from "@/components/sections/Contact";
import { EducationTrajectory } from "@/components/sections/EducationTrajectory";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { HeroCinematicBackground } from "@/components/ui/HeroCinematicBackground";
import { getDirection, type Locale } from "@/lib/i18n";

export function PortfolioHome({ locale }: { locale: Locale }) {
  return (
    <I18nProvider locale={locale}>
      <main
        lang={locale}
        dir={getDirection(locale)}
        className="relative min-h-screen overflow-hidden"
      >
        <ScrollProgress />
        <AnimatedGrid />
        <Navbar />
        <div className="relative overflow-hidden">
          <HeroCinematicBackground />
          <div className="relative z-10">
            <Hero />
            <EngineeringPhilosophy />
          </div>
        </div>
        <FeaturedProjects />
        <AIStack />
        <Experience />
        <EducationTrajectory />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  );
}
