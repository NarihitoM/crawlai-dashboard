import type { KeyType } from "@/features/projects/types/types";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(isoDate: string) {
  return dateFormat.format(new Date(isoDate));
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function generateSecret(type: KeyType) {
  const bytes = crypto.getRandomValues(new Uint8Array(14));
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `cai-${type}-${hex}`;
}

export function maskSecret(secret: string) {
  const prefix = secret.slice(0, secret.indexOf("-", 4) + 1);
  return `${prefix}••••••••${secret.slice(-4)}`;
}
