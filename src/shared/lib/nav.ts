import type { IconName } from "@/shared/components/ui/Icon";
import { site } from "./site";

export type NavItem = {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Overview", href: "/", icon: "layoutGrid" },
  { label: "Traces", href: "/traces", icon: "listTree" },
  { label: "Prompts", href: "/prompts", icon: "messageSquareText" },
  { label: "Gateway", href: "/gateway", icon: "waypoints" },
  { label: "Projects & Keys", href: "/projects", icon: "keyRound" },
];

export const resourceNav: NavItem[] = [
  { label: "Documentation", href: site.docsUrl, icon: "bookOpen", external: true },
  { label: "Status", href: site.statusUrl, icon: "activity", external: true },
];
