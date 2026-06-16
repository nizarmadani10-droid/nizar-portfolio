import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <Badge className="mb-5 uppercase leading-5 tracking-[0.16em] text-[#7DF9FF] sm:mb-6 sm:tracking-[0.25em]">
              Available for AI engineering, research & international opportunities
            </Badge>

            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {siteConfig.name}
            </h1>

            <p className="mt-4 font-display text-lg text-gradient sm:mt-5 sm:text-2xl md:text-4xl">
              {siteConfig.role}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#AEB7C8] sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              {siteConfig.description}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6F7A90] sm:text-base">
              Specialized in machine learning, computer vision, NLP, RAG systems,
              generative AI, and data analytics.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <MagneticButton className="w-full sm:w-auto">
                <Button href="#projects" variant="primary" className="w-full sm:w-auto">
                  Explore Projects
                </Button>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <Button href={siteConfig.cvPath} className="w-full sm:w-auto">
                  Download CV
                </Button>
              </MagneticButton>

              <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
