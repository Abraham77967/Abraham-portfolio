document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    // Carousel card handling
    function showCard(index) {
        const cards = document.querySelectorAll('.carousel-card');
        cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }

    function nextCard() {
        const cards = document.querySelectorAll('.carousel-card');
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        const cards = document.querySelectorAll('.carousel-card');
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    // Initialize the first card as active
    showCard(currentIndex);

    // Attach event listeners to buttons if needed
    document.querySelector('.left-btn').addEventListener('click', prevCard);
    document.querySelector('.right-btn').addEventListener('click', nextCard);

    // Page transition handling
    const navLinks = document.querySelectorAll('header ul li a');
    const bodyContent = document.querySelector('main');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Fade out current content
            bodyContent.classList.add('fade-out');

            setTimeout(() => {
                // After fade-out, redirect to the new page
                window.location.href = link.getAttribute('href');
            }, 500); // Match this to the CSS transition duration
        });
    });

    // Fade in the new content on page load
    bodyContent.classList.add('fade-in');
});
