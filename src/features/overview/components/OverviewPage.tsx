import { PageHeader } from "@/shared/components/layout/PageHeader";
import { PageShell } from "@/shared/components/layout/PageShell";
import { getOverview } from "@/features/overview/api/overviewApi";
import { RangeTabs } from "./RangeTabs";
import { RecentTraces } from "./RecentTraces";
import { RequestsChart } from "./RequestsChart";
import { StatCards } from "./StatCards";
import { TopModels } from "./TopModels";

export async function OverviewPage() {
  const overview = await getOverview();

  return (
    <PageShell page="Overview">
      <PageHeader
        title="Good afternoon, Ada"
        description="Here is what your agents did with CrawlAi this week."
        actions={<RangeTabs />}
      />
      <StatCards stats={overview.stats} />
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
        <RequestsChart requests={overview.requests} />
        <TopModels models={overview.topModels} />
      </div>
      <RecentTraces traces={overview.recentTraces} />
    </PageShell>
  );
}
