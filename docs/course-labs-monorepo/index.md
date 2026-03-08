---
sidebar_label: Course Labs Monorepo
---

# DevOps Course 2026 — Labs Monorepo

This repository is the single source of truth for all hands-on lab exercises in the DevOps Course 2026.

Each lab covers a real-world DevOps practice — from source control and CI/CD pipelines to containerization, infrastructure as code, monitoring, and cloud deployments. Labs are designed to be self-contained and progressive, building on concepts introduced in earlier sessions.

Each lab lives in its own folder with a `README.md` describing the goal, prerequisites, step-by-step instructions, and expected outcome. Lab docs are automatically synced to the course documentation site on every push.

---

## Labs

| Lab | Topic |
| --- | --- |
| [Lab 8](./labs/lab-8/) | ArgoCD & GitOps |

> Labs will be added as the course progresses.

---

## Structure

```text
course-labs-monorepo/
  README.md            ← you are here
  docs/
    labs/
      lab-N/
        index.md       ← full lab content (syncs to portal)
        assets/        ← screenshots and diagrams
  lab-N/
    README.md          ← stub: title + portal link
```

## Docs

Full course documentation is available on the
[DevOps Course 2026 Portal](https://DevOps-Course-2026.github.io/docs-hub/).

Lab docs from this repo sync automatically to the portal on every push to `main`.
