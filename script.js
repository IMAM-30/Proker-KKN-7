const viewButtons = [...document.querySelectorAll('[data-view-target]')];
const views = [...document.querySelectorAll('[data-view]')];
const themeToggle = document.querySelector('.theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function setView(name, updateHash = true) {
  const nextView = name === 'admin' ? 'admin' : 'layanan';

  for (const view of views) {
    const active = view.dataset.view === nextView;
    view.hidden = !active;
    view.classList.toggle('is-active', active);
  }

  for (const button of viewButtons) {
    const active = button.dataset.viewTarget === nextView;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  }

  if (updateHash) {
    history.replaceState(null, '', `#${nextView}`);
  }
}

for (const button of viewButtons) {
  button.addEventListener('click', () => {
    setView(button.dataset.viewTarget);
    document.querySelector('.portal-view.is-active')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

window.addEventListener('hashchange', () => setView(location.hash.slice(1), false));

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('portal-kkn-theme', next);
  } catch {
    // Tema tetap berubah untuk sesi berjalan meskipun penyimpanan dibatasi.
  }
  themeMeta.content = next === 'dark' ? '#0d1713' : '#f4f7f3';
});

for (const image of document.querySelectorAll('.app-icon img')) {
  image.addEventListener('error', () => image.parentElement.classList.add('image-error'));
}

document.getElementById('current-year').textContent = new Date().getFullYear();
setView(location.hash.slice(1), !['#layanan', '#admin'].includes(location.hash));
