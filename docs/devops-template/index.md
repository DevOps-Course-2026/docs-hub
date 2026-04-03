---
sidebar_label: Devops Template
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
2. Add the two repository secrets described below
3. Edit this `README.md` with your repo's actual content
4. Add portal docs under `docs/`

### Repository Secrets

The docs sync workflow authenticates to `docs-hub` using a **GitHub App** — not a personal access token. The App generates a short-lived token at runtime, scoped only to the `docs-hub` repository, so no long-lived credential is stored anywhere.

You need two secrets, both set at: **Repository → Settings → Secrets and variables → Actions**

| Secret | What it is |
| --- | --- |
| `DOCS_HUB_SYNC_APP_ID` | The numeric App ID shown on the GitHub App's settings page |
| `DOCS_HUB_SYNC_APP_PRIVATE_KEY` | The PEM private key downloaded when the App was created (begins with `-----BEGIN RSA PRIVATE KEY-----`) |

**Where to get these values:**

- The GitHub App lives in the organization. Go to **Organization → Settings → GitHub Apps** and open the `docs-hub-sync` app (or whatever it is named).
- The **App ID** is shown at the top of the app's settings page.
- The **private key** was downloaded as a `.pem` file when the app was first created. If you no longer have it, generate a new one from the same page — the old key is automatically invalidated.
- If the app does not exist yet, create it: **Organization → Settings → Developer settings → GitHub Apps → New GitHub App**. Grant it **Contents: Read & Write** on the `docs-hub` repository only, then install it on the organization.

## Documentation

Full documentation is available on the
[DevOps Course 2026 Portal](https://DevOps-Course-2026.github.io/docs-hub/).

Docs in `docs/` sync automatically to the portal on every push to `main`.
Root `README.md` becomes the portal landing page. Root `CONTRIBUTING.md`
and other `.md` files sync as additional pages.
