document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");

    // Show/hide "Back to Top" button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scroll to top
    backToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Dark mode toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleButton.textContent = body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
    });
});
