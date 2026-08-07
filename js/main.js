// Nexsiz site interactions – minimal & clean

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });

    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }

  // Highlight active nav based on current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Copy code button (optional enhancement)
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'copy';
    btn.style.cssText = `
      position: absolute; top: 0.5rem; right: 0.5rem;
      background: #1c1c24; border: 1px solid #2a2a35;
      color: #a0a0b0; font-size: 0.7rem; font-family: inherit;
      padding: 0.2rem 0.5rem; border-radius: 4px; cursor: pointer;
      opacity: 0; transition: opacity 0.2s;
    `;
    pre.style.position = 'relative';
    pre.appendChild(btn);

    pre.addEventListener('mouseenter', () => btn.style.opacity = '1');
    pre.addEventListener('mouseleave', () => btn.style.opacity = '0');

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = 'copied';
        setTimeout(() => btn.textContent = 'copy', 1500);
      } catch (e) {
        btn.textContent = 'fail';
      }
    });
  });
});
