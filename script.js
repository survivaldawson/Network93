
// NETWORK 93 WEBSITE JAVASCRIPT

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav");

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link
const navigationLinks = document.querySelectorAll("#nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// Automatically update copyright year
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Website loaded
console.log("NETWORK 93 website loaded successfully.");
