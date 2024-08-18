let currentIndex = 0;

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
