"use client";

import { useCallback, useState, type ReactNode } from "react";
import { PageHeader } from "@/shared/components/layout/PageHeader";
import { Button } from "@/shared/components/ui/Button";
import { site } from "@/shared/lib/site";
import { generateSecret, maskSecret, todayIso } from "@/features/projects/lib/keys";
import type { CreatedKey, KeyType, Project, ProjectKey } from "@/features/projects/types/types";
import { CreateKeyDialog } from "@/features/projects/components/CreateKeyDialog";
import { KeyCreatedDialog } from "@/features/projects/components/KeyCreatedDialog";
import { KeysTable } from "@/features/projects/components/KeysTable";
import { ProjectSwitcher } from "@/features/projects/components/ProjectSwitcher";

type KeysManagerProps = {
  project: Project;
  initialKeys: ProjectKey[];
  children: ReactNode;
};

export function KeysManager({ project, initialKeys, children }: KeysManagerProps) {
  const [keys, setKeys] = useState(initialKeys);
  const [creating, setCreating] = useState(false);
  const [createdKey, setCreatedKey] = useState<CreatedKey | null>(null);

  const closeCreate = useCallback(() => setCreating(false), []);
  const closeCreated = useCallback(() => setCreatedKey(null), []);

  function createKey(name: string, type: KeyType) {
    const secret = generateSecret(type);
    const createdAt = todayIso();

    setKeys((current) => [
      {
        id: crypto.randomUUID(),
        name,
        owner: site.user.name,
        maskedKey: maskSecret(secret),
        createdAt,
        lastUsed: null,
        traces: 0,
      },
      ...current,
    ]);
    setCreating(false);
    setCreatedKey({ name, type, secret, createdAt });
  }

  function revokeKey(key: ProjectKey) {
    if (!confirm(`Revoke "${key.name}"? Apps using this key will stop working.`)) return;
    setKeys((current) => current.filter((item) => item.id !== key.id));
  }

  return (
    <>
      <PageHeader
        title="Projects & Keys"
        description="Each project has its own keys, traces and prompts. A key links your SDK to this dashboard."
        actions={
          <>
            <ProjectSwitcher project={project} />
            <Button size="md" onClick={() => setCreating(true)}>
              Create key
            </Button>
          </>
        }
      />
      {children}
      <KeysTable keys={keys} onRevoke={revokeKey} />
      {creating && <CreateKeyDialog onClose={closeCreate} onCreate={createKey} />}
      {createdKey && <KeyCreatedDialog createdKey={createdKey} onClose={closeCreated} />}
    </>
  );
}
