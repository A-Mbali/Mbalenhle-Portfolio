// =========================================
// DARK MODE
// =========================================

const darkModeToggle =
    document.getElementById("dark-mode-toggle");

const body =
    document.body;


// Check saved preference

if (localStorage.getItem("darkMode") === "enabled") {

    body.classList.add("dark-mode");

    darkModeToggle.textContent = "☀️";

}


// Toggle dark mode

darkModeToggle.addEventListener("click", function () {

    body.classList.toggle("dark-mode");


    if (body.classList.contains("dark-mode")) {

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

        darkModeToggle.textContent = "☀️";

    } else {

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

        darkModeToggle.textContent = "🌙";

    }

});


// =========================================
// BACK TO TOP
// =========================================

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// MOBILE NAVIGATION
// =========================================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const nav =
            document.querySelector(".nav-links");

        if (window.innerWidth <= 900) {

            nav.style.display = "none";

        }

    });

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function () {

        console.log(
            "Contact form submitted."
        );

    });

}
