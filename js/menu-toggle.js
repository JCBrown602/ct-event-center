document.addEventListener("DOMContentLoaded", function () {
  // Delay to ensure includes.js finishes
  setTimeout(() => {
    const toggleButton = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (toggleButton && navMenu) {
      toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    } else {
      console.warn("Menu toggle or navMenu not found yet.");
    }
  }, 100); // Delay slightly to allow header injection
});
