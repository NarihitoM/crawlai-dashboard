import type { Metadata } from "next";
import { PromptsPage } from "@/features/prompts";

export const metadata: Metadata = { title: "Prompts" };

export default function Page() {
  return <PromptsPage />;
}
