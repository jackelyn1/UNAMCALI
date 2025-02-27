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


