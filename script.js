document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    // Function to show the current card based on the index
    function showCard(index) {
        const cards = document.querySelectorAll('.carousel-card');
        cards.forEach((card, i) => {
            card.classList.remove('active');
            card.style.visibility = 'hidden'; // Hide all cards initially
            if (i === index) {
                card.classList.add('active');
                card.style.visibility = 'visible'; // Show the active card
            }
        });
    }

    // Function to show the next card
    function nextCard() {
        const cards = document.querySelectorAll('.carousel-card');
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    // Function to show the previous card
    function prevCard() {
        const cards = document.querySelectorAll('.carousel-card');
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    // Initialize the first card as active
    showCard(currentIndex);

    // Attach event listeners to carousel buttons
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
            }, 500); // Ensure this matches the CSS transition duration
        });
    });

    // Fade in the new content on page load
    window.addEventListener('load', () => {
        bodyContent.classList.add('fade-in'); // Only fade in after the page has fully loaded
    });
});

// Select the carousel buttons and all cards
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const cards = document.querySelectorAll('.carousel-card');

let currentIndex = 0; // Index of the currently active card

// Function to update the visibility of the cards
function updateCards(index) {
    cards.forEach((card, i) => {
        // Remove the active class from all cards
        card.classList.remove('active');
        // Add the active class to the selected card
        if (i === index) {
            card.classList.add('active');
        }
    });
}

// Event listener for the left button
leftBtn.addEventListener('click', () => {
    // Move to the previous card, wrap around if at the start
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateCards(currentIndex);
});

// Event listener for the right button
rightBtn.addEventListener('click', () => {
    // Move to the next card, wrap around if at the end
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    updateCards(currentIndex);
});

// Initialize the first card as active when the page loads
updateCards(currentIndex);
