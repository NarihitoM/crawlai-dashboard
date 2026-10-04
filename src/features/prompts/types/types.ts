export type SetupMode = "easy" | "developer";

export type VersionState = "Draft" | "Production" | "Archived";

export type PromptVersion = {
  version: string;
  state: VersionState;
  message: string;
  time: string;
};

export type Prompt = {
  name: string;
  updated: string;
  production: string;
  draft: string;
  model: string;
  fallback: string;
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
  codeSystem: string;
  history: PromptVersion[];
};
