document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const contentWrapper = document.getElementById("content-wrapper");
    const collapseButton = document.getElementById("collapseButton");
    const arrowIcon = collapseButton.querySelector("i");

    // Toggle sidebar collapse
    function toggleSidebar() {
        sidebar.classList.toggle("collapsed");
        contentWrapper.classList.toggle("collapsed");
        arrowIcon.classList.toggle("rotate");
    }

    // Click event for collapse button
    collapseButton.addEventListener("click", toggleSidebar);

    // Handle mobile toggle (burger icon)
    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", toggleSidebar);
    }

    // Remove any collapse by default on load (no initial collapse)
    sidebar.classList.remove("collapsed");
    contentWrapper.classList.remove("collapsed");
});
