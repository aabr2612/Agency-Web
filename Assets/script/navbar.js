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

  // Function to collapse the navbar
  function collapseNavbar() {
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  }

  // Handle clicks on the dropdown items
  dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      // Allow navigation
      window.location.href = e.currentTarget.href;
      
      // Close dropdown and collapse navbar
      dropdownMenu.classList.remove('show');
      collapseNavbar();
      
      // Prevent the default action (if needed)
      e.preventDefault();
    });
  });

  // Handle clicks on all main nav items except "What We Do"
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (!link.closest('.nav-item').classList.contains('dropdown')) {
      link.addEventListener('click', function() {
        collapseNavbar();
      });
    }
  });
});
