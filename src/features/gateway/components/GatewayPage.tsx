import { getGateway } from "@/features/gateway/api/gatewayApi";
import { BaseUrlCard } from "@/features/gateway/components/BaseUrlCard";
import { PoliciesCard } from "@/features/gateway/components/PoliciesCard";
import { ProvidersCard } from "@/features/gateway/components/ProvidersCard";
import { RoutingCard } from "@/features/gateway/components/RoutingCard";
import { PageHeader } from "@/shared/components/layout/PageHeader";
import { PageShell } from "@/shared/components/layout/PageShell";

export async function GatewayPage() {
  const gateway = await getGateway();

  return (
    <PageShell page="Gateway">
      <PageHeader
        title="Gateway"
        description="One OpenAI-compatible endpoint for every provider. Provider keys stay here, your app only needs CRAWLAI_KEY."
      />
      <BaseUrlCard baseUrl={gateway.baseUrl} stats={gateway.stats} />
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
        <ProvidersCard providers={gateway.providers} />
        <div className="flex flex-col gap-4 xl:w-[440px] xl:shrink-0">
          <RoutingCard routing={gateway.routing} />
          <PoliciesCard policies={gateway.policies} />
        </div>
      </div>
    </PageShell>
  );
}
