---
sidebar_position: 9
---

# Lab 12 - IaC: Infrastructure as Code

## Intro: Terraform project structure (dev + prod)

```mermaid
flowchart TD
  root["terraform-lab-12/"] --> root_files["Root files<br/>main.tf<br/>variables.tf<br/>outputs.tf<br/>versions.tf<br/>terraform.tfvars<br/>.terraform.lock.hcl<br/>.gitignore"]
  root --> envs["environments/"]
  root --> mods["modules/"]
  root --> state["state/<br/>terraform.tfstate<br/>(local only)"]

  subgraph Environments
    envs --> dev["dev/<br/>dev.tfvars<br/>backend.hcl"]
    envs --> prod["prod/<br/>prod.tfvars<br/>backend.hcl"]
  end

  subgraph Modules
    mods --> net["network/<br/>main.tf<br/>variables.tf<br/>outputs.tf"]
    mods --> app["compute/<br/>main.tf<br/>variables.tf<br/>outputs.tf"]
  end
```

The structure above is a common pattern for real projects: shared module code in `modules/`, environment-specific values in `environments/dev` and `environments/prod`, and root-level configuration plus version lock files.
