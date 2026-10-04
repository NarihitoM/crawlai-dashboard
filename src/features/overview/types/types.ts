import type { BadgeVariant } from "@/shared/components/ui/Badge";
import type { IconName } from "@/shared/components/ui/Icon";

export type Stat = {
  label: string;
  value: string;
  delta: string;
  icon: IconName;
};

export type DailyRequests = {
  day: string;
  openai: number;
  anthropic: number;
  google: number;
};

export type ModelCost = {
  model: string;
  provider: string;
  cost: number;
};

export type RecentTrace = {
  id: string;
  name: string;
  subtitle: string;
  model: string;
  tokens: number;
  cost: number;
  latency: string;
  status: {
    label: string;
    variant: BadgeVariant;
  };
  time: string;
};

export type Overview = {
  stats: Stat[];
  requests: DailyRequests[];
  topModels: ModelCost[];
  recentTraces: RecentTrace[];
};
