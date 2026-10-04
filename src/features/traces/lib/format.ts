export function formatSeconds(seconds: number) {
  if (seconds === 0) return "0s";
  return `${seconds >= 10 ? seconds.toFixed(1) : seconds.toFixed(2)}s`;
}

export function formatTokens(tokens: number) {
  return tokens.toLocaleString("en-US");
}

export function formatCost(cost: number) {
  return `$${cost.toFixed(4)}`;
}
