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
  const walk = (x - startX) * 3; //scroll-fast
  projectCardsWrapper.scrollLeft = scrollLeft - walk;
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const info = document.getElementById("info").value;

    // Create mailto link
    const mailtoLink = `mailto:Sifra@xcelldigitalservices.com?subject=Contact from ${name}&body=Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${info}`;

    // Open mailto link
    window.location.href = mailtoLink;
  });