# CrawlAi Dashboard

The dashboard for [CrawlAi](https://crawl-ai.vercel.app), a free AI gateway and monitoring tool for chatbots and AI agents. This is where developers see their traces, manage prompts, configure the gateway and create project keys.

The landing page lives in a separate repo: [NarihitoM/CrawlAi](https://github.com/NarihitoM/CrawlAi).

## Screens

| Route | Screen |
|-------|--------|
| `/` | Overview: requests, model spend, latency, error rate, requests by provider, top models by cost, recent traces |
| `/traces` | Traces list with search and filters |
| `/traces/[traceId]` | Trace detail with the span waterfall and the selected span's attributes and messages |
| `/prompts` | Prompt editor with Easy setup and Developer modes, and version history |
| `/gateway` | Base URL, providers, routing rules and policies |
| `/projects` | Connect steps, project keys, create and revoke keys |

All data is mock data for now. Each feature loads it from its own `api/` folder, so it can be swapped for real API calls later.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 with light and dark themes
- Geist and Geist Mono fonts
- Simple Icons for provider logos

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start the development server on port 3001 |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build on port 3001 |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/                      # Thin route wrappers
│   └── (dashboard)/          # Routes that share the sidebar layout
├── features/                 # One folder per screen
│   ├── overview/
│   ├── traces/
│   ├── prompts/
│   ├── gateway/
│   └── projects/
└── shared/
    ├── components/
    │   ├── layout/           # Sidebar, top bar, page shell
    │   └── ui/               # Button, badge, card, icons, theme toggle
    └── lib/                  # Site config, nav, brand marks
```

Each feature has `components/`, `api/` (mock data) and `types/`.

## License

[MIT](LICENSE)
