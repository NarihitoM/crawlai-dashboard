"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/shared/components/ui/Icon";
import { mainNav, resourceNav, type NavItem } from "@/shared/lib/nav";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavLink({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate?: () => void }) {
  const external = item.external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm leading-[17px] font-medium transition-colors ${
        active
          ? "bg-white text-zinc-950 outline outline-zinc-200"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
      }`}
      {...external}
    >
      <Icon name={item.icon} className={active ? "text-lime-500" : "text-zinc-500"} />
      {item.label}
    </Link>
  );
}

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <nav aria-label="Main" className="flex flex-col gap-0.5">
        {mainNav.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            active={isActive(pathname, item.href)}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
      <nav aria-label="Resources" className="flex flex-col gap-0.5">
        <p className="px-2.5 pt-2 pb-1.5 text-xs font-medium text-zinc-400">Resources</p>
        {resourceNav.map((item) => (
          <NavLink key={item.href} item={item} active={false} onNavigate={onNavigate} />
        ))}
      </nav>
    </div>
  );
}
