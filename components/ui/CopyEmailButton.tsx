"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

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
      {copied ? "Email Copied" : "Copy Email"}
    </Button>
  );
}
