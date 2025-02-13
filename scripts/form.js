document.addEventListener("DOMContentLoaded", () => {
    // Array of products
    const products = [
        { id: "prod1", name: "Product A" },
        { id: "prod2", name: "Product B" },
        { id: "prod3", name: "Product C" }
    ];

    // Populate the product select
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Last modification
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});
