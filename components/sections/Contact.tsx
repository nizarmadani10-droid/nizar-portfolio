import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactScrollContainer } from "@/components/ui/ContactScrollContainer";
import { ContactInput, ContactTextarea } from "@/components/ui/ContactInput";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { siteConfig } from "@/lib/constants";

export function Contact() {
  return (
    <Section id="contact" className="pb-16 sm:pb-20 lg:pb-24">
      <Reveal>
        <ContactScrollContainer>
          <p className="font-code text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-[#7DF9FF] sm:text-xs sm:tracking-[0.3em]">
            Contact
          </p>

          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:mt-4 sm:text-4xl md:text-5xl">
            Let’s build what’s next.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#AEB7C8] sm:mt-5 sm:text-base">
            Open to AI engineering roles, research opportunities, international
            programs, and future-focused collaborations.
          </p>

          <div className="mt-6 grid gap-5 sm:mt-8 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
            <div className="space-y-3.5 sm:space-y-4">
              <ContactInput label="Name" placeholder="Your name" />
              <ContactInput label="Email" placeholder="your.email@example.com" />
              <ContactTextarea
                label="Message"
                placeholder="Tell me about the opportunity..."
              />

              <Button type="button" variant="primary" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>

            <Card className="h-full">
              <p className="font-code text-[0.68rem] uppercase leading-5 tracking-[0.2em] text-[#7DF9FF] sm:text-xs sm:tracking-[0.25em]">
                Direct Signal
              </p>

              <h3 className="mt-3 font-display text-xl font-semibold text-white sm:mt-4 sm:text-2xl">
                Prefer email?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#AEB7C8]">
                You can contact me directly for AI engineering roles, research
                opportunities, university programs, or collaborations.
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[#03050C]/30 p-3.5 sm:p-4">
                <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block break-all text-sm font-medium text-white transition hover:text-[#7DF9FF]"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="light"
                  className="w-full"
                >
                  Email Me
                </Button>

                <CopyEmailButton className="w-full" />

                <Button href={siteConfig.cvPath} className="w-full">
                  Download CV
                </Button>
              </div>
            </Card>
          </div>
        </ContactScrollContainer>
      </Reveal>
    </Section>
  );
}
