import { PageShell } from "@/shared/components/layout/PageShell";
import { getKeys, getProject } from "@/features/projects/api/projectsApi";
import { ConnectSteps } from "@/features/projects/components/ConnectSteps";
import { KeysManager } from "@/features/projects/components/KeysManager";
import { KeysNotice } from "@/features/projects/components/KeysNotice";

export async function ProjectsPage() {
  const [project, keys] = await Promise.all([getProject(), getKeys()]);

  return (
    <PageShell page="Projects & Keys" showInstall={false}>
      <KeysManager project={project} initialKeys={keys}>
        <ConnectSteps />
        <KeysNotice />
      </KeysManager>
    </PageShell>
  );
}
