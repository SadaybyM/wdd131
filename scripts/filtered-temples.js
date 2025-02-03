document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

  // Complete list of temples
  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Santo Domingo Dominican Republic",
          location: "Santo Domingo Dominican Republic",
          dedicated: "2000, September, 17",
          area: 67000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
      },
      {
          templeName: "Hong Kong China",
          location: "Hong Kong China",
          dedicated: "1996, May, 26-27",
          area: 51921,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
      },
      {
          templeName: "Salvador Brazil Temple",
          location: "Salvador Brazil Temple",
          dedicated: "2024, October, 20",
          area: 29963,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
      },
      {
          templeName: "Vancouver British Columbia",
          location: "Vancouver British Columbia",
          dedicated: "2010, May, 02",
          area: 28165,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"
      },
      {
          templeName: "Seoul Korea",
          location: "Seoul Korea",
          dedicated: "1985, December, 14-15",
          area: 67000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
      }
  ];

  function createTempleCard(filteredTemples) {
      const container = document.getElementById("temple-cards");
      container.innerHTML = ""; 

      filteredTemples.forEach(temple => {
          let card = document.createElement("section");
          let name = document.createElement("h3");
          let location = document.createElement("p");
          let dedication = document.createElement("p");
          let area = document.createElement("p");
          let img = document.createElement("img");

          name.textContent = temple.templeName;
          location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
          dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
          area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

          img.setAttribute("src", temple.imageUrl);
          img.setAttribute("alt", `${temple.templeName} Temple`);
          img.setAttribute("loading", "lazy");

          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedication);
          card.appendChild(area);
          card.appendChild(img);

          container.appendChild(card);
      });
  }

 
  createTempleCard(temples);

  document.getElementById("Home").addEventListener("click", () => {
      document.getElementById("title").textContent = "Home";
      createTempleCard(temples);
  });

  document.getElementById("Old").addEventListener("click", () => {
      document.getElementById("title").textContent = "Old Temples";
      const oldTemples = temples.filter(t => parseInt(t.dedicated.split(", ")[0]) < 1900);
      createTempleCard(oldTemples);
  });

  document.getElementById("New").addEventListener("click", () => {
      document.getElementById("title").textContent = "New Temples";
      const newTemples = temples.filter(t => parseInt(t.dedicated.split(", ")[0]) > 2000);
      createTempleCard(newTemples);
  });

  document.getElementById("Large").addEventListener("click", () => {
      document.getElementById("title").textContent = "Large Temples";
      const largeTemples = temples.filter(t => t.area > 90000);
      createTempleCard(largeTemples);
  });

  document.getElementById("Small").addEventListener("click", () => {
      document.getElementById("title").textContent = "Small Temples";
      const smallTemples = temples.filter(t => t.area < 10000);
      createTempleCard(smallTemples);
  });
});
