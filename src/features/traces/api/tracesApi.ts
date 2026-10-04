import { formatCost, formatSeconds, formatTokens } from "@/features/traces/lib/format";
import type { Span, SpanMessage, TraceDetail, TraceStatus, TraceSummary } from "@/features/traces/types/types";

const ok: TraceStatus = { label: "200 OK", variant: "lime" };
const fallback: TraceStatus = { label: "Fallback", variant: "neutral" };
const rateLimit: TraceStatus = { label: "429 Rate limit", variant: "error" };

const traces: TraceSummary[] = [
  { id: "trace_8f2a", name: "support-agent", user: "u_1842", models: ["gpt-5", "claude-sonnet-5"], spans: 5, tokens: 3412, cost: 0.0142, latency: 2.84, status: fallback, time: "2 min ago" },
  { id: "trace_7c19", name: "research-agent", user: "u_0211", models: ["claude-sonnet-5"], spans: 14, tokens: 18906, cost: 0.0921, latency: 11.2, status: ok, time: "6 min ago" },
  { id: "trace_7b02", name: "support-agent", user: "u_0977", models: ["gpt-5"], spans: 3, tokens: 2108, cost: 0.0088, latency: 1.42, status: ok, time: "9 min ago" },
  { id: "trace_79e4", name: "summarizer", user: "batch", models: ["gemini-2.5-pro"], spans: 2, tokens: 24550, cost: 0.0613, latency: 6.71, status: ok, time: "21 min ago" },
  { id: "trace_7710", name: "sql-copilot", user: "u_3301", models: ["gpt-5-mini"], spans: 4, tokens: 1204, cost: 0.0006, latency: 0.64, status: rateLimit, time: "1 hr ago" },
  { id: "trace_76aa", name: "support-agent", user: "u_1290", models: ["gpt-5"], spans: 3, tokens: 1876, cost: 0.0071, latency: 1.18, status: ok, time: "1 hr ago" },
  { id: "trace_7591", name: "research-agent", user: "u_0211", models: ["claude-sonnet-5", "gpt-5-mini"], spans: 11, tokens: 12440, cost: 0.0598, latency: 8.93, status: ok, time: "2 hr ago" },
  { id: "trace_74c0", name: "support-agent", user: "u_2044", models: ["gpt-5"], spans: 3, tokens: 2530, cost: 0.0102, latency: 1.66, status: ok, time: "2 hr ago" },
  { id: "trace_7302", name: "sql-copilot", user: "u_3301", models: ["gpt-5-mini"], spans: 4, tokens: 988, cost: 0.0004, latency: 0.51, status: ok, time: "3 hr ago" },
  { id: "trace_72fe", name: "summarizer", user: "batch", models: ["gemini-2.5-pro"], spans: 2, tokens: 19302, cost: 0.0482, latency: 5.88, status: ok, time: "3 hr ago" },
];

const systemMessage: SpanMessage = {
  role: "system",
  text: "You are the Acme support agent. Answer in two sentences and cite the order status.",
};
const userMessage: SpanMessage = { role: "user", text: "Where is my order #4821? It said shipped last week." };
const toolMessage: SpanMessage = {
  role: "tool",
  name: "web_search",
  text: "Order #4821: shipped Sep 30 via DHL, tracking 7741 2093.",
};
const answerMessage: SpanMessage = {
  role: "assistant",
  text: "Your order #4821 shipped on Sep 30 with DHL. You can track it with number 7741 2093.",
};

