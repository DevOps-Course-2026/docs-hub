---
sidebar_label: Helm Gitops Demo
---

# helm-gitops-demo

> Helm chart monorepo for the DevOps 2026 course. Charts are versioned independently and published to GitHub Pages as a single Helm registry.

## Overview

This repository holds all Helm charts used across the course labs. Each chart lives under `charts/` and is versioned and released independently using [`chart-releaser-action`](https://github.com/helm/chart-releaser-action). Packaged charts and the `index.yaml` are published to GitHub Pages, making this repo a standard Helm registry.

```text
helm-gitops-demo/
  charts/
    <chart-name>/
      Chart.yaml
      values.yaml
      templates/
  docs/           ← portal documentation
  .github/
    workflows/
      release.yml
      sync-docs.yml
```

## Available Charts

| Chart | Description |
| --- | --- |
| _(charts will be listed here as they are added)_ | |

## Using the Helm Registry

```bash
helm repo add course https://DevOps-Course-2026.github.io/helm-gitops-demo
helm repo update
helm search repo course
```

## Documentation

Full documentation is available on the
[DevOps Course 2026 Portal](https://DevOps-Course-2026.github.io/docs-hub/).

Docs in `docs/` sync automatically to the portal on every push to `main`.
