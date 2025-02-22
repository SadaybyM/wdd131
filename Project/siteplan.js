document.addEventListener("DOMContentLoaded", () => {
    // Update the current year in the footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("formMessage").textContent = "Message sent successfully!";
            localStorage.setItem("lastContact", new Date().toLocaleString());
        });
    }

    // Apply active class to the selected navigation link
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Populate adoption list with images
    const petList = document.getElementById("petList");
    if (petList) {
        const pets = [
            { name: "Bella", type: "Dog", image: "images/pet1.webp" },
            { name: "Whiskers", type: "Cat", image: "images/pet2.webp" },
            { name: "Buddy", type: "Dog", image: "images/pet3.webp" }
        ];
        pets.forEach(pet => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${pet.image}" alt="${pet.name}" loading="lazy"><br>${pet.name} - ${pet.type}`;
            petList.appendChild(li);
        });
    }
});