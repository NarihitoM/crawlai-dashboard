"use client";

import { useState } from "react";

const ranges = ["24h", "7 days", "30 days"];

export function RangeTabs() {
  const [active, setActive] = useState("7 days");

  return (
    <div className="flex gap-1 rounded-lg bg-zinc-100 p-1">
      {ranges.map((range) => (
        <button
          key={range}
          type="button"
          aria-pressed={range === active}
          onClick={() => setActive(range)}
          className={`rounded-md px-3 py-1.5 text-[13px] leading-4 font-medium whitespace-nowrap transition-colors ${
            range === active ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-950"
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
}
