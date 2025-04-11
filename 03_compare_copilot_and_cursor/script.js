document.addEventListener('DOMContentLoaded', function() {
  // Prevent zooming on the webpage
  window.addEventListener("wheel", (e) => {
    const isPinching = e.ctrlKey;
    if (isPinching) e.preventDefault();
  }, { passive: false });

  // Prevent context menu on mobile devices to improve user experience
  document.addEventListener('contextmenu', function(e) {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      e.preventDefault();
    }
  });

  // Make external links open in new tabs
  document.querySelectorAll('a[href^="http"]').forEach(anchor => {
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
  });

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add responsive handling for tables
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('overflow-x-auto');
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Replace missing icons with appropriate SVG
  document.querySelectorAll('svg').forEach(svg => {
    if (svg.innerHTML.includes('<users></users>')) {
      svg.innerHTML = '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>';
    }
    if (svg.innerHTML.includes('<calendar></calendar>')) {
      svg.innerHTML = '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>';
    }
    if (svg.innerHTML.includes('<clipboard-check></clipboard-check>')) {
      svg.innerHTML = '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"></path>';
    }
    if (svg.innerHTML.includes('<activity></activity>')) {
      svg.innerHTML = '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>';
    }
    if (svg.innerHTML.includes('<file-text></file-text>')) {
      svg.innerHTML = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>';
    }
    if (svg.innerHTML.includes('<eye></eye>')) {
      svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
    }
    if (svg.innerHTML.includes('<message-square></message-square>')) {
      svg.innerHTML = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>';
    }
  });
});