const supportTrace: TraceDetail = {
  summary: traces[0],
  project: "support-bot",
  started: "Oct 2, 14:21:07",
  spans: [
    {
      id: "span_01",
      kind: "agent",
      name: "agent.run",
      meta: "support-agent",
      target: "support-agent",
      depth: 0,
      start: 0,
      duration: 2.84,
      status: fallback,
      attributes: [
        { key: "Agent", value: "support-agent" },
        { key: "Tokens", value: "3,412 total" },
        { key: "Cost", value: "$0.0142" },
        { key: "Latency", value: "2.84s" },
        { key: "Child spans", value: "5" },
        { key: "SDK", value: "crawlai-py 1.8.2" },
      ],
      messages: [userMessage, answerMessage],
    },
    {
      id: "span_02",
      kind: "prompt",
      name: "prompt.get",
      meta: "support-agent v12",
      target: "support-agent v12",
      depth: 1,
      start: 0,
      duration: 0.04,
      status: ok,
      attributes: [
        { key: "Prompt", value: "support-agent" },
        { key: "Version", value: "v12", accent: true },
        { key: "Label", value: "production" },
        { key: "Variables", value: "order_id" },
        { key: "Latency", value: "0.04s" },
        { key: "Cache", value: "hit" },
      ],
      messages: [systemMessage],
    },
    {
      id: "span_03",
      kind: "llm",
      name: "llm.chat",
      meta: "gpt-5",
      target: "gpt-5",
      depth: 1,
      start: 0.06,
      duration: 0.98,
      status: ok,
      attributes: [
        { key: "Provider", value: "OpenAI" },
        { key: "Tokens", value: "1,012 in · 84 out" },
        { key: "Cost", value: "$0.0081" },
        { key: "Latency", value: "0.98s · TTFT 0.42s" },
        { key: "Gateway route", value: "gpt-5", accent: true },
        { key: "Fallback reason", value: "none" },
        { key: "Cache", value: "miss" },
      ],
      messages: [
        systemMessage,
        userMessage,
        { role: "assistant", text: "Calling web_search with query \"order #4821 status\"." },
      ],
    },
    {
      id: "span_04",
      kind: "tool",
      name: "tool.call",
      meta: "web_search",
      target: "web_search",
      depth: 1,
      start: 1.05,
      duration: 0.64,
      status: ok,
      attributes: [
        { key: "Tool", value: "web_search" },
        { key: "Query", value: "order #4821 status" },
        { key: "Results", value: "3" },
        { key: "Latency", value: "0.64s" },
        { key: "Cache", value: "miss" },
      ],
      messages: [toolMessage],
    },
    {
      id: "span_05",
      kind: "llm",
      name: "llm.chat",
      meta: "gpt-5 429",
      target: "gpt-5",
      depth: 1,
      start: 1.73,
      duration: 0.14,
      error: true,
      status: rateLimit,
      attributes: [
        { key: "Provider", value: "OpenAI" },
        { key: "Tokens", value: "0 in · 0 out" },
        { key: "Cost", value: "$0.0000" },
        { key: "Latency", value: "0.14s" },
        { key: "Gateway route", value: "gpt-5", accent: true },
        { key: "Error", value: "429 Too Many Requests" },
        { key: "Retry", value: "fallback to claude-sonnet-5" },
      ],
      messages: [systemMessage, userMessage, toolMessage],
    },
    {
      id: "span_06",
      kind: "llm",
      name: "llm.chat",
      meta: "claude-sonnet-5",
      target: "claude-sonnet-5",
      depth: 1,
      start: 1.9,
      duration: 0.92,
      status: ok,
      attributes: [
        { key: "Provider", value: "Anthropic" },
        { key: "Tokens", value: "1,904 in · 412 out" },
        { key: "Cost", value: "$0.0061" },
        { key: "Latency", value: "0.92s · TTFT 0.31s" },
        { key: "Gateway route", value: "gpt-5 → claude-sonnet-5", accent: true },
        { key: "Fallback reason", value: "429 rate limit from OpenAI" },
        { key: "Cache", value: "miss" },
      ],
      messages: [systemMessage, userMessage, toolMessage, answerMessage],
    },
  ],
};

function providerOf(model: string) {
  if (model.startsWith("claude")) return "Anthropic";
  if (model.startsWith("gemini")) return "Google";
  return "OpenAI";
}

function buildTrace(summary: TraceSummary): TraceDetail {
  const promptTime = 0.03;
  const step = (summary.latency - promptTime) / summary.models.length;
  const failed = summary.status.variant === "error";
  const task: SpanMessage = { role: "user", text: `Run ${summary.name} for ${summary.user}.` };

  const llmSpans: Span[] = summary.models.map((model, index) => {
    const share = 1 / summary.models.length;
    const tokens = Math.round(summary.tokens * share);
    const duration = step * 0.95;
    const error = failed && index === summary.models.length - 1;

    return {
      id: `span_${index + 3}`,
      kind: "llm",
      name: "llm.chat",
      meta: error ? `${model} 429` : model,
      target: model,
      depth: 1,
      start: promptTime + step * index,
      duration,
      error,
      status: error ? rateLimit : ok,
      attributes: [
        { key: "Provider", value: providerOf(model) },
        { key: "Tokens", value: `${formatTokens(Math.round(tokens * 0.8))} in · ${formatTokens(Math.round(tokens * 0.2))} out` },
        { key: "Cost", value: formatCost(summary.cost * share) },
        { key: "Latency", value: formatSeconds(duration) },
        { key: "Gateway route", value: model, accent: true },
        { key: "Fallback reason", value: "none" },
        { key: "Cache", value: "miss" },
      ],
      messages: error
        ? [task]
        : [task, { role: "assistant", text: `Completed ${summary.name} step ${index + 1} with ${model}.` }],
    };
  });

  return {
    summary,
    project: "support-bot",
    started: summary.time,
    spans: [
      {
        id: "span_1",
        kind: "agent",
        name: "agent.run",
        meta: summary.name,
        target: summary.name,
        depth: 0,
        start: 0,
        duration: summary.latency,
        status: summary.status,
        attributes: [
          { key: "Agent", value: summary.name },
          { key: "Tokens", value: `${formatTokens(summary.tokens)} total` },
          { key: "Cost", value: formatCost(summary.cost) },
          { key: "Latency", value: formatSeconds(summary.latency) },
          { key: "User", value: summary.user },
        ],
        messages: [task],
      },
      {
        id: "span_2",
        kind: "prompt",
        name: "prompt.get",
        meta: `${summary.name} v3`,
        target: `${summary.name} v3`,
        depth: 1,
        start: 0,
        duration: promptTime,
        status: ok,
        attributes: [
          { key: "Prompt", value: summary.name },
          { key: "Version", value: "v3", accent: true },
          { key: "Label", value: "production" },
          { key: "Cache", value: "hit" },
        ],
        messages: [{ role: "system", text: `You are ${summary.name}. Be accurate and concise.` }],
      },
      ...llmSpans,
    ],
  };
}

export async function getTraces(): Promise<TraceSummary[]> {
  return traces;
}

export async function getTrace(id: string): Promise<TraceDetail | null> {
  if (id === supportTrace.summary.id) return supportTrace;
  const summary = traces.find((trace) => trace.id === id);
  return summary ? buildTrace(summary) : null;
}
