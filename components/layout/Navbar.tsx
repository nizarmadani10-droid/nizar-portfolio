"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { useI18n } from "@/components/providers/I18nProvider";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import {
  getDictionary,
  homeHref,
  localeLabels,
  locales,
  localizePath,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navTargets = [
  { key: "projects", hash: "projects" },
  { key: "skills", hash: "skills" },
  { key: "experience", hash: "experience" },
  { key: "education", hash: "education" },
  { key: "contact", hash: "contact" },
] as const;

const socialLinks = [
  {
    key: "github",
    href: siteConfig.links.github,
    icon: "github",
  },
  {
    key: "linkedin",
    href: siteConfig.links.linkedin,
    icon: "linkedin",
  },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { locale, dictionary } = useI18n();
  const nav = locale === "ar" ? getDictionary("en").nav : dictionary.nav;

  return (
    <nav
      lang={locale === "ar" ? "en" : locale}
      dir="ltr"
      className="sticky top-0 z-50 border-b border-white/10 bg-[#03050C]/78 backdrop-blur-xl lg:bg-[#03050C]/55"
    >
      <Container className="flex items-center justify-between gap-4 py-3 lg:py-3.5">
        <Link
          href={homeHref(locale)}
          className="shrink-0 font-display text-lg font-semibold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Nizar<span className="text-[#7DF9FF]">.</span>
        </Link>

        <div className="hidden items-center gap-4 text-sm text-[#AEB7C8] lg:flex xl:gap-8">
          {navTargets.map((item) => (
            <Link
              key={item.hash}
              href={homeHref(locale, item.hash)}
              className="whitespace-nowrap transition hover:text-white"
            >
              {nav[item.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          {socialLinks.map((link) => (
            <SocialIconLink
              key={link.key}
              href={link.href}
              label={
                link.key === "github"
                  ? nav.githubProfile
                  : nav.linkedinProfile
              }
              icon={link.icon}
            />
          ))}

          <LanguageSwitcher pathname={pathname} activeLocale={locale} />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#7DF9FF]/35 hover:bg-white/[0.06] lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={nav.toggleMenu}
        >
          <span aria-hidden="true" className="relative block h-4 w-4">
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-4 bg-current transition",
                isOpen ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-4 bg-current transition",
                isOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-4 bg-current transition",
                isOpen ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </span>
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#03050C]/96 px-5 py-5 backdrop-blur-xl sm:px-6 lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="border-b border-white/10 pb-4">
              <LanguageSwitcher pathname={pathname} activeLocale={locale} />
            </div>

            {navTargets.map((item) => (
              <Link
                key={item.hash}
                href={homeHref(locale, item.hash)}
                className="rounded-2xl px-1 py-1.5 font-display text-xl text-white transition hover:bg-white/[0.04]"
                onClick={() => setIsOpen(false)}
              >
                {nav[item.key]}
              </Link>
            ))}

            <div className="grid gap-3 border-t border-white/10 pt-5">
              {socialLinks.map((link) => {
                const label =
                  link.key === "github"
                    ? nav.githubProfile
                    : nav.linkedinProfile;

                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex min-h-11 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-[#DDE4F2] transition hover:border-[#7DF9FF]/35 hover:bg-[#7DF9FF]/10 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <SocialIcon icon={link.icon} />
                    {link.key === "github" ? "GitHub" : "LinkedIn"}
                  </a>
                );
              })}
            </div>

            <Button href={siteConfig.cvPaths[locale]} className="mt-2 w-full">
              {nav.downloadCv}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function LanguageSwitcher({
  pathname,
  activeLocale,
  className,
}: {
  pathname: string;
  activeLocale: Locale;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.035] p-0.5 sm:gap-1 sm:p-1",
        className,
      )}
      aria-label="Language switcher"
    >
      {locales.map((locale) => {
        const isActive = locale === activeLocale;

        return (
          <Link
            key={locale}
            href={localizePath(pathname, locale)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-2 py-1 font-code text-[0.6rem] font-semibold uppercase tracking-[0.12em] transition sm:px-2.5 sm:py-1.5 sm:text-[0.65rem] sm:tracking-[0.14em]",
              isActive
                ? "bg-[#7DF9FF]/14 text-white shadow-[0_0_18px_rgba(125,249,255,0.12)]"
                : "text-[#8F9AAF] hover:bg-white/[0.06] hover:text-white",
            )}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}

function SocialIconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "github" | "linkedin";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#AEB7C8] transition duration-300 hover:-translate-y-0.5 hover:border-[#7DF9FF]/50 hover:bg-[#7DF9FF]/10 hover:text-white hover:shadow-[0_0_22px_rgba(125,249,255,0.16)]"
    >
      <SocialIcon icon={icon} />
    </a>
  );
}

function SocialIcon({ icon }: { icon: "github" | "linkedin" }) {
  if (icon === "github") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.51.47-3.16-.63-3.36-1.21-.11-.3-.6-1.21-1.03-1.46-.35-.19-.85-.66-.01-.67.79-.01 1.35.74 1.54 1.05.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.25 9.25 0 0 1 12 6.95c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.93.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.9 9.33c0-3.09-1.65-4.53-3.85-4.53a3.33 3.33 0 0 0-3 1.65h-.04V8.98H9.3v10.27h3.19v-5.08c0-1.34.25-2.64 1.92-2.64 1.64 0 1.66 1.54 1.66 2.72v5h3.18v-5.92Z" />
    </svg>
  );
}
