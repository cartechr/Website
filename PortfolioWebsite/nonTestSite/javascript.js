// script.js

// Get all elements with class 'Game'
const games = document.querySelectorAll('.Game');

// Add hover event listeners to each game element
games.forEach(game => {
    const title = game.querySelector('.GameText');
    const originalTitle = title.textContent; // Store the original title

    game.addEventListener('mouseover', () => {
        title.textContent = " "; // Change this to the desired text
    });

    game.addEventListener('mouseout', () => {
        title.textContent = originalTitle; // Reset to the original title
    });
});
