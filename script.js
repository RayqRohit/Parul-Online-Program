document.addEventListener('DOMContentLoaded', function () {
    // Dropdown logic
    const toggle = document.querySelector('.navbar-dropdown-toggle');
    const dropdown = document.getElementById('programDropdown');

    if (toggle && dropdown) {
        // Ensure dropdown is hidden on page load
        dropdown.classList.remove('show');

        // Toggle dropdown on click
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('show');
            toggle.setAttribute('aria-expanded', dropdown.classList.contains('show'));
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', function () {
            dropdown.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Mobile menu logic (using existing hamburger checkbox)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('change', function () {
            if (menuToggle.checked) {
                navLinks.classList.add('active');
            } else {
                navLinks.classList.remove('active');
                // Also close dropdown when closing mobile menu
                if (dropdown) {
                    dropdown.classList.remove('show');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});