import type { Overview } from "@/features/overview/types/types";

const overview: Overview = {
  stats: [
    { label: "Requests", value: "48,213", delta: "+18.2% vs last week", icon: "activity" },
    { label: "Model spend", value: "$182.40", delta: "+6.1% vs last week", icon: "dollarSign" },
    { label: "p95 latency", value: "2.31s", delta: "-0.4s vs last week", icon: "timer" },
    { label: "Error rate", value: "0.8%", delta: "-0.3% vs last week", icon: "triangleAlert" },
  ],
  requests: [
    { day: "Mon", openai: 3600, anthropic: 2040, google: 720 },
    { day: "Tue", openai: 4320, anthropic: 2400, google: 1080 },
    { day: "Wed", openai: 3480, anthropic: 1800, google: 600 },
    { day: "Thu", openai: 5280, anthropic: 2760, google: 1320 },
    { day: "Fri", openai: 5760, anthropic: 3120, google: 1200 },
    { day: "Sat", openai: 2400, anthropic: 1080, google: 480 },
    { day: "Sun", openai: 3120, anthropic: 1440, google: 840 },
  ],
  topModels: [
    { model: "gpt-5", provider: "OpenAI", cost: 96.12 },
    { model: "claude-sonnet-5", provider: "Anthropic", cost: 54.8 },
    { model: "gemini-2.5-pro", provider: "Google", cost: 21.36 },
    { model: "gpt-5-mini", provider: "OpenAI", cost: 7.44 },
    { model: "claude-haiku-4-5", provider: "Anthropic", cost: 2.68 },
  ],
  recentTraces: [
    {
      id: "trace_8f2a",
      name: "support-agent",
      subtitle: "chat.reply · u_1842",
      model: "gpt-5",
      tokens: 3412,
      cost: 0.0142,
      latency: "2.84s",
      status: { label: "200 OK", variant: "lime" },
      time: "2 min ago",
    },
    {
      id: "trace_7c19",
      name: "research-agent",
      subtitle: "agent.run · 14 spans",
      model: "claude-sonnet-5",
      tokens: 18906,
      cost: 0.0921,
      latency: "11.2s",
      status: { label: "200 OK", variant: "lime" },
      time: "6 min ago",
    },
    {
      id: "trace_7b02",
      name: "support-agent",
      subtitle: "chat.reply · u_0977",
      model: "gpt-5",
      tokens: 2108,
      cost: 0.0088,
      latency: "1.42s",
      status: { label: "Fallback", variant: "neutral" },
      time: "9 min ago",
    },
    {
      id: "trace_7710",
      name: "sql-copilot",
      subtitle: "tool.query · u_3301",
      model: "gpt-5-mini",
      tokens: 1204,
      cost: 0.0006,
      latency: "0.64s",
      status: { label: "429 Rate limit", variant: "error" },
      time: "1 hr ago",
    },
  ],
};

export async function getOverview(): Promise<Overview> {
  return overview;
}
