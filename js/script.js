function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}




function openModal(pdfUrl) {
    document.getElementById("pdfViewer").src = pdfUrl;
    document.getElementById("pdfModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfViewer").src = "";
}


// Cerrar modal al hacer clic afuera
window.onclick = function(event) {
    let modal = document.getElementById("pdfModal");
    if (event.target === modal) {
        closeModal();
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");

    function checkVisibility() {
        const triggerHeight = window.innerHeight * 0.8;

        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            if (eventTop < triggerHeight) {
                event.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
