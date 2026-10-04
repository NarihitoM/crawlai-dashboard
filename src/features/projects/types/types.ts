export type KeyType = "live" | "test";

export type Project = {
  id: string;
  name: string;
};

export type ProjectKey = {
  id: string;
  name: string;
  owner: string;
  maskedKey: string;
  createdAt: string;
  lastUsed: string | null;
  traces: number;
};

export type CreatedKey = {
  name: string;
  type: KeyType;
  secret: string;
  createdAt: string;
};
