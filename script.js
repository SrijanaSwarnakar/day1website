window.addEventListener("scroll", function () {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 500) {
        navbar.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "z-50"
        );
    } else {
        navbar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "z-50"
        );
    }

});

const scrollTopBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        scrollTopBtn.classList.remove("hidden");
    } else {
        scrollTopBtn.classList.add("hidden");
    }

});


scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




const menuBtn = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Message sent successfully!");

});

const menuLinks = document.querySelectorAll("#mobileMenu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");

    });

});