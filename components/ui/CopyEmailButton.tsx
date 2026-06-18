"use client";

import { useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const { dictionary } = useI18n();
  const contact = dictionary.contact;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="secondary"
      className={className}
      onClick={handleCopy}
    >
      {copied ? contact.emailCopied : contact.copyEmail}
    </Button>
  );
}
