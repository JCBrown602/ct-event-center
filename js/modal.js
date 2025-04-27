// Give the user a little feedback - form submitted! - then reset form
document.addEventListener("DOMContentLoaded", () => {
  console.log("eventlistener triggered!");

  const form = document.getElementById("contactForm");
  const modal = document.getElementById("modal");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (form.checkValidity()) {
        modal.classList.remove("hidden");

        setTimeout(() => {
          modal.classList.add("hidden");
          form.reset();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
      } else {
        form.reportValidity();
      }
    });
  }
});