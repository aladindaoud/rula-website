// Shared site behaviour: mobile navigation menu
(function () {
  const header = document.querySelector('header');
  const nav = header && header.querySelector('nav');
  if (!nav) return;
  const bar = nav.parentElement;
  const actions = bar.lastElementChild;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-surface-container-low transition-colors';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  actions.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'xl:hidden hidden border-t border-outline-variant/40 bg-background';
  const list = document.createElement('div');
  list.className = 'max-w-7xl mx-auto px-margin md:px-margin-tablet py-space-md flex flex-col';
  nav.querySelectorAll('a').forEach(function (a) {
    const link = document.createElement('a');
    link.href = a.getAttribute('href');
    link.textContent = a.textContent;
    const active = a.hasAttribute('aria-current');
    link.className = 'py-3 font-label-md text-label-md uppercase tracking-wider border-b border-surface-container-high last:border-0 ' +
      (active ? 'text-secondary' : 'text-on-surface-variant hover:text-primary');
    list.appendChild(link);
  });
  panel.appendChild(list);
  header.appendChild(panel);

  btn.addEventListener('click', function () {
    const open = panel.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.firstChild.textContent = open ? 'close' : 'menu';
  });
})();
