import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedGrid } from "@/components/motion/AnimatedGrid";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { AIStack } from "@/components/sections/AIStack";
import { Contact } from "@/components/sections/Contact";
import { EducationTrajectory } from "@/components/sections/EducationTrajectory";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <AnimatedGrid />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AIStack />
      <Experience />
      <EducationTrajectory />
      <Contact />
      <Footer />
    </main>
  );
}
