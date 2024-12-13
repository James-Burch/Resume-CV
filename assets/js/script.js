// Dark/Light mode toggle

const checkbox = document.getElementById('checkbox');
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

// Function to toggle dark mode
function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
}

// Load saved preference
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
setDarkMode(savedDarkMode);
checkbox.checked = savedDarkMode;

// Preview handlers
sunIcon.addEventListener('mouseenter', () => {
    setDarkMode(false);
});

moonIcon.addEventListener('mouseenter', () => {
    setDarkMode(true);
});

// Restore saved theme when mouse leaves
const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('mouseleave', () => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
});

// Actually change the theme when clicked
checkbox.addEventListener('change', () => {
    setDarkMode(checkbox.checked);
    localStorage.setItem('darkMode', checkbox.checked);
});