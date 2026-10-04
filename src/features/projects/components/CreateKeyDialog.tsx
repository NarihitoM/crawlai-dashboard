"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Icon } from "@/shared/components/ui/Icon";
import type { KeyType } from "@/features/projects/types/types";
import { Dialog } from "@/features/projects/components/Dialog";

type CreateKeyDialogProps = {
  onClose: () => void;
  onCreate: (name: string, type: KeyType) => void;
};

const keyTypes: { value: KeyType; title: string; description: string }[] = [
  { value: "live", title: "Live", description: "Full traces and prompts" },
  { value: "test", title: "Test", description: "Traces kept for 24 hours" },
];

export function CreateKeyDialog({ onClose, onCreate }: CreateKeyDialogProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<KeyType>("live");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (trimmed) onCreate(trimmed, type);
  }

  return (
    <Dialog labelledBy="create-key-title" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 id="create-key-title" className="text-lg font-semibold tracking-[-0.3px]">
              Create project key
            </h2>
            <p className="text-[13px] text-zinc-500">
              Name the key after where it runs, like production or CI.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <Icon name="x" />
          </button>
        </div>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">Key name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            maxLength={64}
            placeholder="Production"
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 focus:outline-none"
          />
        </label>
        <fieldset>
          <legend className="mb-1.5 text-sm font-medium">Key type</legend>
          <div className="flex gap-2">
            {keyTypes.map((option) => (
              <label
                key={option.value}
                className="flex flex-1 cursor-pointer flex-col gap-0.5 rounded-lg border border-zinc-200 bg-white p-3 has-checked:border-lime-500 has-checked:bg-lime-50 has-checked:ring-1 has-checked:ring-lime-500 has-focus-visible:ring-2"
              >
                <input
                  type="radio"
                  name="key-type"
                  value={option.value}
                  checked={type === option.value}
                  onChange={() => setType(option.value)}
                  className="sr-only"
                />
                <span className="text-[13px] font-medium">{option.title}</span>
                <span className="text-xs text-zinc-500">{option.description}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="flex justify-end gap-2 pt-1">
          <Button variant="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" size="md">
            Create key
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
