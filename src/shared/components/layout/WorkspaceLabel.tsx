"use client";

import { useUser } from "./UserProvider";

export function WorkspaceLabel() {
  const { name } = useUser();
  return (
    <span className="truncate text-zinc-500 max-sm:hidden">
      {name.split(" ")[0]}&apos;s workspace
    </span>
  );
}
