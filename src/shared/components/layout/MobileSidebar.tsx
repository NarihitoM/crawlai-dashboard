"use client";

import { useState } from "react";
import { Icon } from "@/shared/components/ui/Icon";
import { Logo } from "@/shared/components/ui/Logo";
import { SidebarNav } from "./SidebarNav";
import { UserMenu } from "./UserMenu";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-sidebar"
        className="grid size-8 place-items-center rounded-lg text-zinc-950 transition-colors hover:bg-zinc-100"
      >
        <Icon name="menu" size={18} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/35"
          />
          <aside
            id="mobile-sidebar"
            className="absolute inset-y-0 left-0 flex w-64 flex-col justify-between border-r border-zinc-200 bg-zinc-50 px-3 py-5"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between px-2.5 py-1">
                <Logo />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="grid size-8 place-items-center rounded-lg text-zinc-600 hover:bg-zinc-100"
                >
                  <Icon name="x" size={18} />
                </button>
              </div>
              <SidebarNav onNavigate={close} />
            </div>
            <UserMenu />
          </aside>
        </div>
      )}
    </div>
  );
}
