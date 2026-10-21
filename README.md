# Origami for Kids

A one-page website about origami, designed for kids and hobby learners. Built with
semantic HTML, readable CSS, and a small script — no dependencies, no CDN.

## Purpose

Introduce the art of paper folding with a short definition, basic fold explanations,
and getting-started tips. Includes a lilac-and-pink theme switcher that persists
across visits.

## Files (no external deps)

| File | Description |
|------|-------------|
| `index.html` | Page structure, heading, intro, two sections, theme button |
| `style.css` | Responsive layout, lilac-and-pink theme variables, focus-visible styles |
| `script.js` | Theme toggler with `localStorage` persistence |
| `.gitignore` | Ignores `.env`, `node_modules/`, `.DS_Store` |
| `AGENTS.md` | Project constraints and interaction docs |

## Local Development

1.  **Using Python 3:**
    ```bash
    python -m http.server
    ```
    Then open <http://localhost:8000> in your browser.

2.  **Using VS Code Live Server:**
    - Install the "Live Server" extension.
    - Right-click `index.html` and select "Open with Live Server".
    - Or click the "Go Live" button in the lower-right status bar.

3.  **Verify the site:**
    - Page scales from narrow (mobile) to wide (desktop) browser widths.
    - Theme button ("Pink theme" / "Lilac theme") toggles the `.pink` class.
    - Color scheme changes when the button is clicked (accent from lilac `#b080d0` to pink `#d493cf`, background from `#f6cef9` to `#ffd8f3`).
    - Keyboard navigation works (`Tab` moves focus, `focus-visible` outlines appear).
    - Theme preference survives a page reload.
- **Ctrl+Enter toggles the theme** (without clicking the button).

## Build / Modify

- No build steps. Edit `index.html`, `style.css`, or `script.js` directly.
- To change the accent colors, modify the `--accent` variable in `:root` (lilac: `#b080d0`) or the `.pink` rule (pink: `#d493cf`).
- To add more content sections, add `<section>` elements inside the `.content-grid`
  container in `index.html`.