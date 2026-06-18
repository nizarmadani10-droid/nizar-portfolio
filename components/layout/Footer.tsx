"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const { dictionary } = useI18n();

  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm leading-6 text-[#6F7A90] sm:px-6">
      © {new Date().getFullYear()} {siteConfig.name}. {dictionary.footer}
    </footer>
  );
}
