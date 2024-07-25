document.addEventListener('DOMContentLoaded', function() {
    // Dropdown toggle functionality
    const servicesDropdownToggle = document.getElementById('servicesDropdown');
    const dropdownMenu = document.querySelector('.navbar-nav .dropdown-menu');
    const navbarCollapse = document.getElementById('navbarNav');
  
    servicesDropdownToggle.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      dropdownMenu.classList.toggle('show'); // Toggle dropdown
    });
  
    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(e) {
      if (!dropdownMenu.contains(e.target) && !servicesDropdownToggle.contains(e.target)) {
        dropdownMenu.classList.remove('show'); // Hide dropdown
      }
    });
  
    // Close the dropdown when an option is selected
    dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
        // Collapse the navbar
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  
    // Add event listeners to all main nav items
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  });
  