"use client";

import { useEffect, useRef, type ReactNode } from "react";

type DialogProps = {
  labelledBy: string;
  onClose: () => void;
  children: ReactNode;
};

export function Dialog({ labelledBy, onClose, children }: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const target = panel?.querySelector<HTMLElement>("input") ?? panel?.querySelector("button");
    target?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/35 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="flex max-h-full w-full max-w-[480px] flex-col gap-5 overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_16px_48px_rgb(0_0_0/0.18)]"
      >
        {children}
      </div>
    </div>
  );
}
