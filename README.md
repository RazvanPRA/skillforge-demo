# SkillForge

SkillForge este un copilot personal de skills si cariera. Va folosi profilul, obiectivele si progresul fiecarui utilizator pentru a oferi recomandari de invatare relevante.

Aplicatia nu este initializata inca. Acest pas stabileste documentatia si conventiile care ghideaza implementarea modulara.

## Documentatie

- Cerintele de produs si roadmap-ul: [docs/requirements.md](docs/requirements.md)
- Instructiunile canonice pentru agenti: [AGENTS.md](AGENTS.md)

## Instructiuni pentru agenti

`AGENTS.md` este sursa canonica. Dupa orice modificare, rulati dintr-un shell POSIX:

```sh
sh scripts/sync-agent-instructions.sh
sh scripts/check-agent-instructions.sh
```

Prima comanda regenereaza `CLAUDE.md` si `.github/copilot-instructions.md`. A doua confirma ca fisierele generate nu au ramas in urma.
