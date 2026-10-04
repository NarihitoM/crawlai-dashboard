import type { Gateway } from "@/features/gateway/types/types";

export async function getGateway(): Promise<Gateway> {
  return {
    baseUrl: "https://gateway.crawlai.dev/v1",
    stats: [
      { label: "Requests today", value: "6,912" },
      { label: "Cache hit rate", value: "18.4%" },
      { label: "Fallbacks", value: "41" },
      { label: "p50 overhead", value: "12ms" },
    ],
    providers: [
      {
        id: "openai",
        name: "OpenAI",
        connected: true,
        models: ["gpt-5", "gpt-5-mini"],
        maskedKey: "sk-...9fA2",
        p50: "0.81s",
      },
      {
        id: "anthropic",
        name: "Anthropic",
        connected: true,
        models: ["claude-sonnet-5", "claude-haiku-4-5"],
        maskedKey: "sk-ant-...k21Q",
        p50: "0.94s",
      },
      {
        id: "google",
        name: "Google",
        connected: true,
        models: ["gemini-2.5-pro"],
        maskedKey: "AIza...7Tq0",
        p50: "1.12s",
      },
      { id: "mistral", name: "Mistral", connected: false },
      { id: "groq", name: "Groq", connected: false },
    ],
    routing: {
      project: "support-bot",
      chain: [
        { role: "Primary", model: "gpt-5" },
        { role: "Fallback", model: "claude-sonnet-5" },
        { role: "Fallback", model: "gemini-2.5-pro" },
      ],
      settings: [
        { label: "Fall back on", value: "429, 5xx, timeout" },
        { label: "Retries", value: "2, exponential backoff" },
        { label: "Timeout", value: "30s per attempt" },
      ],
    },
    policies: [
      { name: "Response cache", description: "Reuse identical calls for 1 hour", enabled: true },
      { name: "Rate limit", description: "600 requests / min per user", enabled: true },
      {
        name: "PII redaction",
        description: "Mask emails and phone numbers before they reach the provider",
        enabled: false,
      },
    ],
  };
}
