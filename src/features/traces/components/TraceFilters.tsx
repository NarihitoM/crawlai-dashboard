import { Icon } from "@/shared/components/ui/Icon";

const filters = [
  { key: "Project", value: "support-bot" },
  { key: "Model", value: "All models" },
  { key: "Status", value: "All" },
  { key: "Time", value: "Last 24 hours" },
];

type TraceFiltersProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export function TraceFilters({ query, onQueryChange }: TraceFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <label className="flex h-[38px] min-w-60 flex-1 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-zinc-400 focus-within:border-zinc-400">
        <Icon name="search" className="shrink-0" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by trace id, user id or metadata"
          aria-label="Search traces"
          className="w-full bg-transparent text-[13px] text-zinc-950 outline-none placeholder:text-zinc-400"
        />
      </label>
      {filters.map((filter) => (
        <button
          key={filter.key}
          type="button"
          className="flex h-[38px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-[13px] whitespace-nowrap transition-colors hover:bg-zinc-50"
        >
          <span className="text-zinc-500">{filter.key}</span>
          <span className="font-medium text-zinc-950">{filter.value}</span>
          <Icon name="chevronDown" size={14} className="text-zinc-500" />
        </button>
      ))}
    </div>
  );
}
