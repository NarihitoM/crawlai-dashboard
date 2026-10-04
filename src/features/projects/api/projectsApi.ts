import type { Project, ProjectKey } from "@/features/projects/types/types";

export async function getProject(): Promise<Project> {
  return { id: "prj_support_bot", name: "support-bot" };
}

export async function getKeys(): Promise<ProjectKey[]> {
  return [
    {
      id: "key_production",
      name: "Production",
      owner: "Ada Lovelace",
      maskedKey: "cai-live-••••••••a3f9",
      createdAt: "2026-08-14",
      lastUsed: "2 min ago",
      traces: 41208,
    },
    {
      id: "key_staging",
      name: "Staging",
      owner: "Ada Lovelace",
      maskedKey: "cai-live-••••••••7c21",
      createdAt: "2026-07-30",
      lastUsed: "1 hr ago",
      traces: 6511,
    },
    {
      id: "key_ci_evals",
      name: "CI evals",
      owner: "Ada Lovelace",
      maskedKey: "cai-test-••••••••e04b",
      createdAt: "2026-07-02",
      lastUsed: "3 days ago",
      traces: 385,
    },
    {
      id: "key_local_dev",
      name: "Local dev",
      owner: "Ada Lovelace",
      maskedKey: "cai-test-••••••••19dd",
      createdAt: "2026-09-21",
      lastUsed: null,
      traces: 0,
    },
  ];
}
