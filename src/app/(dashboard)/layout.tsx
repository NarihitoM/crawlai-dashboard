import { Sidebar } from "@/shared/components/layout/Sidebar";
import { UserProvider } from "@/shared/components/layout/UserProvider";
import { requireUser } from "@/shared/lib/session";

export default async function DashboardLayout({ children }: LayoutProps<"/">) {
  const user = await requireUser();

  return (
    <UserProvider user={user}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </UserProvider>
  );
}
