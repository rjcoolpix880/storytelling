# Storytelling Digital Garden 📚

Hosted at: **[rjaia.com/storytelling/](https://rjaia.com/storytelling/)**

---

## ⚡ The 3 Commands You Need

### 1. Update Everything in One Move (Obsidian → Build)
After making changes in Obsidian, run:
```bash
npm run update
```
*What it does: Pulls latest notes from Obsidian/OneDrive, builds the static site (including all graph customizations), and prepares all files. After this finishes, simply open GitHub Desktop, commit, and push!*

### 2. Test & Preview Locally
```bash
npm run dev
```
*What it does: Syncs your latest Obsidian notes and launches a local preview server at `http://localhost:8080/storytelling/`.*

### 3. Test Quickly (Instant Local Preview)
```bash
npm run dev:fast
```
*What it does: Launches the local server instantly using your existing files without waiting for Obsidian to sync.*

---

## 💡 How Updates Work
You **do not** need a separate command for the graph. `npm run update` handles your notes, site build, and graph custom logic automatically.
