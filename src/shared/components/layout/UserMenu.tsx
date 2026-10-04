import { Icon } from "@/shared/components/ui/Icon";
import { site } from "@/shared/lib/site";

export function UserMenu() {
  return (
    <div className="flex items-center gap-2.5 p-1.5">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-lime-400">
        {site.user.initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium">{site.user.name}</p>
        <p className="truncate text-xs text-zinc-500">{site.user.email}</p>
      </div>
      <Icon name="chevronsUpDown" size={14} className="shrink-0 text-zinc-500" />
    </div>
  );
}
