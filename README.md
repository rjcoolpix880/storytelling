# Storytelling Digital Garden 📚

Hosted at: **[rjaia.com/storytelling/](https://rjaia.com/storytelling/)**

---

## ⚡ Quick Start: Updating & Publishing the Site

When you edit or add new notes in your Obsidian vault (`wiki/` or `index.md`), run these commands in this directory:

### Step 1: Sync Notes & Build
```bash
npm run update
```
*(This automatically pulls the latest notes from your OneDrive folder into `content/` and builds the static site).*

### Step 2: Preview Locally (Optional)
```bash
npm run dev
# or: npx quartz build --serve
```
*(Open http://localhost:8080/storytelling/ in your browser to verify).*

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Update storytelling notes"
git push origin main
```
*GitHub Actions will automatically build and publish the site to `rjaia.com/storytelling/`!*

---

## 🛠️ Available npm Commands

| Command | Description |
| :--- | :--- |
| `npm run sync` | Pulls `index.md` and `wiki/` from OneDrive into `content/` |
| `npm run update` | Runs `sync` + `npx quartz build` in one command |
| `npm run dev` | Full dev mode: syncs notes from OneDrive and launches local server |
| `npm run dev:fast` (or `npm run serve`) | Fast dev mode: launches local server using existing `content/` without syncing OneDrive |
| `npm run dev -- --no-sync` | Launches dev server with `--no-sync` flag to skip OneDrive sync |

---

## ⚡ Fast Dev & Build Performance Notes

- **Date Resolution (`quartz.config.yaml`)**: The date priority is set to `[frontmatter, filesystem, git]`. This ensures Quartz reads note modified dates directly from local file metadata rather than querying Git for every file. This prevents slow builds and eliminates terminal warning spam (`isn't yet tracked by git`) when working with newly synced or untracked notes.
- **Speeding up `dev:fast`**: `npm run dev:fast` skips OneDrive sync and reuses existing files in `content/` for rapid local iteration.

---

## 📁 Content Folders Included

- `index.md` (Main landing page)
- `wiki/` (Curated wiki notes & storytelling concepts)

---

## 🚀 Initial GitHub Repository Setup

1. Create a new repository on GitHub named `storytelling`.
2. Link your local directory to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/storytelling.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Go to **Settings** > **Pages**.
   - Under **Source**, select **GitHub Actions**.
