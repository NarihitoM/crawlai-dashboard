import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { backendUrl } from "@/shared/lib/backend";
import { site } from "@/shared/lib/site";
import type { User } from "@/shared/types/user";

export async function requireUser(): Promise<User> {
  const response = await fetch(`${backendUrl}/api/v1/auth/me`, {
    headers: { cookie: (await cookies()).toString() },
    cache: "no-store",
  });
  if (response.status === 401) redirect(site.signInUrl);
  if (!response.ok) throw new Error(`Could not load the current user (${response.status})`);
  return (await response.json()) as User;
}
