document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const info = document.getElementById("info").value;
      const service = document.querySelector('input[name="service"]:checked');

      // Validation check
      if (!name || !phone || !email || !info || !service) {
        alert("Please fill out all required fields and select a service.");
        return;
      }

      // Create mailto link
      const mailtoLink = `mailto:Sifra@xcelldigitalservices.com?subject=Contact from ${name}&body=Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service.value}%0AMessage: ${info}`;

      // Open mailto link
      window.location.href = mailtoLink;
    });
});