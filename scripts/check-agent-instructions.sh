#!/usr/bin/env sh

set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
source_file="$repo_root/AGENTS.md"
expected_file=$(mktemp)

cleanup() {
  rm -f "$expected_file"
}
trap cleanup EXIT HUP INT TERM

if [ ! -f "$source_file" ]; then
  printf '%s\n' "Missing canonical instructions: $source_file" >&2
  exit 1
fi

{
  printf '%s\n\n' '<!-- GENERATED FILE: edit AGENTS.md, then run sh scripts/sync-agent-instructions.sh. -->'
  cat "$source_file"
} > "$expected_file"

has_drift=0
for target in "$repo_root/CLAUDE.md" "$repo_root/.github/copilot-instructions.md"; do
  if ! cmp -s "$expected_file" "$target"; then
    printf '%s\n' "Out of sync: ${target#"$repo_root/"}" >&2
    has_drift=1
  fi
done

if [ "$has_drift" -ne 0 ]; then
  printf '%s\n' 'Run sh scripts/sync-agent-instructions.sh to regenerate derived instruction files.' >&2
  exit 1
fi

printf '%s\n' 'Agent instruction files are synchronized.'
