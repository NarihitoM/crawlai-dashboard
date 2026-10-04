import { ButtonLink } from "@/shared/components/ui/Button";
import { ThemeToggle } from "@/shared/components/ui/ThemeToggle";
import { site } from "@/shared/lib/site";
import { MobileSidebar } from "./MobileSidebar";
import { WorkspaceLabel } from "./WorkspaceLabel";

type TopbarProps = {
  page: string;
  showInstall?: boolean;
};

export function Topbar({ page, showInstall = true }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-3.5 sm:px-8">
      <div className="flex min-w-0 items-center gap-2 text-sm">
        <MobileSidebar />
        <WorkspaceLabel />
        <span className="text-zinc-400 max-sm:hidden">/</span>
        <span className="truncate font-medium">{page}</span>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ButtonLink href={site.docsUrl} target="_blank" rel="noreferrer" variant="secondary">
          Docs
        </ButtonLink>
        {showInstall && <ButtonLink href={site.installUrl}>Install SDK</ButtonLink>}
      </div>
    </header>
  );
}
