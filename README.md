# SkillForge

SkillForge este un copilot personal de skills si cariera. Acest prim modul pregateste aplicatia Next.js pentru viitorul agent AI, fara a integra inca un provider LLM.

## Rulare locala

```sh
npm install
npm run dev
```

Verificari utile:

```sh
npm run format
npm run format:check
npm run build
```

Endpointul demonstrativ este disponibil la [http://localhost:3000/api/hello](http://localhost:3000/api/hello) si citeste `SKILLFORGE_API_STATUS` din `.env.local`. Copiati `.env.example` daca aveti nevoie de un punct de pornire; nu commiteti `.env.local`.

## Vite + React si Next.js

| Aspect             | Vite + React                                                      | Next.js                                                          |
| ------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| Routing            | Se adauga de regula cu o biblioteca separata                      | Este bazat pe fisiere in `src/app`                               |
| Unde ruleaza codul | In principal in browser                                           | Pe server implicit; client numai cu `"use client"`               |
| Variabile de mediu | `VITE_*` ajung in browser                                         | Doar `NEXT_PUBLIC_*` ajung in browser; secretele raman pe server |
| Deploy             | Se publica un bundle static sau se configureaza separat un server | Poate rula ca aplicatie full-stack pe un host compatibil Next.js |

## Documentatie si conventii

- [Cerintele produsului](docs/requirements.md) sunt sursa de adevar.
- [Indexul documentatiei](docs/README.md) si [sablonul de integrare](docs/_template/README.md) se actualizeaza la fiecare integrare externa.
- [AGENTS.md](AGENTS.md) este sursa canonica pentru instructiunile agentilor.

```sh
sh scripts/sync-agent-instructions.sh
sh scripts/check-agent-instructions.sh
```
