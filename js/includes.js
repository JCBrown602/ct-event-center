/* Component Loader for header.html and footer.html
*/
// Wait for DOM to load and look for data-include selectors
document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[data-include]");
  
    // Loop through found selectors
    includeElements.forEach(async (el) => {
      const file = el.getAttribute("data-include");
      if (file) {
        try {
            // Async fetch
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Could not load ${file}`);
            // Convert file to text
            const html = await response.text();
            // Insert it in place of data-include
            el.innerHTML = html;
        } catch (err) {
            console.error(err);
            el.innerHTML = "<p style='color:red;'>Component failed to load.</p>";
        }
      }
    });
  });
  