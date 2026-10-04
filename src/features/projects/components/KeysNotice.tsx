import { Icon } from "@/shared/components/ui/Icon";

export function KeysNotice() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-lime-100 bg-lime-50 px-4 py-3 text-[13px] text-lime-900">
      <Icon name="shieldCheck" className="shrink-0" />
      <p>
        Project keys are server-side secrets. Never ship them in browser or mobile code, and
        revoke a key right away if it leaks.
      </p>
    </div>
  );
}
