"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/shared/components/ui/Icon";
import { site } from "@/shared/lib/site";
import type { User } from "@/shared/types/user";
import { useUser } from "./UserProvider";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function Avatar({ user }: { user: User }) {
  if (user.avatarUrl) {
    return (
      <Image
        src={user.avatarUrl}
        alt=""
        width={32}
        height={32}
        unoptimized
        className="size-8 shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-lime-400">
      {initials(user.name)}
    </span>
  );
}

export function UserMenu() {
  const user = useUser();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  async function signOut() {
    setSigningOut(true);
    await fetch("/api/v1/auth/sign-out", { method: "POST" });
    window.location.assign(site.landingUrl);
  }

  return (
    <div className="relative">
      {open && (
        <div
          id="user-menu"
          className="absolute inset-x-0 bottom-full mb-2 rounded-lg border border-zinc-200 bg-white p-1 shadow-sm"
        >
          <button
            type="button"
            onClick={signOut}
            disabled={signingOut}
            className="w-full rounded-md px-2.5 py-2 text-left text-[13px] text-zinc-950 transition-colors hover:bg-zinc-100 disabled:opacity-50"
          >
            {signingOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="user-menu"
        className="flex w-full items-center gap-2.5 rounded-lg p-1.5 text-left transition-colors hover:bg-zinc-100"
      >
        <Avatar user={user} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium">{user.name}</p>
          <p className="truncate text-xs text-zinc-500">{user.email}</p>
        </div>
        <Icon name="chevronsUpDown" size={14} className="shrink-0 text-zinc-500" />
      </button>
    </div>
  );
}
