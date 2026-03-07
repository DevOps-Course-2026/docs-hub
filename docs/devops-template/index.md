---
---

# <repo-name>

> Replace this with a one-line description of the repository.

## Overview

Add context here — what problem does this repo solve, what is being implemented.

## Prerequisites

- Prerequisite 1
- Prerequisite 2

## Getting Started

Describe how to run or use what's in this repo.

## Documentation

Full documentation is available on the
[DevOps Course 2026 Portal](https://DevOps-Course-2026.github.io/docs-hub/).

Docs in `docs/` sync automatically to the portal on every push to `main`.

## CI Notes

The first two workflow runs on this repo failed — they triggered before the
template guard (`if: github.repository != 'DevOps-Course-2026/devops-template'`)
was added to the workflows. Repos created from this template are unaffected;
the workflows run normally on them.
