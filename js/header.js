document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            
            // Iniciar menú y resaltar enlace activo
            setupMenu();
            highlightActiveLink();
        })
        .catch(error => console.error("Error cargando el header:", error));
});

function setupMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

function highlightActiveLink() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.href.toLowerCase(); // Obtiene la URL completa en minúsculas

    navLinks.forEach(link => {
        const linkHref = link.href.toLowerCase(); // Obtiene la URL completa del enlace

        if (currentUrl === linkHref) {
            link.classList.add("active");
        } else {
            link.classList.remove("active"); // Asegura que no haya múltiples seleccionados
        }
    });
}

