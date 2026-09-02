# SkillForge Agent Instructions

## Source of truth

Read `docs/requirements.md` before planning or implementing product work. It is the product source of truth. Update it before or together with any change to product scope, behavior, roadmap, or architectural decision; never leave a product decision only in chat.

`AGENTS.md` is the canonical agent-instruction file. Do not edit `CLAUDE.md` or `.github/copilot-instructions.md` directly. After changing this file, run:

```sh
sh scripts/sync-agent-instructions.sh
sh scripts/check-agent-instructions.sh
```

## Development approach

- Build SkillForge incrementally, one course module at a time. Do not implement future modules prematurely.
- At every module, explain what was added, why it is needed, and how it connects to the existing system.
- Keep the application oriented around an AI agent: contextual system instructions, memory, streaming, and later autonomous tools. Do not reduce it to a stateless text form that calls a model.
- Preserve the stated platform direction: Next.js full-stack with TypeScript and App Router; model calls run through server-side routes using AI SDK.
- Keep LLM providers interchangeable. Do not couple product logic to OpenAI, Anthropic, or a particular model.
- Model all user-owned data with strict per-user isolation, including profiles, conversations, memories, learning plans, and provider metadata.

## Security and personal data

- Never expose API keys, tokens, or other secrets to the browser, repository, logs, examples, or documentation. Use server-side environment variables by name only.
- Collect only the profile data required for personalization. Preserve the user's ability to view and edit it.
- Do not use personal profile data for training the SkillForge product.

## External integrations

Whenever an external integration is introduced — including an LLM provider, database, authentication, deployment, or monitoring — create or update `docs/<integration>/README.md` in the same change and add its row to the integration index in `docs/README.md`.

That README must follow `docs/_template/README.md` and describe the manual work the user must perform: where to create an account, where to create credentials, the environment-variable names, required dashboard configuration, relevant official links, and current cost/pricing guidance. Never place real credentials in these files.

Examples include `docs/openai/README.md`, `docs/anthropic/README.md`, and `docs/database/README.md` when those integrations are actually added.

## Verification

- Run focused checks appropriate to the module you change.
- For agent-instruction changes, run the synchronization and drift-check scripts.
- Keep `README.md` concise: project overview, run instructions, and links to the canonical documentation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
