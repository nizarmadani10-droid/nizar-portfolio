import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioHome } from "@/components/pages/PortfolioHome";
import { siteConfig } from "@/lib/constants";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

type LocalizedHomeProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedHomeProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return {
    title: `${siteConfig.name} | ${dictionary.hero.role}`,
    description: dictionary.hero.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
    openGraph: {
      title: `${siteConfig.name} | ${dictionary.hero.role}`,
      description: dictionary.hero.description,
      url: `/${locale}`,
      siteName: `${siteConfig.name} Portfolio`,
      locale:
        locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_MA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${siteConfig.name} | ${dictionary.hero.role}`,
      description: dictionary.hero.description,
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioHome locale={locale} />;
}
