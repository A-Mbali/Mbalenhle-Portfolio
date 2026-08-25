const button = document.getElementById("dark-mode-toggle");


// Load saved dark mode
if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️";
}


// Dark mode
button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "on");
        button.textContent = "☀️";

    } else {

        localStorage.setItem("darkMode", "off");
        button.textContent = "🌙";

    }

});
