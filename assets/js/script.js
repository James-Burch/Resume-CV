// Dark/Light mode toggle

const checkbox = document.getElementById('checkboxInput');

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

// Make sure navbar closes on mobile
document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Add click event to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if navbar is expanded (mobile view)
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Simulate click on navbar toggler
            }
        });
    });
});

// Get the confidence % and pass into width for progress bar CSS
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-fill');

    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent'); // Gets the percentage
        bar.style.width = percent + '%'; // Set the width dynamically
        bar.querySelector('.progress-text').textContent = percent + '%'; // Update the % text inside the progress bar
    });
});