// Grab the elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navContainer = document.querySelector('.nav-container');  // Add reference to the nav container

// Add an event listener to toggle the menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});

// Close the menu if clicked outside of the nav menu
document.addEventListener('click', (event) => {
    // Check if the click is outside of the nav container and toggle button
    if (!navContainer.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('mobile-active');
    }
});
