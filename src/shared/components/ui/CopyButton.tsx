"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : label}
      className="text-zinc-500 transition-colors hover:text-zinc-950"
    >
      <Icon name={copied ? "check" : "copy"} size={14} />
    </button>
  );
}
