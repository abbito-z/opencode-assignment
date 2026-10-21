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
- **Theme:** Lilac and pink themes; a theme switcher toggles a `.pink` class on `<html>` (default is lilac from `:root`).
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
1. In the header, a button labeled **"Pink mode"** (or **"Lilac mode"** when active) toggles the theme.
2. Clicking or pressing `Enter/Space` on the button adds/removes a `.pink` class from `<html>`.
3. The `.pink` class changes the accent color variable from `--accent: #b080d0` to `--accent: #e86e71` and lightens the background tint to a pink palette.
4. The button’s `aria-pressed` attribute is updated to reflect the state, and screen readers announce the change.
5. The preference is saved to `localStorage` so the chosen theme persists across visits.

## Local Development
1. Ensure you have a static file server or use the built-in VS Code Live Server.
2. Navigate to the project folder.
3. Run one of the following:
   - **Python 3:** `python -m http.server` (then open http://localhost:8000)
   - **VS Code:** Use the Live Server extension – click "Go Live" in the status bar.
4. Open http://localhost:8000 in your browser.
5. Verify:
   - Page scales from narrow to wide width.
   - Theme button toggles between "Pink mode" and "Lilac mode".
   - Color scheme changes when the button is clicked (accent from lilac `#b080d0` to pink `#e86e71`, background from `#faf0f7` to `#fdf2f8`).
   - Keyboard focus is visible (use `Tab` key).
   - Theme preference persists after reload.