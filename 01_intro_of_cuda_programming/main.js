// Initialize smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Handle active nav highlighting
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-primary');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-primary');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);
  highlightNavigation(); // Initial check
  
  // Interactive logo animation
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('mouseenter', function() {
      this.style.transform = 'rotate(20deg)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseleave', function() {
      this.style.transform = 'rotate(0deg)';
    });
  }
  
  // Make code blocks scrollable horizontally on small screens
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(block => {
    if (block.scrollWidth > block.clientWidth) {
      block.style.overflowX = 'auto';
    }
  });
});

// Add copy code functionality
function setupCodeCopyButtons() {
  document.querySelectorAll('pre').forEach(codeBlock => {
    // Check if button already exists
    if (codeBlock.querySelector('.copy-button')) return;
    
    const button = document.createElement('button');
    button.className = 'copy-button absolute top-2 right-2 p-1 bg-gray-700 text-white rounded text-xs font-geist-mono';
    button.innerHTML = 'Copy';
    button.style.opacity = '0.7';
    
    button.addEventListener('mouseenter', () => {
      button.style.opacity = '1';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.opacity = '0.7';
    });
    
    button.addEventListener('click', () => {
      const code = codeBlock.querySelector('code') || codeBlock;
      const text = code.innerText;
      
      navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = 'Copied!';
        setTimeout(() => {
          button.innerHTML = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy code', err);
        button.innerHTML = 'Error!';
        setTimeout(() => {
          button.innerHTML = 'Copy';
        }, 2000);
      });
    });
    
    // Make the code block relative for absolute positioning of the button
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(button);
  });
}

// Setup code copy buttons after page loads
window.addEventListener('load', setupCodeCopyButtons);
