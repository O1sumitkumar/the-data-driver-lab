# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.1.0] — 2026-10-12

### Added

- Race report, the default view: four key figures computed from the API (winner, fastest lap, biggest
  grid-to-finish gain with the same rule as the grounded answer, neutralisations) and a grid of cards.
- Tyre strategy by compound and positions lap by lap, with honest figures on partial tyre and position data.
- Documented finish adjustments shown in the race report.
- "What stands out": deterministic sentences from the rows on screen, or an explicit refusal.
- Charts: shared cursor across charts on the same axis (hover and keyboard) with a values tooltip,
  non-overlapping end labels, clickable legend.
- Read-only MCP server: hosted at `/api/mcp` (Streamable HTTP, stateless) and as a local stdio server
  (`npm run mcp:stdio`), with 19 F1 tools plus `search` and `fetch`.
- Optional "AI — your own key" mode in Ask the data: Anthropic, OpenAI, OpenRouter, Groq, Ollama or any
  OpenAI-compatible endpoint, called directly from the browser (Vercel AI SDK). The grounded endpoint stays
  the default. Key in `sessionStorage` by default, opt-in "Remember on this device", "Forget key".
- Read-only F1 tool catalogue (`src/lib/f1-tools/`) with JSON Schema inputs, bounded outputs, source and
  licence on every result.
- Evaluation bench (`scripts/ai-eval/`): about fifty frozen questions, mock, deterministic and provider modes.
- `NEXT_PUBLIC_TDD_AI_CONNECT_SRC` to allow extra AI endpoints in the CSP.
- Optional `TDD_API_SERVER_KEY`, sent upstream by the `/api/f1` proxy and the MCP endpoint.

### Changed

- The Lab is a workspace: one view at a time (kept in the URL, deep links, Back and Forward), a side
  navigation grouped by Season, Race, Compare and Ask, a compact bar (race selector, driver chips, session
  status "Next: … · in …" or "Live", `⌘K`, `</> API`, "Share view") and an inspector panel.
- CSV, JSON and "Copy API request" moved to a "⋯" menu per view; `</> API` reveals the requests on demand.
- Interface text is at least 12 px; monospace is kept for numbers and code; sources fit on one line per view.
- Empty states are one line with the API's reason.
- Phones: one selector, scrolling view pills, the first chart in the first screen, a bottom action bar.
- Tailwind CSS 4, React 19.2 and current CI actions.
- README rewritten around a short demo, the live Lab and the MCP connector; new screenshots.

### Fixed

- Line charts draw their horizontal axis title again.
- Lap times are always formatted from `time_ms` with one tested formatter (the published `time_formatted`
  text is no longer displayed or exported); axis times carry rounding into the minute.
- Pit summary and recovery figures; a climb is called whole-race only when every classified driver is covered.
- The first report chart stays above the mobile action bar.

## [1.0.0] — 2026-10-07

First public release of the Data Lab as a standalone application.

### Added

- Twelve linked views: field, championship progression, constructors, lap-by-lap pace, fastest laps, pit stops
  and stints, race timeline (safety cars, incidents, weather), driver head-to-head, practice and qualifying
  sessions, season comparison, grounded questions, data explorer.
- CSV and JSON export and "copy API request" on every view; shareable URL state; `⌘K` command palette.
- Server rendering of the default race (readable without JavaScript) with 5-minute incremental regeneration.
- Same-origin `/api/f1` proxy with a path allow-list.
- Configurable upstream (`TDD_API_BASE`, `NEXT_PUBLIC_TDD_API_BASE`).
- Dockerfile (Node 22 Alpine, non-root, standalone output), `docker-compose.yml`, Deploy with Vercel button.
- Unit tests (`node:test`), Playwright end-to-end tests against a mock API, CI workflow.
- Documentation: README, installation guide, API notes, data licences, contribution guide, code of conduct, security policy.

[Unreleased]: https://github.com/thejoyfulist/the-data-driver-lab/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/thejoyfulist/the-data-driver-lab/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/thejoyfulist/the-data-driver-lab/releases/tag/v1.0.0
