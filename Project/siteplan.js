document.addEventListener("DOMContentLoaded", () => {
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

    // Populate adoption list
    const petList = document.getElementById("petList");
    if (petList) {
        const pets = [
            { name: "Bella", type: "Dog", image: "images/pet1.jpg" },
            { name: "Whiskers", type: "Cat", image: "images/pet2.jpg" },
            { name: "Buddy", type: "Dog", image: "images/pet3.jpg" }
        ];
        pets.forEach(pet => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${pet.image}" alt="${pet.name}" loading="lazy"><br>${pet.name} - ${pet.type}`;
            petList.appendChild(li);
        });
    }
});