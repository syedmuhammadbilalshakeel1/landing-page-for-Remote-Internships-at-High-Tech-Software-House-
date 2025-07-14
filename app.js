document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const headerOffset = document.querySelector("header")?.offsetHeight || 0;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - headerOffset,
          behavior: "smooth",
        });
      }
    });
  });

  // Form validation
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
    } else {
      alert("Form submitted successfully! (This is a placeholder submission)");
      contactForm.reset();
    }
  });

  // Scroll to top logic
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
