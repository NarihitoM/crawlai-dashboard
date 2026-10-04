import type { ReactNode } from "react";
import { Topbar } from "./Topbar";

type PageShellProps = {
  page: string;
  showInstall?: boolean;
  children: ReactNode;
};

export function PageShell({ page, showInstall, children }: PageShellProps) {
  return (
    <>
      <Topbar page={page} showInstall={showInstall} />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-8">{children}</main>
    </>
  );
}
