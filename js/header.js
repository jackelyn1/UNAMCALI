document.addEventListener("DOMContentLoaded", function () {
    // If using the header include method
    if (document.getElementById("header-placeholder")) {
        fetch("../pages/header.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("header-placeholder").innerHTML = data;
                
                // Initialize after loading
                setupMenu();
                highlightActiveLink();
            })
            .catch(error => console.error("Error loading header:", error));
    } else {
        // Direct initialization if header is included in the page
        setupMenu();
        highlightActiveLink();
    }
});

function setupMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
        
        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".navbar")) {
                navLinks.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
        
        // Close menu when clicking on a link
        const links = document.querySelectorAll(".nav-links a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });
    }
}

function highlightActiveLink() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.href.toLowerCase(); // Get full URL in lowercase

    // Make sure active class is applied based on exact URL match
    navLinks.forEach(link => {
        const linkHref = link.href.toLowerCase(); // Get full URL of link
        
        if (currentUrl === linkHref) {
            link.classList.add("active");
        } else {
            // Special case for index page
            if ((currentUrl.endsWith('/') || currentUrl.endsWith('index.html')) && 
                linkHref.includes('index.html')) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}