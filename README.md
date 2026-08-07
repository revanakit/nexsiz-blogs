# Nexsiz Documentation Site

Static dark-themed documentation / blog for **Nexsiz – Stateful Network Protocol Fuzzer**.

Ready for GitHub Pages.

## Structure

```
nexsiz-pages/
├── index.html          # About / Landing
├── features.html       # Feature overview
├── usage.html          # Complete CLI & campaign guide
├── nxs.html            # NXS Existence Scripts deep dive
├── architecture.html   # Architecture & module map
├── css/style.css       # Dark minimal professional theme
├── js/main.js          # Mobile nav + copy buttons
└── README.md
```

## Deploy to GitHub Pages

### Option A – `/docs` folder on main branch

1. Copy the contents of this directory into `docs/` at the root of the `nexsiz` repository.
2. Repository Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/docs`.
3. Save. Site will be available at `https://revanakit.github.io/nexsiz/` (or your custom domain).

### Option B – `gh-pages` branch

```bash
# From the root of this site
git init
git add .
git commit -m "Nexsiz documentation site"
git branch -M gh-pages
git remote add origin git@github.com:revanakit/nexsiz.git
git push -u origin gh-pages
```

Then set Pages source to the `gh-pages` branch.

### Option C – Separate repo

Push this directory as a new repository (e.g. `nexsiz-docs`) and enable Pages on its main branch (root).

## Local preview

Any static server:

```bash
cd nexsiz-pages
python3 -m http.server 8080
# open http://localhost:8080
```

## Design notes

- Dark, minimal, professional aesthetic
- Accent colour: matrix-style green (`#00e5a0`)
- Typography: Inter + JetBrains Mono
- Fully responsive
- Zero build step – pure HTML/CSS/JS

---

*precision over noise · depth over breadth · silence until the edge is found*
