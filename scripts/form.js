document.addEventListener("DOMContentLoaded", () => {
    // Array de productos
    const products = [
        { id: "prod1", name: "Product A" },
        { id: "prod2", name: "Product B" },
        { id: "prod3", name: "Product C" }
    ];

    // Poblar el select de productos
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Última modificación
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    // Contador en localStorage
    let count = localStorage.getItem("reviewCount") || "0";
    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);
    
    document.getElementById("reviewCount")?.textContent = count;
    
    console.log("Form loaded successfully.");
});