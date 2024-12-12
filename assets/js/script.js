// Dark/Light mode toggle

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
}