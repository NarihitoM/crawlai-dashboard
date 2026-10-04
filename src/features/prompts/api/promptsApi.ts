import type { Prompt } from "@/features/prompts/types/types";

const prompts: Prompt[] = [
  {
    name: "support-agent",
    updated: "2h ago",
    production: "v12",
    draft: "v13",
    model: "gpt-5",
    fallback: "claude-sonnet-5",
    temperature: 0.3,
    maxTokens: 600,
    systemPrompt:
      "You are the support agent for Acme. Answer in a friendly, calm tone and keep every reply under two sentences.\n\nNever invent order data. If you do not know the order status, look it up with the web search tool before you answer.\n\nIf the customer asks for a refund, explain the 30-day policy and offer to open a ticket.",
    codeSystem: "You are the support agent for Acme. Keep replies short.",
    history: [
      { version: "v13", state: "Draft", message: "Shorter replies, add refund policy", time: "now" },
      { version: "v12", state: "Production", message: "Fallback to claude-sonnet-5", time: "2h ago" },
      { version: "v11", state: "Archived", message: "Look up order status before answering", time: "yesterday" },
      { version: "v10", state: "Archived", message: "Initial support tone", time: "3 days ago" },
    ],
  },
  {
    name: "research-planner",
    updated: "yesterday",
    production: "v7",
    draft: "v8",
    model: "claude-sonnet-5",
    fallback: "gpt-5",
    temperature: 0.7,
    maxTokens: 2000,
    systemPrompt:
      "You plan research for a product team. Break every question into three to five steps and name the source you would check for each one.\n\nPrefer primary sources over summaries. Flag any step that needs data we do not have yet.\n\nEnd with a one-line summary of the plan.",
    codeSystem: "You plan research in short numbered steps.",
    history: [
      { version: "v8", state: "Draft", message: "Ask for missing data up front", time: "now" },
      { version: "v7", state: "Production", message: "Limit plans to five steps", time: "yesterday" },
      { version: "v6", state: "Archived", message: "Prefer primary sources", time: "4 days ago" },
      { version: "v5", state: "Archived", message: "Switch to claude-sonnet-5", time: "1 week ago" },
    ],
  },
  {
    name: "sql-copilot",
    updated: "2 days ago",
    production: "v19",
    draft: "v20",
    model: "gpt-5-mini",
    fallback: "gpt-5",
    temperature: 0,
    maxTokens: 800,
    systemPrompt:
      "You write PostgreSQL queries for the analytics warehouse. Only use tables from the schema you are given.\n\nAlways add a LIMIT unless the user asks for every row. Never write UPDATE, DELETE or DROP statements.\n\nExplain the query in one sentence after the code block.",
    codeSystem: "You write read-only PostgreSQL queries.",
    history: [
      { version: "v20", state: "Draft", message: "Explain queries in one sentence", time: "now" },
      { version: "v19", state: "Production", message: "Block write statements", time: "2 days ago" },
      { version: "v18", state: "Archived", message: "Default LIMIT on every query", time: "5 days ago" },
      { version: "v17", state: "Archived", message: "Temperature to 0", time: "2 weeks ago" },
    ],
  },
  {
    name: "doc-summarizer",
    updated: "5 days ago",
    production: "v4",
    draft: "v5",
    model: "gemini-2.5-pro",
    fallback: "claude-sonnet-5",
    temperature: 0.2,
    maxTokens: 1200,
    systemPrompt:
      "You summarize internal documents for busy readers. Start with a three-bullet TL;DR, then list decisions and open questions.\n\nKeep the original wording for numbers, dates and names. Do not add opinions.",
    codeSystem: "You summarize documents as a short TL;DR.",
    history: [
      { version: "v5", state: "Draft", message: "Keep original wording for numbers", time: "now" },
      { version: "v4", state: "Production", message: "Add open questions section", time: "5 days ago" },
      { version: "v3", state: "Archived", message: "Three-bullet TL;DR", time: "2 weeks ago" },
      { version: "v2", state: "Archived", message: "Switch to gemini-2.5-pro", time: "3 weeks ago" },
    ],
  },
  {
    name: "intent-router",
    updated: "1 week ago",
    production: "v3",
    draft: "v4",
    model: "gpt-5-mini",
    fallback: "claude-haiku-4-5",
    temperature: 0,
    maxTokens: 50,
    systemPrompt:
      "Classify the user message into exactly one intent: billing, support, sales or other.\n\nReply with the intent name only, in lowercase, with no punctuation.",
    codeSystem: "Reply with one intent: billing, support, sales or other.",
    history: [
      { version: "v4", state: "Draft", message: "Add sales intent", time: "now" },
      { version: "v3", state: "Production", message: "Lowercase output only", time: "1 week ago" },
      { version: "v2", state: "Archived", message: "Fallback to claude-haiku-4-5", time: "2 weeks ago" },
      { version: "v1", state: "Archived", message: "Initial intents", time: "1 month ago" },
    ],
  },
  {
    name: "refund-policy",
    updated: "2 weeks ago",
    production: "v9",
    draft: "v10",
    model: "claude-haiku-4-5",
    fallback: "gpt-5-mini",
    temperature: 0.4,
    maxTokens: 400,
    systemPrompt:
      "You answer questions about the Acme refund policy. Orders can be refunded within 30 days if the item is unused.\n\nIf the order is older than 30 days, offer store credit instead. Never promise a refund before the order is checked.",
    codeSystem: "You explain the 30-day refund policy.",
    history: [
      { version: "v10", state: "Draft", message: "Offer store credit after 30 days", time: "now" },
      { version: "v9", state: "Production", message: "Check order before promising refunds", time: "2 weeks ago" },
      { version: "v8", state: "Archived", message: "Unused items only", time: "3 weeks ago" },
      { version: "v7", state: "Archived", message: "Initial refund policy", time: "1 month ago" },
    ],
  },
];

export async function getPrompts(): Promise<Prompt[]> {
  return prompts;
}
