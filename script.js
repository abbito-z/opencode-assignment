/*script.js – Tiny theme switcher for the origami page*/
/*Toggles lilac ↔ pink mode and persists the choice in localStorage*/

(() => {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;

  // Check for saved preference
  const savedTheme = localStorage.getItem('origami-theme');
  const html = document.documentElement;

  // Apply initial theme
  if (savedTheme === 'pink') {
    html.classList.add('pink');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Lilac mode';
  } else {
    // Default to lilac (no class needed, :root has lilac vars)
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = 'Pink mode';
  }

  // Toggle handler
  btn.addEventListener('click', () => {
    const isPink = html.classList.toggle('pink');
    btn.setAttribute('aria-pressed', isPink);
    btn.textContent = isPink ? 'Lilac mode' : 'Pink mode';

    // Persist preference
    if (isPink) {
      localStorage.setItem('origami-theme', 'pink');
    } else {
      localStorage.removeItem('origami-theme');
    }
  });
})();