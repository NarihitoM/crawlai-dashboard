import type { Metadata } from "next";
import { ProjectsPage } from "@/features/projects";

export const metadata: Metadata = { title: "Projects & Keys" };

export default function Page() {
  return <ProjectsPage />;
}
