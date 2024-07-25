// Auto horizontal scroll behavior
const projectCardsWrapper = document.querySelector(".project-cards-wrapper");
const projectCards = document.querySelector(".project-cards");
let isDown = false;
let startX;
let scrollLeft;

projectCardsWrapper.addEventListener("mousedown", (e) => {
  isDown = true;
  projectCardsWrapper.classList.add("active");
  startX = e.pageX - projectCardsWrapper.offsetLeft;
  scrollLeft = projectCardsWrapper.scrollLeft;
});

projectCardsWrapper.addEventListener("mouseleave", () => {
  isDown = false;
  projectCardsWrapper.classList.remove("active");
});

projectCardsWrapper.addEventListener("mouseup", () => {
  isDown = false;
  projectCardsWrapper.classList.remove("active");
});

projectCardsWrapper.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - projectCardsWrapper.offsetLeft;
  const walk = (x - startX) * 3; // Scroll faster
  projectCardsWrapper.scrollLeft = scrollLeft - walk;
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const info = document.getElementById("info").value.trim();

  // Validate form fields (optional)
  if (!name || !phone || !email || !info) {
    alert("Please fill in all fields.");
    return;
  }

  // Create mailto link
  const mailtoLink = `mailto:Sifra@xcelldigitalservices.com?subject=Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(info)}`;

  // Open mailto link
  window.location.href = mailtoLink;
});

// Dropdown toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const servicesDropdownToggle = document.getElementById('servicesDropdown');
  const dropdownMenu = document.querySelector('.navbar-nav .dropdown-menu');

  servicesDropdownToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show'); // Hide dropdown
    } else {
      dropdownMenu.classList.add('show'); // Show dropdown
    }
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function(e) {
    if (!dropdownMenu.contains(e.target) && !servicesDropdownToggle.contains(e.target)) {
      dropdownMenu.classList.remove('show'); // Hide dropdown
    }
  });
});