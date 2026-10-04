
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Open or close the mobile menu.
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

// Close the menu when a section is selected.
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("show");
    });
});

// Show the current year in the footer.
document.getElementById("year").textContent =
    new Date().getFullYear();
