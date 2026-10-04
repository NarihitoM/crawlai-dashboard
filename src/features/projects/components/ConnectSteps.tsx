import { CopyButton } from "@/shared/components/ui/CopyButton";

const steps = [
  { title: "Install the SDK", code: "npm i @crawlai/sdk" },
  { title: "Add your project key", code: "CRAWLAI_KEY=cai-live-..." },
  { title: "Call any model", code: "crawl.chat({ messages })" },
];

export function ConnectSteps() {
  return (
    <section className="flex flex-col gap-3 rounded-lg border border-lime-100 bg-lime-50 p-5">
      <h2 className="text-sm font-semibold">Connect your app in three steps</h2>
      <p className="text-[13px] text-zinc-500">
        Install the SDK, add your project key, and call any model with crawl.chat.
      </p>
      <ol className="grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex min-w-0 flex-col gap-2.5 rounded-lg border border-zinc-200 bg-white p-4"
          >
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-lime-500 text-[11px] font-semibold text-ink">
                {index + 1}
              </span>
              <span className="text-[13px] font-semibold">{step.title}</span>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-2">
              <code className="truncate font-mono text-xs">{step.code}</code>
              <CopyButton text={step.code} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
