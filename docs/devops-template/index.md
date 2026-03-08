---
---

# DevOps Template

> Golden-image template for all new repositories in the DevOps Course 2026 organization.

## Overview

This repository is a GitHub template. Creating a new repo from it gives you:

- Markdown linting via a reusable GitHub Actions workflow
- Automatic docs sync to the [DevOps Course 2026 Portal](https://DevOps-Course-2026.github.io/docs-hub/)
- Consistent project structure and configuration

## Getting Started

1. Click **Use this template** on GitHub to create a new repository
2. Add `DOCS_HUB_SYNC_APP_ID` and `DOCS_HUB_SYNC_APP_PRIVATE_KEY` secrets
3. Edit this `README.md` with your repo's actual content
4. Add portal docs under `docs/`

## Documentation

Full documentation is available on the
[DevOps Course 2026 Portal](https://DevOps-Course-2026.github.io/docs-hub/).

Docs in `docs/` sync automatically to the portal on every push to `main`.
Root `README.md` becomes the portal landing page. Root `CONTRIBUTING.md`
and other `.md` files sync as additional pages.
