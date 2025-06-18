document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page script loaded!');

    // Example of simple JavaScript for smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more interactivity here, like:
    // - Form validation
    // - Simple animations on scroll (e.g., using Intersection Observer)
    // - Toggles for mobile navigation (if you expand the design)

    // For a simple landing page, minimal JS is often sufficient.
});