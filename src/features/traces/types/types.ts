import type { BadgeVariant } from "@/shared/components/ui/Badge";

export type TraceStatus = {
  label: string;
  variant: BadgeVariant;
};

export type TraceSummary = {
  id: string;
  name: string;
  user: string;
  models: string[];
  spans: number;
  tokens: number;
  cost: number;
  latency: number;
  status: TraceStatus;
  time: string;
};

export type SpanKind = "agent" | "prompt" | "llm" | "tool";

export type SpanAttribute = {
  key: string;
  value: string;
  accent?: boolean;
};

export type MessageRole = "system" | "user" | "tool" | "assistant";

export type SpanMessage = {
  role: MessageRole;
  name?: string;
  text: string;
};

export type Span = {
  id: string;
  kind: SpanKind;
  name: string;
  meta: string;
  target: string;
  depth: number;
  start: number;
  duration: number;
  error?: boolean;
  status: TraceStatus;
  attributes: SpanAttribute[];
  messages: SpanMessage[];
};

export type TraceDetail = {
  summary: TraceSummary;
  project: string;
  started: string;
  spans: Span[];
};
