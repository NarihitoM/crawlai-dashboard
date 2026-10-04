import { Logo } from "@/shared/components/ui/Logo";
import { SidebarNav } from "./SidebarNav";
import { UserMenu } from "./UserMenu";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col justify-between border-r border-zinc-200 bg-zinc-50 px-3 py-5 lg:flex">
      <div className="flex flex-col gap-6">
        <div className="px-2.5 py-1">
          <Logo />
        </div>
        <SidebarNav />
      </div>
      <UserMenu />
    </aside>
  );
}
