"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/providers/I18nProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CascadeText } from "@/components/ui/CascadeText";
import { NameLamp } from "@/components/ui/NameLamp";
import { SplineScene } from "@/components/ui/SplineScene";
import { siteConfig } from "@/lib/constants";
import { homeHref } from "@/lib/i18n";

const HERO_SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function Hero() {
  const { locale, dictionary } = useI18n();
  const hero = dictionary.hero;
  const displayName = locale === "ar" ? "نزار مدني" : siteConfig.name;

  return (
    <section className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-20 lg:py-24">
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.86fr)] xl:gap-14">
          <Reveal>
            <div className="max-w-4xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
              <div
                className={
                  locale === "ar" ? "mb-8 flex sm:mb-10" : "mb-5 flex sm:mb-6"
                }
              >
                <Badge className="items-center gap-2 uppercase leading-5 tracking-[0.16em] text-[#7DF9FF] sm:tracking-[0.25em]">
                  <span
                    className="relative inline-flex h-2.5 w-2.5 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E] shadow-[0_0_14px_rgba(34,197,94,0.65)]" />
                  </span>
                  <span>{hero.badge}</span>
                </Badge>
              </div>

              <NameLamp>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {locale === "ar" ? (
                    <span className="inline-block leading-[1.05]" dir="rtl">
                      {displayName}
                    </span>
                  ) : (
                    <CascadeText text={displayName} hoverColor="#7DF9FF" />
                  )}
                </h1>
              </NameLamp>

              <p className="mt-4 font-display text-lg text-gradient sm:mt-5 sm:text-2xl md:text-4xl">
                {hero.role}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#AEB7C8] sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
                {hero.description}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6F7A90] sm:text-base">
                {hero.specialization}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <MagneticButton className="w-full sm:w-auto">
                  <Button
                    href={homeHref(locale, "projects")}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    {hero.exploreProjects}
                  </Button>
                </MagneticButton>

                <MagneticButton className="w-full sm:w-auto">
                  <Button
                    href={siteConfig.cvPaths[locale]}
                    className="w-full sm:w-auto"
                  >
                    {hero.downloadCv}
                  </Button>
                </MagneticButton>

                <Button
                  href={homeHref(locale, "contact")}
                  variant="ghost"
                  className="w-full sm:w-auto"
                >
                  {hero.contactMe}
                </Button>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.16} className="hidden lg:block">
            <div className="relative -mt-10 h-[500px] overflow-visible xl:-mt-16 xl:h-[680px]">
              <div className="pointer-events-none absolute left-1/2 top-[44%] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F80FF]/18 blur-3xl xl:h-[34rem] xl:w-[34rem]" />
              <div className="pointer-events-none absolute bottom-8 right-4 h-80 w-80 rounded-full bg-[#7DF9FF]/14 blur-3xl xl:h-[28rem] xl:w-[28rem]" />
              <div className="pointer-events-none absolute inset-x-4 bottom-0 h-28 bg-gradient-to-t from-[#03050C]/80 to-transparent xl:h-36" />
              <SplineScene
                scene={HERO_SPLINE_SCENE}
                globalPointerTracking
                className="relative z-10 h-full origin-center -translate-y-10 scale-[1.28] drop-shadow-[0_32px_80px_rgba(125,249,255,0.2)] xl:-translate-y-16 xl:scale-[1.34]"
              />
              <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_22%,transparent_0%,rgba(3,5,12,0.08)_62%,rgba(3,5,12,0.44)_100%)]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
