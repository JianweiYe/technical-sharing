document.addEventListener('DOMContentLoaded', function() {
    // Initialize tab functionality for chip comparison
    const chipTabs = document.querySelectorAll('.chip-tab');
    const chipContents = document.querySelectorAll('.chip-content');
    
    chipTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.chip;
            
            // Update active tab
            chipTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            chipContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${target}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Initialize tab functionality for solutions
    const solutionTabs = document.querySelectorAll('.solution-tab');
    const solutionContents = document.querySelectorAll('.solution-content');
    
    solutionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.solution;
            
            // Update active tab
            solutionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            solutionContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${target}-solution`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Add smooth scrolling to section links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Disable zoom on mobile
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Add class for fade-in animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        section {
            opacity: 0;
        }
    </style>
`);
