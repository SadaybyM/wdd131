document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    let count = localStorage.getItem("reviewCount") || "0"; 
    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);

    document.getElementById("reviewCount").textContent = count;
});