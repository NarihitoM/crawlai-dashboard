"use client";

import { useState } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Icon } from "@/shared/components/ui/Icon";
import { formatDate } from "@/features/projects/lib/keys";
import type { CreatedKey } from "@/features/projects/types/types";
import { Dialog } from "@/features/projects/components/Dialog";

type KeyCreatedDialogProps = {
  createdKey: CreatedKey;
  onClose: () => void;
};

export function KeyCreatedDialog({ createdKey, onClose }: KeyCreatedDialogProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(createdKey.secret);
    setCopied(true);
  }

  const meta = [
    { label: "Name", value: createdKey.name },
    { label: "Key type", value: createdKey.type === "live" ? "Live" : "Test" },
    { label: "Created", value: formatDate(createdKey.createdAt) },
  ];

  return (
    <Dialog labelledBy="key-created-title" onClose={onClose}>
      <span className="grid size-10 place-items-center rounded-full bg-lime-100 text-lime-900">
        <Icon name="check" size={20} />
      </span>
      <div className="flex flex-col gap-1">
        <h2 id="key-created-title" className="text-lg font-semibold tracking-[-0.3px]">
          Save your project key
        </h2>
        <p className="text-[13px] leading-5 text-zinc-500">
          Copy it now and store it somewhere safe. For your security we will not show it again.
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-lime-100 bg-lime-50 py-1.5 pr-1.5 pl-3">
        <code className="min-w-0 flex-1 font-mono text-[13px] break-all">{createdKey.secret}</code>
        <Button onClick={copy}>{copied ? "Copied" : "Copy"}</Button>
      </div>
      <dl className="flex flex-wrap gap-6">
        {meta.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <dt className="text-xs text-zinc-500">{item.label}</dt>
            <dd className="text-[13px] font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex justify-end pt-1">
        <Button size="md" onClick={onClose}>
          I saved my key
        </Button>
      </div>
    </Dialog>
  );
}
