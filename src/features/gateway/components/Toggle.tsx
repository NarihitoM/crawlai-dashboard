"use client";

import { useState } from "react";

type ToggleProps = {
  label: string;
  defaultChecked: boolean;
};

export function Toggle({ label, defaultChecked }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => setChecked(!checked)}
      className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors ${
        checked ? "bg-lime-500" : "bg-zinc-200"
      }`}
    >
      <span
        className={`size-4 rounded-full bg-neutral-50 transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
