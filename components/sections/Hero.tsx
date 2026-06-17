import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SplineScene } from "@/components/ui/SplineScene";
import { siteConfig } from "@/lib/constants";

const HERO_SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.86fr)] xl:gap-14">
          <Reveal>
            <div className="max-w-4xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
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

          <Reveal delay={0.16} className="hidden lg:block">
            <Card
              interactive
              className="blue-glow relative h-[360px] overflow-hidden !rounded-[2rem] border-[#7DF9FF]/15 !p-0 xl:h-[520px]"
            >
              <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#2F80FF]/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#7DF9FF]/12 blur-3xl" />
              <SplineScene scene={HERO_SPLINE_SCENE} className="relative z-10 h-full" />
              <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_22%,transparent_0%,rgba(3,5,12,0.12)_58%,rgba(3,5,12,0.72)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#03050C]/80 to-transparent" />
              <div className="pointer-events-none absolute inset-4 z-30 rounded-[1.55rem] border border-[#7DF9FF]/10" />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
