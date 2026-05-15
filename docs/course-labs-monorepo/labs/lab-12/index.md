---
sidebar_position: 9
---

# Lab 12 - IaC: Infrastructure as Code

## Intro: Terraform project structure (dev + prod)

```mermaid
flowchart TD
  A[terraform-lab-12/] --> B[main.tf]
  A --> C[variables.tf]
  A --> D[outputs.tf]
  A --> E[versions.tf]
  A --> F[terraform.tfvars]
  A --> G[.terraform.lock.hcl]
  A --> H[.gitignore]
  A --> I[environments/]
  I --> J[dev/]
  I --> K[prod/]
  J --> L[dev.tfvars]
  J --> M[backend.hcl]
  K --> N[prod.tfvars]
  K --> O[backend.hcl]
  A --> P[modules/]
  P --> Q[network/]
  P --> R[compute/]
  Q --> S[main.tf]
  Q --> T[variables.tf]
  Q --> U[outputs.tf]
  R --> V[main.tf]
  R --> W[variables.tf]
  R --> X[outputs.tf]
  A --> Y[state/]
  Y --> Z[terraform.tfstate (local only)]
```

The structure above is a common pattern for real projects: shared module code in `modules/`, environment-specific values in `environments/dev` and `environments/prod`, and root-level configuration plus version lock files.
