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
    const currentUrl = window.location.pathname.split("/").pop().toLowerCase(); // Obtiene solo el nombre del archivo

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop().toLowerCase(); // Obtiene solo el nombre del archivo

        if (linkHref === currentUrl) {
            link.classList.add("active");
        }
    });
}

