// Give the user a little feedback - form submitted! - then reset form
document.addEventListener("DOMContentLoaded", () => {
    console.log("eventlistener triggered!");
  
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("modal");
  
    // Just in case something caused modal to be visible on load
    modal.classList.add("hidden");
    console.log("After eventListener:", modal.classList);
  
    function submitMessage(event) {
      event.preventDefault();
      console.log("Modal triggered!");
  
      modal.classList.remove("hidden");
      console.log("After showing:", modal.classList);
  
      setTimeout(() => {
        modal.classList.add("hidden");
        console.log("After hiding:", modal.classList);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2500);
    }

    if (form) {
      form.addEventListener("submit", submitMessage);
    }
  });  

/* function clearForm() {
document.getElementById('contactForm').reset();
} 

/*
function submitMessage(event) {
    event.preventDefault();
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.getElementById('contactForm').reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  }

  function clearForm() {
    document.getElementById('contactForm').reset();
  }

  window.addEventListener('load', function () {
    window.location.hash = '#top'; // Forces jump to #top on load
    setTimeout(() => window.scrollTo(0, 0), 1); // Scrolls to absolute top
  });
  */