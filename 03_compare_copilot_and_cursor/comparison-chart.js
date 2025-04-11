document.addEventListener('DOMContentLoaded', function() {
  // This script would normally create interactive charts comparing GitHub Copilot and Cursor AI
  // For simplicity, we'll just use static content in the HTML
  // In a real implementation, you might use Chart.js or D3.js to create interactive visualizations
  
  // Example of what could be included:
  // - Radar chart comparing features
  // - Bar chart comparing cost structures
  // - Line chart showing potential productivity gains over time
  // - Pie charts for language support comparison
  
  // Adding some basic interactivity to the page
  const cards = document.querySelectorAll('.rounded-lg');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-md');
      card.style.transform = 'translateY(-2px)';
      card.style.transition = 'all 0.2s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-md');
      card.style.transform = 'translateY(0)';
    });
  });
});
