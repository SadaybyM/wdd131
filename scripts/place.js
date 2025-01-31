document.addEventListener("DOMContentLoaded", function () {
  // Mostrar el año actual en el footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Mostrar la última fecha de modificación
  document.getElementById("lastModified").textContent = document.lastModified;

  // Variables para temperatura y velocidad del viento
  const temperature = 22; // en grados Celsius
  const windSpeed = 5; // en km/h

  function calculateWindChill(temp, wind) {
      if (temp <= 10 && wind > 4.8) {
          return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
      }
      return "N/A";
  }

  // Mostrar el factor de sensación térmica
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windChill").textContent = `${windChill} °C`;
});