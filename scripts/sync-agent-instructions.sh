#!/usr/bin/env sh

set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
source_file="$repo_root/AGENTS.md"

if [ ! -f "$source_file" ]; then
  printf '%s\n' "Missing canonical instructions: $source_file" >&2
  exit 1
fi

generated_notice='<!-- GENERATED FILE: edit AGENTS.md, then run sh scripts/sync-agent-instructions.sh. -->'

for target in "$repo_root/CLAUDE.md" "$repo_root/.github/copilot-instructions.md"; do
  mkdir -p "$(dirname -- "$target")"
  {
    printf '%s\n\n' "$generated_notice"
    cat "$source_file"
  } > "$target"
done

printf '%s\n' 'Synchronized CLAUDE.md and .github/copilot-instructions.md from AGENTS.md.'
