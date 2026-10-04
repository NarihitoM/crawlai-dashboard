import { Card } from "@/shared/components/ui/Card";
import { CopyButton } from "@/shared/components/ui/CopyButton";
import { Button } from "@/shared/components/ui/Button";
import { formatDate } from "@/features/projects/lib/keys";
import type { ProjectKey } from "@/features/projects/types/types";

type KeysTableProps = {
  keys: ProjectKey[];
  onRevoke: (key: ProjectKey) => void;
};

const headings = [
  { label: "Name", className: "pl-5" },
  { label: "Key", className: "w-60" },
  { label: "Created", className: "w-35" },
  { label: "Last used", className: "w-35" },
  { label: "Traces (30d)", className: "w-[130px]" },
  { label: "Actions", className: "w-[170px] pr-5", hidden: true },
];

export function KeysTable({ keys, onRevoke }: KeysTableProps) {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full min-w-[960px] table-fixed text-left">
        <thead className="bg-zinc-50 text-xs font-medium text-zinc-500">
          <tr>
            {headings.map((heading) => (
              <th key={heading.label} scope="col" className={`py-2.5 font-medium ${heading.className}`}>
                {heading.hidden ? <span className="sr-only">{heading.label}</span> : heading.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[13px] text-zinc-600">
          {keys.map((key) => (
            <tr key={key.id} className="border-t border-zinc-200">
              <td className="py-3.5 pl-5">
                <div className="flex flex-col gap-0.5">
                  <span className="truncate text-sm font-medium text-zinc-950">{key.name}</span>
                  <span className="truncate text-xs text-zinc-500">Created by {key.owner}</span>
                </div>
              </td>
              <td>
                <span className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs">
                  {key.maskedKey}
                  <CopyButton text={key.maskedKey} />
                </span>
              </td>
              <td>{formatDate(key.createdAt)}</td>
              <td className={key.lastUsed ? "" : "text-zinc-400"}>{key.lastUsed ?? "Never"}</td>
              <td className="font-mono">{key.traces.toLocaleString("en-US")}</td>
              <td className="pr-5 text-right">
                <Button variant="destructive" onClick={() => onRevoke(key)}>
                  Revoke
                </Button>
              </td>
            </tr>
          ))}
          {keys.length === 0 && (
            <tr className="border-t border-zinc-200">
              <td colSpan={headings.length} className="px-5 py-8 text-center text-zinc-500">
                No keys yet. Create one to connect your app.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
