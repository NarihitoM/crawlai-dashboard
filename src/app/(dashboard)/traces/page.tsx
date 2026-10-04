import type { Metadata } from "next";
import { TracesPage } from "@/features/traces";

export const metadata: Metadata = { title: "Traces" };

export default function Page() {
  return <TracesPage />;
}
