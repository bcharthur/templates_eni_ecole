document.addEventListener("DOMContentLoaded", function() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;

    // Check if dark mode is already enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true; // Coche le switch si le mode sombre est activé
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener('change', function() {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Store preference
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', null); // Remove preference
        }
    });
});
