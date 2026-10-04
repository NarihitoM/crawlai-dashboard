export type GatewayStat = {
  label: string;
  value: string;
};

export type ProviderId = "openai" | "anthropic" | "google" | "mistral" | "groq";

export type Provider =
  | {
      id: ProviderId;
      name: string;
      connected: true;
      models: string[];
      maskedKey: string;
      p50: string;
    }
  | {
      id: ProviderId;
      name: string;
      connected: false;
    };

export type RoutingStep = {
  role: "Primary" | "Fallback";
  model: string;
};

export type RoutingSetting = {
  label: string;
  value: string;
};

export type RoutingRules = {
  project: string;
  chain: RoutingStep[];
  settings: RoutingSetting[];
};

export type Policy = {
  name: string;
  description: string;
  enabled: boolean;
};

export type Gateway = {
  baseUrl: string;
  stats: GatewayStat[];
  providers: Provider[];
  routing: RoutingRules;
  policies: Policy[];
};
