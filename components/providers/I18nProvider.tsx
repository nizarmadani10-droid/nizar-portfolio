"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import {
  getDictionary,
  getDirection,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type I18nContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  direction: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const direction = getDirection(locale);
  const dictionary = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  return (
    <I18nContext.Provider value={{ locale, dictionary, direction }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider.");
  }

  return context;
}
