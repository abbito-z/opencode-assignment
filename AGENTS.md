# AGENTS.md – Project Constraints

## Overview
One-page hobby website about origami for kids. All work stays inside this project.

## Constraints
- **Files only:** `index.html`, `style.css`, `script.js`, `AGENTS.md`, `README.md`, `.gitignore`
- **No external dependencies:** No CDN links, no npm install, no frameworks.
- **No server required:** Serve purely static files on `localhost` (e.g., `python -m http.server` or VS Code Live Server).
- **Languages:** Semantic HTML, vanilla CSS (custom properties, media queries), vanilla JS.
- **Responsive:** Works at narrow (mobile) and wide (desktop) browser widths.
- **Keyboard accessible:** Full keyboard navigation, `focus-visible` outlines, skip link, aria attributes.
- **Theme:** Light mode with lilac accent; a theme switcher toggles a `.lilac` class on `<body>`.
- **Persistence:** User's theme choice is saved in `localStorage` and survives page reload.
- **Git:** `.gitignore` must include `.env`, `node_modules/`, and `.DS_Store`.

## Directory Structure
```
origami-kids/
├─ index.html
├─ style.css
├─ script.js
├─ AGENTS.md
├─ README.md
├─ .gitignore
└─ (other project files as needed)
```

## How the Interaction Works
1. In the header, a button labeled **"Lilac mode"** (or **"Light mode"** when active) toggles the theme.
2. Clicking or pressing `Enter/Space` on the button adds/removes a `.lilac` class from `<html>`.
3. The `.lilac` class changes the accent color variable from `--accent: #b080d0` to `--accent: #8b5a9b` and lightens the background tint.
4. The button’s `aria-pressed` attribute is updated to reflect the state, and screen readers announce the change.
5. The preference is saved to `localStorage` so the chosen theme persists across visits.

## Local Development
1. Ensure you have a static file server or use the built-in VS Code Live Server.
2. Navigate to the project folder.
3. Run one of the following:
   - **Python 3:** `python -m http.server` (then open http://localhost:8000)
   - **Python 2:** `python -m SimpleHTTPServer 8000`
   - **VS Code:** Use the Live Server extension – click "Go Live" in the status bar.
4. Open http://localhost:8000 in your browser.
5. Verify:
   - Page scales from narrow to wide width.
   - Theme button toggles lilac/light mode.
   - Keyboard focus is visible (use `Tab` key).
   - Theme preference persists after reload.