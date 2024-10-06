document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const contentWrapper = document.getElementById("content-wrapper");
    const collapseButton = document.getElementById("collapseButton");
    const sidebarToggle = document.getElementById("sidebarToggle");

    // Vérification si collapseButton existe avant d'ajouter un event listener
    if (collapseButton) {
        collapseButton.addEventListener("click", function() {
            sidebar.classList.toggle("collapsed");
            contentWrapper.classList.toggle("collapsed");

            const arrowIcon = this.querySelector("i");
            if (arrowIcon) {
                arrowIcon.classList.toggle("rotate");
            }
        });
    }

    // Vérification si sidebarToggle existe avant d'ajouter un event listener
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", function() {
            sidebar.classList.toggle("collapsed");
        });
    }
});
