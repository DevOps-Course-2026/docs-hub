# Copilot Instructions — docs-hub

## Markdown Authoring

Every time you write or edit a `.md` file in this repo, follow the rules below.
Full reference: [CONTRIBUTING.md](https://github.com/DevOps-Course-2026/.github/blob/main/CONTRIBUTING.md)

---

## Required Structure for Platform Docs

```markdown
---
sidebar_position: N
---

# 🔤 Title With Emoji   ← single H1, emoji prefix allowed in portal docs
```

---

## Writing Style

- Second person, present tense: "Run the command", "This creates..."
- After every non-trivial command, explain what it does
- Show expected output in a `text` code block under `#### Expected Output`
- Use Mermaid for all diagrams (`sequenceDiagram` for flows, `graph TD` for architecture)
- Store screenshots in `assets/` and reference with `![alt text](./assets/filename.png)`
- Production differences go in a `> **Production Note:**` blockquote

---

## Lint Rules — Enforce on Every File

| Rule | What to check |
| --- | --- |
| MD022 | Blank line before **and** after every heading |
| MD031 | Blank line before **and** after every fenced code block |
| MD032 | Blank line before **and** after every list block |
| MD040 | Every fenced code block must declare a language tag — no bare fences |
| MD041 | First line must be `# H1` — frontmatter does not count, H1 must follow it |
| MD047 | File must end with a single newline character |
| MD060 | Table separators use aligned style: `---` with a space on each side |

### Common Mistakes

- Sentence ending with `:` followed immediately by a list — triggers **MD032**
- Prose line immediately followed by a code fence — triggers **MD031**
- Opening code fence with no language — triggers **MD040**
- File not ending with newline — triggers **MD047**
- Table separator `|---|` without spaces — triggers **MD060**

---

## Docusaurus-Specific Syntax

Use admonitions instead of plain blockquotes for callouts:

```markdown
:::note
Neutral info.
:::

:::tip
Recommended practice.
:::

:::caution
Something that may cause issues.
:::

:::danger
Will cause data loss or breakage.
:::
```

Links within the docs tree use relative paths from the file's own location.
See the Links section in CONTRIBUTING.md for examples.

---

## Code Block Language Tags

Always declare one: `bash`, `yaml`, `json`, `text`, `mermaid`, `http`, `markdown`.

---

## After Generating Any Markdown

Run from the repo root:

```bash
markdownlint-cli2 "**/*.md" 2>&1 | grep -E "^\S.*:.*error|^Summary"
```

`node_modules`, `build`, and `dist` are excluded automatically via `.markdownlint-cli2.yaml` at the workspace root.

Zero errors before committing.
