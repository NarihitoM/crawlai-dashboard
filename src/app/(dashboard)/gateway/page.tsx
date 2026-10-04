import type { Metadata } from "next";
import { GatewayPage } from "@/features/gateway";

export const metadata: Metadata = { title: "Gateway" };

export default function Page() {
  return <GatewayPage />;
}
