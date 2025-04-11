document.addEventListener('DOMContentLoaded', function() {
  const timelineElements = document.querySelectorAll('.timeline-element');
  
  // Add animation to timeline elements
  timelineElements.forEach((element, index) => {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Trigger animation with delay based on index
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 * index);
  });
  
  // Add interactive features to CUDA features cards
  const featureCards = document.querySelectorAll('#overview .bg-white');
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f8f9fa';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '#ffffff';
    });
  });
  
  // Add counter animation to key metrics
  function animateValue(element, start, end, duration) {
    if (!element) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const metrics = document.querySelectorAll('.metric-value');
  metrics.forEach(metric => {
    const targetValue = parseInt(metric.getAttribute('data-value'), 10);
    animateValue(metric, 0, targetValue, 1500);
  });
});
