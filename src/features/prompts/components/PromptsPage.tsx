import { getPrompts } from "@/features/prompts/api/promptsApi";
import { PromptsWorkspace } from "@/features/prompts/components/PromptsWorkspace";
import { PageShell } from "@/shared/components/layout/PageShell";

export async function PromptsPage() {
  const prompts = await getPrompts();

  return (
    <PageShell page="Prompts">
      <PromptsWorkspace prompts={prompts} />
    </PageShell>
  );
}
