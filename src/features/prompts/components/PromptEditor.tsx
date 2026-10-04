"use client";

import { useState } from "react";
import { DeveloperCode } from "@/features/prompts/components/DeveloperCode";
import { ModelConfig } from "@/features/prompts/components/ModelConfig";
import { SetupChoice } from "@/features/prompts/components/SetupChoice";
import { SystemPromptField } from "@/features/prompts/components/SystemPromptField";
import { VersionHistory } from "@/features/prompts/components/VersionHistory";
import type { Prompt, SetupMode } from "@/features/prompts/types/types";
import { Badge } from "@/shared/components/ui/Badge";
import { Button, ButtonLink } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";

export function PromptEditor({ prompt }: { prompt: Prompt }) {
  const [mode, setMode] = useState<SetupMode>("easy");
  const [systemPrompt, setSystemPrompt] = useState(prompt.systemPrompt);
  const easy = mode === "easy";
  const dirty = systemPrompt !== prompt.systemPrompt;

  return (
    <Card className="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-5 py-3.5">
        <div className="flex flex-wrap items-center gap-2.5">
          <h2 className="text-base font-semibold">{prompt.name}</h2>
          <Badge variant="neutral">{prompt.draft} draft</Badge>
          <span className="text-xs text-zinc-500">
            {easy ? `Edited by Ada${dirty ? " · unsaved changes" : ""}` : "Synced from code · 2 min ago"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ButtonLink href="/gateway" variant="secondary">
            Test in gateway
          </ButtonLink>
          {easy && <Button>Publish version</Button>}
        </div>
      </div>
      <SetupChoice mode={mode} onChange={setMode} />
      {easy ? (
        <>
          <ModelConfig prompt={prompt} />
          <SystemPromptField name={prompt.name} value={systemPrompt} onChange={setSystemPrompt} />
        </>
      ) : (
        <DeveloperCode prompt={prompt} />
      )}
      <VersionHistory versions={prompt.history} />
    </Card>
  );
}
