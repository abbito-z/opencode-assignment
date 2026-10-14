/*script.js – Tiny theme switcher for the origami page*/
/*Toggles light ↔ lilac mode and persists the choice in localStorage*/

(() => {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;

  // Check for saved preference or prefers-color-scheme
  const prefersLilac = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('origami-theme');
  const html = document.documentElement;

  // Apply initial theme
  if (savedTheme === 'lilac') {
    html.classList.add('lilac');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Light mode';
  } else if (prefersLilac && !savedTheme) {
    // Optional: auto-dark if system prefers dark (you can remove this)
    html.classList.add('lilac');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Light mode';
  }

  // Toggle handler
  btn.addEventListener('click', () => {
    html.classList.toggle('lilac');
    const isLilac = html.classList.contains('lilac');
    btn.setAttribute('aria-pressed', isLilac);
    btn.textContent = isLilac ? 'Light mode' : 'Lilac mode';

    // Persist preference
    if (isLilac) {
      localStorage.setItem('origami-theme', 'lilac');
    } else {
      localStorage.removeItem('origami-theme');
    }
  });
})();