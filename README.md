# 📖 The DevOps Learning Portal (docs-hub)

This is the central "Knowledge Hub" for Oriel's DevOps Engineering Lab. It functions as a **Documentation-as-Code** platform, providing a single source of truth for labs, architectural decisions, and infrastructure manifests.

---

## 🏗️ Architecture: Distributed Docs

This hub is designed to centralize documentation from across the entire GitHub Organization.

- **Central Hub:** This repository (`docs-hub`) hosts the Docusaurus engine.
- **Satellite Docs:** Each technical repository (e.g., `labs-monorepo`, `gitops-manifests`) contains a `/docs` folder that syncs here.

---

## 🔗 Live Portal

The rendered version of this documentation is automatically deployed via GitHub Actions:
👉 **[https://DevOps-Course-2026.github.io/docs-hub/](https://DevOps-Course-2026.github.io/docs-hub/)**

---

## 🚀 Local Development

To run this portal locally for previewing changes:

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Start the Dev Server:**

   ```bash
   npm start
   ```

   The site will live-reload at <http://localhost:3000>.

3. **Build for Production:**

   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

| Component | Technology |
| --- | --- |
| Framework | [Docusaurus (React)](https://docusaurus.io/) |
| Styling | Infima (Standard Docusaurus) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |
