// Home page button
function showWelcome() {
    alert("Welcome to Travel Explorer! Your journey starts now 🌍✈️");
}

// Contact form JS
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("response");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        response.textContent = "Your message has been sent successfully!";
        form.reset();
    });
});
